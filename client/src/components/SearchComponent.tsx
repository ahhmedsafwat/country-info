import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { MdSearch } from "react-icons/md";
import { useGetCountiesSearch } from "@/lib/Api";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Set a timeout to update the debounced search value after 500ms
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // Adjust the delay (500ms in this case) as needed

    // Clear the timeout if the effect is called again before the timeout completes
    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  const { data, isLoading, error } = useGetCountiesSearch({
    search: debouncedSearch || undefined,
  });

  return (
    <div className="relative">
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
      {data && (
        <div className="search absolute z-30 bg-elements w-full rounded-md p-5 space-y-4 overflow-auto h-[300px] scro">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data.countries.length > 0 ? (
            data.countries.map((country) => (
              <Link
                className="group flex items-center font-nunito "
                to={`/CountryDetails/${country.name}`}
                key={country.name}
              >
                <img
                  src={country.flag}
                  alt=""
                  className="w-32 aspect-[3/2] mr-4"
                />
                <div>
                  <div key={country.name}>Name: {country.name}</div>
                  <div>region: {country.region}</div>
                </div>
                <ArrowRight className="ml-auto group-hover:translate-x-[8px] ease-out transition-transform"></ArrowRight>
              </Link>
            ))
          ) : (
            <div>No countries were Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
