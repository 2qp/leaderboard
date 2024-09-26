import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

type LayoutType = (props: LayoutProps) => JSX.Element;

const Layout: LayoutType = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Layout;
