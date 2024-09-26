"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const ReactNiceAvatar = dynamic(async () => await import("react-nice-avatar"), {
  ssr: false,
  loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
});

type RandomAvatarProps = {};
type RandomAvatarType = (props: RandomAvatarProps) => JSX.Element;
const RandomAvatar: RandomAvatarType = () => {
  return <ReactNiceAvatar className="w-10 h-10 z-[-10]" />;
};

export { RandomAvatar };
