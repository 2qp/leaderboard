import { fetchFromAPI } from "@/lib/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";

type PageType = (props: {}) => Promise<JSX.Element>;

const Page: PageType = async () => {
  const res = await fetch("http://localhost:3001/stats/top30",{ next: { revalidate: 0 } });
  const data = await res.json();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data as any} />
    </div>
  );
};

export default Page;
