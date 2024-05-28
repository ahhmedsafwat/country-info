import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { country, countryDetails } from "./interfaces";
const uri = "http://localhost:3000/api";

const fetch = async (endpoint: string) => {
  const response = await axios.get(endpoint);
  return response.data;
};
const useGetCounties = ({
  region,
  page,
}: {
  region?: string;
  page: number;
}) => {
  return useQuery<countryDetails>({
    queryKey: ["countries", region, page],
    queryFn: () => fetch(`${uri}/countries/?region=${region}&page=${page}`),
  });
};

const useGetCountry = (name: string) => {
  return useQuery<country>({
    queryKey: ["country", name],
    queryFn: () => fetch(`${uri}/country?name=${name}`),
  });
};

export { useGetCounties, useGetCountry };
