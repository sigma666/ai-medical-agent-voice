"use client";
import Image from "next/image";
import React, { useState } from "react";

function HistoryList() {
  const [historylist, setHistoryList] = useState([]);
  return (
    <div>
      {historylist.length === 0 ? (
        <div>
          <Image src={"/"} alt={"logo"} width={190} height={50} />
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
