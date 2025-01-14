import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  
  return (
    <div className="container mx-auto mb-10">
      <SectionTitle heading="From our menu" subHeading="Popular Items" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
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
