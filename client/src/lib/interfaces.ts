export interface SearchInterface {
  filter?: string;
  searchTerm?: string;
  onFilterChange?: React.Dispatch<React.SetStateAction<string>>;
  onSearchChange?: React.Dispatch<React.SetStateAction<string>>;
}
export interface country {
  id?: string;
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  capital: string;
  subregion?: string;
  topLevelDomain?: string[];
  currencies?: [{ code: string }];
  languages?: [{ name: string }];
  flag: string;
  borders?: string[];
}
export interface countryDetails {
  countries: country[];
  count: number;
  totalPages: number;
  currentPage: number;
}
