import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

type LayoutType = (props: LayoutProps) => JSX.Element;

const Layout: LayoutType = ({ children }) => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-end">
        <ModeToggle />
      </div>

      <div className="pt-1">{children}</div>
    </div>
  );
};

export default Layout;
