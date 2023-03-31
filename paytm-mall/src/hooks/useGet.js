import { useEffect, useState } from "react";
import axios from "axios";
export const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const resp = await axios.get(url);
          const data = await resp?.data;
  
          setProducts(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);

    return { isLoading, products , serverError };
  };