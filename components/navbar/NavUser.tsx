import React from "react";
import UserIcon from "../icons/UserIcon";
import UserDropdown from "./UserDropdown";

const links = [
  {href: '/login', label: 'Login'},
  {href: '/register', label: 'Register'},
]

function NavUser() {
  return (
    <UserDropdown icon={<UserIcon className="text-foreground" />} links={links} />
  );
}

export default NavUser;
