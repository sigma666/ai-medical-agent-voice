"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { userDetailContext } from "./context/userDetailContext";
import { User } from "@clerk/nextjs/server";
export type UsersDetails = {
  name: string;
  email: string;
  credit: string;
};
export function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [userDetail, setUserDetail] = useState<any>();
  const { user } = useUser();
  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  const CreateNewUser = async () => {
    const result = await axios.post("/api/users");
    setUserDetail(result.data);
    console.log(result.data);
  };
  return (
    <div>
      <userDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {" "}
        {children}
      </userDetailContext.Provider>
    </div>
  );
}
