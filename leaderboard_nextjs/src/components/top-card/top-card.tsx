import { cn } from "@/lib/utils";
import { Chip } from "../chip/chip";
import { RandomAvatar } from "../random-avatar/random-avatar";
import styles from "./style.module.css";

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

  return (
    <div className="flex justify-around items-end h-64">
      {data.map(({ name, value, placement }, index) => (
        <div key={index} className="flex flex-col items-center ">
          <RandomAvatar name={name} />
          <span className="text-center mt-2">{name}</span>
          <div
            className={cn(
              "bg-blue-500 w-20 rounded-t-2xl flex flex-col items-center justify-end ease-linear",
              styles.fadeIn
            )}
            style={{ height: `${value * 2}px` }}
          >
            <div className="mb-1">{placement}</div>
            <div className="mb-1">{<Chip label={value.toString()} />}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { TopCard };
export type { BarChartItem };
