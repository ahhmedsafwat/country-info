import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BiArrowBack } from "react-icons/bi";

const CountryDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-11 mb-40">
      <Button
        onClick={() => {
          navigate("/country-infos");
        }}
        className="shadow-md px-6"
      >
        <BiArrowBack className="mr-2 size-5" />
        Back
      </Button>
      <div className="mt-20 lg:flex lg:gap-8 lg:flex-wrap">
        <figure className="border-[15px] rounded-lg">
          <img
            src="https://flagcdn.com/eg.svg"
            alt="egypt"
            className="lg:max-w-md xl:max-w-2xl "
          />
        </figure>
        <div className="px-4 lg:px-0 mt-8 flex flex-col justify-between">
          <div className="flex justify-between items-start flex-col mb-8">
            <h2 className="mb-5 font-nunito font-bold text-3xl">Egypt</h2>
            <div className="flex justify-between w-full lg:gap-28 ">
              <div className="space-y-3">
                <div>
                  <span className="lable text-xl">Native Name: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
                <div>
                  <span className="lable text-xl">Population: </span>
                  <span className="font-nunito font-normal text-lg">
                    105,000,000
                  </span>
                </div>
                <div>
                  <span className="lable text-xl">Region: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
                <div>
                  <span className="lable text-xl">Sub Region: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
                <div>
                  <span className="lable text-xl">Capital: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="lable text-xl">Top Level Domain: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
                <div>
                  <span className="lable text-xl">Currencies: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
                <div>
                  <span className="lable text-xl">Languages: </span>
                  <span className="font-nunito font-normal text-lg">مصر</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 md:flex-row flex-wrap flex-col ">
            <div>Border Countries:</div>
            <div className="space-x-4">
              <Link to={"/country-infos/CountryDetails/"}>
                <Button className="shadow-md font-nunito ">palastain</Button>
              </Link>
              <Link to={"/country-infos/CountryDetails/"}>
                <Button className="shadow-md font-nunito">libia</Button>
              </Link>
              <Link to={"/country-infos/CountryDetails/"}>
                <Button className="shadow-md font-nunito">sudan</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
