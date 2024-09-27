"use client";

import dynamic from "next/dynamic";
import { genConfig } from "react-nice-avatar";
import { Skeleton } from "../ui/skeleton";

const ReactNiceAvatar = dynamic(async () => await import("react-nice-avatar"), {
  ssr: false,
  loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
});

type RandomAvatarProps = {
  name?: string;
};

type RandomAvatarType = (props: RandomAvatarProps) => JSX.Element;
const RandomAvatar: RandomAvatarType = ({ name }) => {
  const config = genConfig(name);

  return <ReactNiceAvatar className="w-10 h-10 z-[-10]" {...config} />;
};

export { RandomAvatar };
