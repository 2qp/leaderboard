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
      return <ChevronUp color="green" />;
    case "DOWN":
      return <ChevronDown color="red"/>
    case "NEUTRAL":
      return <DashIcon />;
  }
};

export { PlacementStatus };
