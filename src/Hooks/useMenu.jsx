import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/menu");
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error.message);
      } finally {
        setLoading(false); // Ensure loading state is updated regardless of success or failure
      }
    };
    fetchData();
  }, []);

  return [data, loading];
};

export default useMenu;
