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
  {
    name: "Contact",
    path: "/",
  },
  {
    name: "Help",
    path: "/",
  },
];

const SideMenu = (props: Props) => {

  const getJson = async () => {
    const result = await (await fetch("/api/json")).json();

    console.log(result);
  };

  return (
    <div>
      <div>
        <p onClick={getJson}>click is json</p>
      </div>
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
