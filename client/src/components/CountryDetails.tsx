import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { BiArrowBack } from "react-icons/bi";
import { useGetCountry } from "@/lib/Api";
import { convertCodesToNames } from "@/lib/countryISO3166";

const CountryDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { data, isLoading, error } = useGetCountry(name!);
  let fullName: string[] = [];
  if (data?.borders) {
    fullName = convertCodesToNames(data.borders);
  }
  if (error) return <div>there was an error please try again!</div>;
  if (isLoading) return <div>"loading..."</div>;
  return (
    <div className="container mt-11 mb-40">
      <Button
        onClick={() => {
          navigate("/");
        }}
        className="shadow-md px-6"
      >
        <BiArrowBack className="mr-2 size-5" />
        Back
      </Button>
      <div className="mt-20 lg:flex lg:gap-8 items-center">
        <figure className="border-[15px] rounded-lg">
          <img
            src={data?.flag}
            alt="egypt"
            className="lg:max-w-md xl:max-w-2xl w-full"
          />
        </figure>
        <div className="lg:px-0 mt-8 flex flex-col justify-between">
          <div className="flex justify-between items-start flex-col mb-8">
            <h2 className="mb-5 font-nunito font-bold text-3xl">
              {data?.name}
            </h2>
            <div className="flex justify-between w-full lg:gap-28 ">
              <div className="space-y-3 mr-4">
                <div>
                  <span className="lable text-lg md:text-xl">
                    Native Name:{" "}
                  </span>
                  <span className="font-nunito font-normal md:text-lg text-base">
                    {data?.nativeName}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">
                    Population:{" "}
                  </span>
                  <span className="font-nunito font-normal  md:text-lg text-base">
                    {data?.population}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">Region: </span>
                  <span className="font-nunito font-normal  md:text-lg text-base">
                    {data?.region}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">
                    Sub Region:{" "}
                  </span>
                  <span className="font-nunito font-normal  md:text-lg text-base">
                    {data?.subRegion}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">Capital: </span>
                  <span className="font-nunito font-normal  md:text-lg text-base">
                    {data?.capital}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="lable text-lg md:text-xl ">
                    Top Level Domain:{" "}
                  </span>
                  <span className="font-nunito font-normal  md:text-lg text-base">
                    {data?.topLevelDomain}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">
                    Currencies:{" "}
                  </span>
                  <span className="font-nunito font-normal   md:text-lg text-base">
                    {data?.currencies?.[0]?.code}
                  </span>
                </div>
                <div>
                  <span className="lable text-lg md:text-xl ">Languages: </span>

                  {data?.languages?.map((lang) => (
                    <span
                      key={lang.name}
                      className="font-nunito font-normal  md:text-lg text-base"
                    >
                      {lang.name},
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {data?.borders && (
            <div className="flex items-center md:flex-row flex-col ">
              <div>Border Countries:</div>
              <div className="lg:max-w-xl ">
                {fullName.map((country) => (
                  <Button
                    key={country}
                    className="shadow-md font-nunito mx-3 my-1 text-sm"
                    onClick={() => {
                      navigate(`/CountryDetails/${country}`);
                    }}
                  >
                    {country}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
