export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChartItem, TopCard } from "@/components/top-card/top-card";
import ordinal from "ordinal";
import { Card } from "@/components/ui/card";
import { endpoints } from "@/lib/api";

const getTop30Data = async (): Promise<Stats[]> => {
  try {
    const res = await fetch(endpoints.top30, {
      next: { tags: ["all"] },
    });

    return await res.json();
  } catch (error) {
    console.log(`${error}  | ${endpoints.top30}`);
    return notFound();
  }
};

const getTop3Data = async (): Promise<UserData[]> => {
  try {
    const res = await fetch(endpoints.top3, {
      next: { tags: ["all"] },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

type PageType = () => Promise<JSX.Element>;

const Page: PageType = async () => {
  const data = await getTop30Data();
  const chartData = await getTop3Data();

  const chartDataWithPlacement: BarChartItem[] = chartData?.map((c, index) => ({
    name: c.userName,
    value: c.killCount,
    placement: ordinal(index + 1),
  }));

  return (
    <div className="container mx-auto  flex flex-col gap-5">
      <Card className="bg-transparent">
        <TopCard data={chartDataWithPlacement} />
      </Card>

      <ScrollArea className="h-[65vh] rounded-md border">
        <DataTable columns={columns} data={data} />
      </ScrollArea>
    </div>
  );
};

export default Page;
