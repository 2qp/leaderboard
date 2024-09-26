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
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  killCount: z.number().min(0, {
    message: "Kill count must be at least 0.",
  }),
});

type KillCountFormProps = Pick<UserData, "killCount" | "userId">;

type KillCountFormType = (props: KillCountFormProps) => JSX.Element;

const KillCountForm: KillCountFormType = ({ userId, killCount }) => {
  const { back } = useRouter();

  //
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      killCount: killCount,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="killCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>KillCount</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                {" This is " + userId + "'s kill count."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="secondary" onClick={back}>
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { KillCountForm };
