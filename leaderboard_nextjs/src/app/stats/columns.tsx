"use client";

import { PlacementStatus } from "@/components/placement-status/placement-status";
import { ColumnDef } from "@tanstack/react-table";
import ordinal from "ordinal";

const columns: ColumnDef<Stats>[] = [
  {
    accessorKey: "place",
    header: "place",
    cell: ({ row, getValue }) => {
      const history = row?.original?.history;

      const place = getValue() as number;
      const placement = ordinal(place);

      return (
        <div className="flex gap-1 items-center">
          <PlacementStatus status={history?.status} />
          <h3>{placement}</h3>
        </div>
      );
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
