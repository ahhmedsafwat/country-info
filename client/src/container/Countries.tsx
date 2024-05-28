import CountryComponent from "@/components/CountryComponent";
import PaginationCompontent from "@/components/paginationComponent";
import { useGetCounties } from "@/lib/Api";
import { useState } from "react";

const Countries = (props: { filter: string }) => {
  const [page, setPage] = useState(0);
  const { data, isLoading, error } = useGetCounties({
    region: `${props.filter}`,
    page: page,
  });

  const totalPages = data?.totalPages || 1; // Ensure your API returns this

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (error) return <div>error</div>;
  if (isLoading) return <div>"loading..."</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 xl:gap-10 pt-8 md:pb-48 lg:pb-28 overflow-hidden lg:overflow-visible ">
        {data?.countries.map((country) => (
          <CountryComponent
            key={country.name}
            capital={country.capital}
            flag={country.flag}
            name={country.name}
            region={country.region}
            population={country.population}
          ></CountryComponent>
        ))}
      </div>
      <div className="mb-8">
        <PaginationCompontent
          handlePageChange={handlePageChange}
          page={page}
          totalPages={totalPages}
        ></PaginationCompontent>
      </div>
    </div>
  );
};

export default Countries;
