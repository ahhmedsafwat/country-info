import { ArrowUp } from "lucide-react";
import { useState } from "react";
import "./style.css";

const Filter = () => {
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setFilter(option);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="relative bg-elements py-4 rounded-md pl-4 pr-10 shadow-md font-nunito font-normal cursor-pointer max-h-14 w-fit z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          Selected Region is {filter}
          <ArrowUp
            className={`${
              isOpen ? "rotate-180 " : "rotate-0"
            } absolute right-2 top-1/2 translate-y-[-50%] transition-transform duration-150 ease-in-out`}
          ></ArrowUp>
        </div>
        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0  translate-y-[-5px] invisible"
          } absolute top-16 bg-elements w-full left-0 rounded-md px-5 py-3 shadow-md transition-all  `}
        >
          <div className="option" onClick={() => handleOptionClick("Africa")}>
            Africa
          </div>
          <div className="option" onClick={() => handleOptionClick("Asia")}>
            Asia
          </div>
          <div className="option" onClick={() => handleOptionClick("America")}>
            America
          </div>
          <div className="option" onClick={() => handleOptionClick("Europe")}>
            Europe
          </div>
          <div className="option" onClick={() => handleOptionClick("Oceania")}>
            Oceania
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
