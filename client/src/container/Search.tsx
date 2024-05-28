import SearchComponent from "@/components/SearchComponent";
import Filter from "@/components/filter";
import type { SearchInterface } from "@/lib/interfaces";

const Search = ({ filter, onFilterChange }: SearchInterface) => {
  return (
    <div className="md:flex justify-between mt-6">
      <SearchComponent></SearchComponent>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>
    </div>
  );
};

export default Search;
