import { cn } from "@/lib/utils";
import { Chip } from "../chip/chip";
import { RandomAvatar } from "../random-avatar/random-avatar";
import styles from "./style.module.css";
import { useMemo } from "react";

type BarChartItem = {
  name: string;
  value: number;
  placement: string;
};

type TopCardProps = {
  data: BarChartItem[];
};

type TopCardType = (props: TopCardProps) => JSX.Element;

const TopCard: TopCardType = ({ data = [] }) => {
  //
  if (data.length === 0) {
    return <div className=" flex justify-center">{"no data"}</div>;
  }

  const maxValue = useMemo(
    () => Math.max(...data.map((item) => item.value)),
    [data]
  );

  return (
    <div className="flex justify-around items-end px-5 pt-5">
      {data.map(({ name, value, placement }, index) => {
        const size = ((value / maxValue) * 100).toFixed(0).toString();
        return (
          <div key={index} className="flex flex-col items-center ">
            <RandomAvatar name={name} />
            <div className="text-center mt-2 ">{name}</div>
            <div
              className={cn(
                "bg-blue-500 w-20 rounded-t-2xl flex flex-col items-center justify-end ease-linear",
                styles.fadeIn
              )}
              style={{
                height: `${size}px`,
              }}
            >
              <div className="mb-1 text-sm">{placement}</div>
              <div className="mb-1">{<Chip label={value.toString()} />}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { TopCard };
export type { BarChartItem };
