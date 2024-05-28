import Search from "@/container/Search";
import Countries from "@/container/Countries";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  console.log(filter);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="container">
        <Search
          filter={filter}
          onFilterChange={setFilter}
          searchTerm={search}
          onSearchChange={setSearch}
        ></Search>
        <Countries filter={filter}></Countries>
      </div>
    </>
  );
};

export default Home;
