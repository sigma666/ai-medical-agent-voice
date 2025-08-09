"use client";
import Image from "next/image";
import React, { useState } from "react";

function HistoryList() {
  const [historylist, setHistoryList] = useState([]);
  return (
    <div>
      {historylist.length === 0 ? (
        <div className="flex items-center justify-center flex-col p-7 border border-dashed rounded-2xl">
          <Image
            src={"/agent-med.svg"}
            alt={"logo"}
            width={190}
            height={50}
            className=""
          />
          <h2 className="font-bold text-xl">No Recent Consultations</h2>
          <p>It looks like you haven't consulted with any doctor yet</p>
        </div>
      ) : (
        <div>
          <h3>list history</h3>
        </div>
      )}
    </div>
  );
}

export default HistoryList;
