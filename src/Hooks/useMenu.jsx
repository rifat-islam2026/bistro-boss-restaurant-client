import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 console.log(data);

 useEffect(() => {
   try {
     const fetchData = async () => {
       const { data } = await axios.get("menu.json");
       setData(data);
       setLoading(false)
     };
     fetchData();
   } catch (error) {
     console.log(error.message);
   }
 }, []);
  return[data,loading]
}

export default useMenu
