import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const uri = "http://localhost:3000/api";

export interface country {
  id?: string;
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  capital: string;
  subRegion?: string;
  topLevelDomain?: string[];
  currencies?: [{ code: string }];
  languages?: [{ name: string }];
  flag: string;
  borders?: string[];
}
const fetch = async (endpoint: string) => {
  const response = await axios.get(endpoint);
  return response.data;
};

const useGetCounties = () => {
  return useQuery<country[]>({
    queryKey: ["countries"],
    queryFn: () => fetch(`${uri}/countries`),
  });
};

const useGetCountry = (name: string) => {
  return useQuery<country>({
    queryKey: ["country", name],
    queryFn: () => fetch(`${uri}/countries/${name}`),
  });
};

export { useGetCounties, useGetCountry };
