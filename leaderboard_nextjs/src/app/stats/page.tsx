import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ScrollArea } from "@/components/ui/scroll-area";

const getData = async (): Promise<Stats[]> => {
  try {
    const res = await fetch("http://localhost:3001/stats/top30", {
      next: { revalidate: 0 },
    });

    return await res.json();
  } catch (error) {
    return notFound();
  }
};

type PageType = (props: {}) => Promise<JSX.Element>;

const Page: PageType = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 ">
      <ScrollArea className="h-[80vh] rounded-md border">
        <DataTable columns={columns} data={data} />
      </ScrollArea>
    </div>
  );
};

export default Page;
