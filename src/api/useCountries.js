import axios from "axios";
import { useEffect, useState } from "react";

async function getCountries() {
  try {
    const response = await axios.get("data/countries.json");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const { data } = await getCountries();
    setIsLoading(false);
    setCountries(data);
  }, []);

  return { countries, isLoading };
};
