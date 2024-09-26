"use client";

import { PlacementStatus } from "@/components/placement-status/placement-status";
import { RandomAvatar } from "@/components/random-avatar/random-avatar";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
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
    cell: ({ row, renderValue }) => {
      const uid = row.original.records.userId;
      return (
        <div className="flex gap-2 items-center">
          <Link
            className="flex gap-2 items-center"
            href={{ pathname: "/stats/" + uid }}
          >
            <RandomAvatar />

            <div>{`${renderValue()}`}</div>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "records.killCount",
    header: "points",
  },
];

export { columns };
