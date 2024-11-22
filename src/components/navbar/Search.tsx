import { Input } from "../ui/input";
import React from "react";
import { Search } from "lucide-react";

const SearchPage = () => {
  return (
    <>
      <Input type="text" placeholder="Search....." className="max-w-xs" />
    </>
  );
};

export default SearchPage;
