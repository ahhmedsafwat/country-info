import { IoMoonOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

import { Button } from "./ui/button";
import { useTheme } from "./ui/theme-provider";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className=" pt-3 bg-elements dark:bg-elements shadow-md ">
      <div className="container flex justify-between items-center min-h-20">
        <h1 className="text-2xl font-nunito font-bold md:text-3xl">
          Where in the World?
        </h1>
        <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <IoMoonOutline className="mr-2 size-5 " />
              <div>Dark Mode</div>
            </>
          ) : (
            <>
              <MdLightMode className="mr-2 size-5" />
              <div>Light Mode</div>
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
