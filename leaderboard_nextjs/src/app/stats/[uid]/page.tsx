import { Card } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { KillCountForm } from "./form";
import { endpoints } from "@/lib/api";

const getData = async (id: string): Promise<UserData> => {
  try {
    const res = await fetch(endpoints.stats + "/" + id, {
      next: { tags: ["all"] },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

type PageProps = {
  params: {
    uid: string;
  };
};

type PageType = (props: PageProps) => Promise<JSX.Element>;

const Page: PageType = async ({ params: { uid } }) => {
  const data = await getData(uid);

  return (
    <>
      <Card className="p-5">
        <KillCountForm
          killCount={data.killCount}
          userId={+uid}
          userName={data.userName}
        />
      </Card>
    </>
  );
};

export default Page;
