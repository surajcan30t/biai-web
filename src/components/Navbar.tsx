'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#services",
    name: "Services",
  },
  {
    path: "#footer",
    name: "Contact",
  },
];


const Navbar = () => {
  const pathname = usePathname();
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        setPath(window.location.hash || window.location.pathname);
        console.log("Updated Path:", window.location.hash || window.location.pathname);
      };
      handleRouteChange();

      window.addEventListener("hashchange", handleRouteChange);
      window.addEventListener("popstate", handleRouteChange);

      return () => {
        window.removeEventListener("hashchange", handleRouteChange);
        window.removeEventListener("popstate", handleRouteChange);
      };
    }
  }, [pathname]); 
  
  return (
    <div className="h-[5rem] w-full bg-[#08000d] box-border border-b-2 rounded-xl fixed top-0 left-0 z-50 ">
      <div className="h-full w-full px-1 md:px-3 lg:px-30 xl:px-52 flex justify-between items-center">
        <div className="flex justify-center items-center font-[family-name:var(--font-baumans)] gap-2">
          <div className="relative overflow-hidden rounded-full bg-white w-[3rem] h-[3rem] text-black flex justify-center items-center text-center font-extrabold text-3xl">
            <Image
              className="absolute object-center"
              src="/biailogowithouttext.png"
              width={45}
              height={45}
              alt="biai"
            />
          </div>
          <h1 className="text-4xl text-[#ffffff]">Bi.ai</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-5 font-semibold">
            {links.map(
              (link: { path: string; name: string }, index: number) => (
                <li key={index}>
                  <Link onClick={() => setPath(link.path)} className={`${path === link.path ? 'bg-violet-500 px-2 py-1 rounded-md font-bold text-white' : 'text-zinc-300'}`} href={link.path}>
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
