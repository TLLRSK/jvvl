import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import UserIcon from "../icons/UserIcon";

async function NavUserAvatar() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  return profileImage ? (
    <img src={profileImage} className="w-6 h-6 rounded-full border-primary border-[1px] object-cover" />
  ) : (
    <UserIcon />
  );
}

export default NavUserAvatar;
