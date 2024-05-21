import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const uri = "http://localhost:3000/api/countries";

export interface country {
  id?: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  subRegion?: string;
  topLevelDomain?: string[];
  currencies?: object[];
  languages?: object[];
  flag: string;
}
const fetchCounties = async () => {
  const response = await axios.get(uri);
  return response.data;
};

const useGetCounties = () => {
  return useQuery<country[]>({
    queryKey: ["countries"],
    queryFn: fetchCounties,
  });
};

export { useGetCounties };
