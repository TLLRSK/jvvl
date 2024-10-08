import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import UserIcon from "../icons/UserIcon";

async function UserAvatar() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return <img src={profileImage} className="w-4 h-4" />;
  }
  return <UserIcon className="text-foreground" />;
}

export default UserAvatar;
