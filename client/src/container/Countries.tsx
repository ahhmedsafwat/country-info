import CountryComponent from "@/components/CountryComponent";
import { useGetCounties } from "@/lib/Api";

const Countries = () => {
  const { data, isLoading } = useGetCounties();
  if (isLoading) return <div>"loading..."</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 xl:gap-10 pt-8 md:pb-48 lg:pb-28 overflow-hidden lg:overflow-visible ">
      {data?.map((country) => (
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
  );
};

export default Countries;
