"use server";

import { redirect } from "next/navigation";
import { formSchema } from "./formSchema";
import { revalidateTag } from "next/cache";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function mutateKillCount(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  if (parsed.data.id === 0) {
    return {
      message: "Invalid id",
      fields: { id: "parsed.data.id" },
    };
  }

  // await delay(2000);
  const response = await fetch(
    `http://localhost:3001/stats/${parsed.data.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ killCount: parsed.data.killCount }),
    }
  );

  if (!response.ok) {
    return { message: "issue with submission" };
  }

  revalidateTag("all");
  redirect("/stats");
}
