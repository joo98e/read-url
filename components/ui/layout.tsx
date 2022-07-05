import React from "react";
import Header from "./header";

interface ILayout {
  children: React.ReactNode;
  [key: string]: any;
}

const Layout = ({ children, ...rest }: ILayout) => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Header className="my-6" />
      <div className="w-full px-32">{children}</div>
    </div>
  );
};

export default Layout;
