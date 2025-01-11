import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";

const PopularMenu = () => {
  const [services, setServices] = useState([]);

  console.log(services);

  useEffect(() => {
    try {
      const fetchServices = async () => {
        const {data} = await axios.get("menu.json");
        const res = data.filter(item => item.category === 'popular');
        setServices(res);
      };
      fetchServices();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  
  return (
    <div className="container mx-auto mb-10">
      <SectionTitle heading="From our menu" subHeading="Popular Items" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      <span className="flex justify-center mt-5">
        <button className="uppercase btn btn-outline border-0 border-b-4">
          view all
        </button>
      </span>
    </div>
  );
};

export default PopularMenu;
