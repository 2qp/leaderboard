import { Card } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { KillCountForm } from "./form";

const getData = async (id: number): Promise<UserData> => {
  try {
    const res = await fetch(`http://localhost:3001/stats/${id}`, {
      next: { tags: ["all"] },
    });

    return await res.json();
  } catch (error) {
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
  const data = await getData(+uid);

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
