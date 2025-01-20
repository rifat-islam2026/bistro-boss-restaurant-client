import { Helmet } from "react-helmet";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  
   const desserts = menu.filter((item) => item.category === "dessert");
   const soup = menu.filter((item) => item.category === "soup");
   const salad = menu.filter((item) => item.category === "salad");
   const pizza = menu.filter((item) => item.category === "pizza");
   const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      
      {/* main Cover */}
      <Cover
        img={menuImg}
        title="Our Menu"
      />
      <SectionTitle heading="today's offer" subHeading="Don't miss" />

      <div className="container mx-auto">
        {/* offered menu items */}
        <MenuCategory items={offered} />

        {/* dessert menu items */}
        <MenuCategory
          items={desserts}
          img={dessertImg}
          title="dessert"
        />

        {/* pizza menu items */}
        <MenuCategory
          items={pizza}
          img={pizzaImg}
          title="pizza"
        />

        {/* salad menu items */}
        <MenuCategory
          items={salad}
          img={saladImg}
          title="salad"
        />
        {/* pizza menu items */}
        <MenuCategory
          items={soup}
          img={soupImg}
          title="soup"
        />
      </div>
    </div>
  );
};

export default Menu;
