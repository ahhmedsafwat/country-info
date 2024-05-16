import axios from "axios";

const uri = `${process.env.REACT_APP_API_ENDPOINT}/countries/`;

const getData = async () => {
  const response = await axios.get(uri!);
  return response.data;
};

export default getData;
