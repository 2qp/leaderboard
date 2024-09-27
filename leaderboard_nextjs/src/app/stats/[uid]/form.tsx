"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { mutateKillCount } from "./actions";
import { formSchema } from "./formSchema";
import { LoadingSpinner } from "@/components/loading-spinner/loading-spinner";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {!pending && <span className="">Add</span>}
      {pending && <LoadingSpinner />}
    </Button>
  );
};

type KillCountFormProps = Pick<
  UserData,
  "killCount" | "userId" | "userName"
> & {};

type KillCountFormType = (props: KillCountFormProps) => JSX.Element;

const initialState = {
  message: "",
};

const KillCountForm: KillCountFormType = ({ userId, killCount, userName }) => {
  const [state, formAction] = useFormState(mutateKillCount, initialState);

  const { back } = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  //
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: userId,
      killCount: killCount,
    },
  });

  return (
    <Form {...form}>
      <form ref={formRef} action={formAction} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="killCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>KillCount</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                {" This is " + userName + "'s kill count."}
              </FormDescription>
              <FormMessage>
                {state?.message != "" && state?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <input type="hidden" {...form.register("id")} value={userId} />
        <div className="flex gap-2">
          <SubmitButton />
          <Button type="button" variant="secondary" onClick={back}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { KillCountForm };
