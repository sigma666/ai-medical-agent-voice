import { currentUser, EmailAddress, User } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { usersTable } from "../../../Config/schema";
import { db } from "@/Config/db";
import { UsersDetails } from "@/Provider";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    //check if  user already exists
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
    //if not  user exists, create a new user
    if (users.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          name: user?.fullName as string,
          age: 10,
          email: user?.primaryEmailAddress?.emailAddress as string,
          credits: 10,
          createdAt: Math.floor(Date.now() / 1000),
        })
        //@ts-ignore
        .returning({ usersTable });
      return NextResponse.json(result[0]?.usersTable);
    }
    //return success response
    return NextResponse.json(users[0]);
  } catch (e) {
    return NextResponse.json(e);
  }
}
