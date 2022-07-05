import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ ...rest }: any) => {

  return (
    <div {...rest}>
      <div className="flex justify-center my-4">
        <h4 className="text-cyan-700 text-center text-4xl font-bold select-none">
          Read Urls
        </h4>
      </div>
      <div className="border-b-cyan-600 border-b-2 h-1" />
    </div>
  );
};

export default Header;
