import React from "react";
import Header from "./header";
import SideMenu from "./side";

interface ILayout {
  children: React.ReactNode;
  [key: string]: any;
}

const Layout = ({ children, ...rest }: ILayout) => {

  return (
    <div className="container max-w-7xl mx-auto">
      <Header className="my-6" />
      <div className="grid grid-cols-5 ">
        <SideMenu />
        <div className="w-full col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
