import { getProduct } from "../services/products";
import { useState, useEffect } from "react";

export function useProduct(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      try {
        setLoading(true);
        const result = await getProduct(id);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  return { data, loading, error };
}
