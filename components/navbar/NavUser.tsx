import React from "react";
import UserDropdown from "./UserDropdown";
import UserAvatar from "./UserAvatar";

const links = [
  {href: '/login', label: 'Login'},
  {href: '/register', label: 'Register'},
]

function NavUser() {
  return (
    <UserDropdown icon={<UserAvatar/>} links={links} />
  );
}

export default NavUser;
