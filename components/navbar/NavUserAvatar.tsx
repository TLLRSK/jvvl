import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import UserIcon from "../icons/UserIcon";

async function NavUserAvatar() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  return profileImage ? (
    <UserIcon className="text-secondary bg-foreground rounded-full" />
  ) : (
    <UserIcon />
  );
}

export default NavUserAvatar;
