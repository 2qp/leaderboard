import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChartItem, TopCard } from "@/components/top-card/top-card";
import ordinal from "ordinal";

const getTop30Data = async (): Promise<Stats[]> => {
  try {
    const res = await fetch("http://localhost:3001/stats/top-30", {
      next: { revalidate: 0 },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

const getTop3Data = async (): Promise<UserData[]> => {
  try {
    const res = await fetch("http://localhost:3001/stats/top-3", {
      next: { revalidate: 0 },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

type PageType = (props: {}) => Promise<JSX.Element>;

const Page: PageType = async () => {
  const data = await getTop30Data();
  const chartData = await getTop3Data();

  const chartDataWithPlacement: BarChartItem[] = chartData?.map((c, index) => ({
    name: c.userName,
    value: c.killCount,
    placement: ordinal(index + 1),
  }));

  return (
    <div className="container mx-auto py-10 ">
      <TopCard data={chartDataWithPlacement} />
      <ScrollArea className="h-[80vh] rounded-md border">
        <DataTable columns={columns} data={data} />
      </ScrollArea>
    </div>
  );
};

export default Page;
