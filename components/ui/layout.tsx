import React from "react";
import Header from "./header";
import SideMenu from "./side";

interface ILayout {
  children: React.ReactNode;
  [key: string]: any;
}

const Layout = ({ children, ...rest }: ILayout) => {

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 box-border py-4">
      <div className="container max-w-7xl mx-auto">
        <Header />
        <div className="grid grid-cols-5">
          {/* <SideMenu /> */}
          <div className="w-full col-span-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
