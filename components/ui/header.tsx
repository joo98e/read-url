import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ ...rest }: any) => {
  return (
    <div {...rest}>
      <div className="flex justify-center">
        <h4 className="text-orange-400 text-center text-4xl font-bold select-none">Read Urls</h4>
        <Link href={"/list"}>213</Link>
      </div>
    </div>
  );
};

export default Header;
