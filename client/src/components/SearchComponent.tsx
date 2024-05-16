import React, { useState } from "react";
import { Input } from "./ui/input";
import { MdSearch } from "react-icons/md";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative mb-5">
      <Input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search For a Country..."
        className=" dark:bg-elements max-w-full md:max-w-md md:w-96 font-nunito font-medium rounded-md pl-14 h-14 shadow-md "
      ></Input>
      <MdSearch className="size-6 absolute top-1/2 translate-y-[-50%] left-6 fill-slate-500"></MdSearch>
    </div>
  );
};

export default SearchComponent;
