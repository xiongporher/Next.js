import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import { DarkMode } from "./DarkMode";
import DropdownList from "./DropdownList";

const Navbar = () => {
  return (
    <div className="container sm:flex-row sm:items-center gap-4 flex flex-col justify-between py-8">
      {/* Logo */}
      <Logo />
      {/* Search */}
      <Search />
      {/* DarkMode & Profile */}
      <div className="flex gap-4">
        <DarkMode />
        <DropdownList />
      </div>
    </div>
  );
};

export default Navbar;
