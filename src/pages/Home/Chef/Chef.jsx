import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import axios from "axios";

const Chef = () => {
      const [chefs, setChefs] = useState([]);
      const [chefsLength,setChefsLength] = useState(3);
      console.log(chefs);

      useEffect(() => {
        try {
          const fetchServices = async () => {
            const { data } = await axios.get("chef.json");
            setChefs(data);
          };
          fetchServices();
        } catch (error) {
          console.log(error.message);
        }
      }, []);
  return (
    <div className="container mx-auto my-10">
      <SectionTitle heading="chef recommends" subHeading="should try" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {chefs?.slice(0, chefsLength).map((chef) => (
          <div
            key={chef.id}
            className="card bg-base-100 shadow-xl rounded-none"
          >
            <figure>
              <img src={chef.image} alt={chef.name} />
            </figure>
            <div className="card-body bg-slate-200">
              <h2 className="card-title">{chef.name}</h2>
              <p>{chef.description}</p>
              <div className="flex justify-center">
                <button className="btn btn-outline hover:text-yellow-500 text-yellow-600 bg-slate-300 border-0 border-b-4 px-10 uppercase">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="flex justify-center mt-5">
        <button className="uppercase btn btn-outline border-0 border-b-4">
          view all
        </button>
      </span>
    </div>
  );
}

export default Chef
