import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { country, countryDetails } from "./interfaces";

const uri = process.env.REACT_APP_API_ENDPOINT;

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

const useGetCountiesSearch = ({ search }: { search: string | undefined }) => {
  return useQuery<countryDetails>({
    queryKey: ["countriesSearch", search],
    queryFn: () => fetch(`${uri}/countries?name=${search}`),
    enabled: !!search,
    retry: false,
  });
};

const useGetCountry = (name: string) => {
  return useQuery<country>({
    queryKey: ["country", name],
    queryFn: () => fetch(`${uri}/country?name=${name}`),
  });
};

export { useGetCounties, useGetCountry, useGetCountiesSearch };
