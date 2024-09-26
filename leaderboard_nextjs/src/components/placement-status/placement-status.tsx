import { DashIcon } from "@radix-ui/react-icons";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";

type PlacementStatusProps = {
  status?: PlacementStatus;
};

type PlacementStatusType = (props: PlacementStatusProps) => JSX.Element;

const PlacementStatus: PlacementStatusType = ({ status = 'NEUTRAL' }) => {
  switch (status) {
    case "NEW":
      return <Dot />;
    case "UP":
      return <ChevronUp />;
    case "DOWN":
      return <ChevronDown />;
    case "NEUTRAL":
      return <DashIcon />;
  }
};

export { PlacementStatus };
