import { z } from "zod";

const formSchema = z.object({
  id: z.coerce.number().min(0, {
    message: "id must be at least 0.",
  }),
  killCount: z.coerce.number().min(0, {
    message: "Kill count must be at least 0.",
  }),
});

type KillCountPayload = z.infer<typeof formSchema>;

export { formSchema };
export type { KillCountPayload };
