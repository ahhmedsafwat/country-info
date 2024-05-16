import Search from "@/container/Search";
import Countries from "@/container/Countries";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="container">
        <Search></Search>
        <Countries></Countries>
      </div>
    </>
  );
};

export default Home;
