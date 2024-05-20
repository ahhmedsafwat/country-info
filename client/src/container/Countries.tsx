import CountryComponent from "@/components/CountryComponent";
import { useGetCounties } from "@/lib/Api";

const Countries = () => {
  const { data, isPending, error } = useGetCounties();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 pt-8 md:pb-48 lg:pb-28 overflow-hidden lg:overflow-visible ">
      <CountryComponent></CountryComponent>
      <CountryComponent></CountryComponent>
      <CountryComponent></CountryComponent>
      <CountryComponent></CountryComponent>
      <CountryComponent></CountryComponent>
    </div>
  );
};

export default Countries;
