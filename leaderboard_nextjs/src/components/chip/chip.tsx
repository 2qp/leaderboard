type ChipProps = {
  label: string;
};

type ChipType = (props: ChipProps) => JSX.Element;

const Chip: ChipType = ({ label }) => {
  return (
    <div className="flex items-center bg-white bg-opacity-40 rounded-full px-2 py-1">
      <span className={"text-sm text-nowrap"}>{label + " PTS"}</span>
    </div>
  );
};

export { Chip };
