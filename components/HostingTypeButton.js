"use client";

import React from "react";
import { cn } from "@/lib/utils";
import useGlobalStore from "@/stores";

export default function Component({ name, gid, href }) {
  const { selectedVpsId, getPrices } = useGlobalStore();

  const getPriceLink = async (e, gid) => {
    e.preventDefault();
    await getPrices(gid);
  };

  return (
    <a onClick={(e) => getPriceLink(e, gid)} href={href} title={name}>
      <h3
        className={cn(
          "x-font-semibold x-text-base md:x-text-xl x-rounded-[30px] x-p-2 x-text-center",
          {
            "x-bg-black x-text-white": gid === selectedVpsId,
            "x-border x-border-solid x-border-slate-200 x-shadow":
              gid !== selectedVpsId,
          },
        )}
      >
        {name}
      </h3>
    </a>
  );
}
