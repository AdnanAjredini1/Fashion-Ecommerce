import axios from "axios";
import React, { useEffect, useState } from "react";
const useProductsByCategory = (category) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://fashion-ecommerce-back-dxpf.vercel.app/get-product-by-category",
          { category },
          { withCredentials: true }
        );
        setData(response.data.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error(`POST request error for ${category}:`, error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error };
};

export default useProductsByCategory;
