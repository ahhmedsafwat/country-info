import SearchComponent from "@/components/SearchComponent";
import Filter from "@/components/filter";

const Search = () => {
  return (
    <div className="md:flex justify-between mt-6">
      <SearchComponent></SearchComponent>
      <Filter></Filter>
    </div>
  );
};

export default Search;
