import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const uri = `${process.env.REACT_APP_API_ENDPOINT}/countries`;

const fetchCounties = async () => {
  const response = await axios.get(uri);
  return response.data;
};

const useGetCounties = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCounties,
  });
};

export { useGetCounties };
