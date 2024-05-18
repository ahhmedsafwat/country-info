import axios from "axios";

const uri = "http://localhost:3000/api/countries";

const getData = async () => {
  const response = await axios.get(uri!);
  return response.data;
};

export default getData;
