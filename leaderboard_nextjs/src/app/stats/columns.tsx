"use client";

import { PlacementStatus } from "@/components/placement-status/placement-status";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Stats>[] = [
  {
    accessorKey: "id",
    header: "place",
    cell: ({ row, getValue }) => {
      const his = row?.original?.history;
      const id = getValue();

      return <PlacementStatus status={his?.status} />;
    },
  },
  {
    accessorKey: "records.userName",
    header: "name",
  },
  {
    accessorKey: "records.killCount",
    header: "points",
  },
];

export { columns };
