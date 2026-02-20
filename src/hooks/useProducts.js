import { getProducts } from "../services/products";
import { useState, useEffect } from "react";

export function useProducts({ limit, page, search, category }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await getProducts({ limit, page, search, category });
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [limit, page, search, category]);
  return { data, loading, error };
}
