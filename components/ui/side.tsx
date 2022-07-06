import Button from "@component/common/button";
import Link from "next/link";
import React from "react";

type Props = {};

const settings = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "List",
    path: "/list",
  },
];

const SideMenu = ({ ...rest }) => {

  return (
    <div className="w-full col-span-1 box-border px-4 mt-2" {...rest}>
      {settings &&
        settings.map((item, i) => {
          return (
            <div key={i}>
              <Link href={item.path}>{item.name}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default SideMenu;
