import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { country } from "@/lib/Api";

const CountryComponent = ({
  flag,
  capital,
  name,
  population,
  region,
}: country) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isHoverd, setIsHoverd] = useState(false);
  const handleelementPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (rect.left > screenWidth / 2) {
          setTranslateX(-35);
          setIsHoverd(true);
        }
        if (rect.left < screenWidth / 2) {
          setTranslateX(35);
          setIsHoverd(true);
        }
      }
      if (window.matchMedia("(min-width: 1024px)").matches) {
        if (rect.left > screenWidth / 2) {
          setTranslateX(-15);
          setIsHoverd(true);
        }
        if (rect.left < screenWidth / 2) {
          setTranslateX(15);
          setIsHoverd(true);
        }
      }
    }
  };

  return (
    <>
      <Link
        to={`CountryDetails/`}
        ref={ref}
        onMouseEnter={handleelementPosition}
        onMouseLeave={() => {
          setIsHoverd(false);
        }}
        className="h-full w-full"
      >
        <div
          className={`countryinfo__country-Component group bg-elements rounded-md overflow-hidden shadow-md cursor-pointer  `}
          style={{
            transform: isHoverd
              ? `translate(${translateX}px , 35px) scale(1.2)`
              : "translatex(0)",
          }}
        >
          <figure>
            <img
              src={flag}
              alt="egypt"
              className="w-full object-cover aspect-[3/2]"
            />
          </figure>
          <div className="px-8 py-5 md:py-0 ">
            <h2 className="text-3xl font-nunito font-bold lg:text-2xl mb-5 md:pt-5 ">
              {name}
            </h2>
            <div
              className={`card
            ${
              isHoverd
                ? "h-28 visible translate-y-[-5px] "
                : "md:h-0 md:invisible md:translate-y-[-25px]"
            }
              md:transition-all delay-300 ease-out`}
            >
              <div>
                <span className="lable">Pupolution: </span>
                <span className="font-nunito">{population}</span>
              </div>
              <div>
                <span className="lable">Region: </span>
                <span className="font-nunito">{region}</span>
              </div>
              <div>
                <span className="lable">Capital: </span>
                <span className="font-nunito">{capital}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountryComponent;
