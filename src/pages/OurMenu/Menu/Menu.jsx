import { Helmet } from "react-helmet";
import img from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import saladCover from "../../../assets/menu/salad-bg.jpg";
import soupCover from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
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
      {/* Menu */}
      <Cover
        img={img}
        heading="Our Menu"
        title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla cum laboriosam animi nostrum adipisci voluptatibus culpa eius sed, unde doloremque hic vero, laborum beatae odit iusto delectus est! Quam?"
      />
      <SectionTitle heading="today's offer" subHeading="Don't miss" />
      <div className="container mx-auto">
        {/* offered menu items */}
        <MenuCategory key={menu._id} items={salad} />
        {/* dessert menu items */}
        <MenuCategory
          key={menu._id}
          items={dessert}
          coverImg={dessertCover}
          heading="Dessert"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, fugit labore at itaque amet officiis quam! Ducimus, quaerat alias."
        />
        {/* pizza menu items */}
        <MenuCategory
          key={menu._id}
          items={pizza}
          coverImg={pizzaCover}
          heading="Pizza"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, fugit labore at itaque amet officiis quam! Ducimus, quaerat alias."
        />
        {/* salad menu items */}
        <MenuCategory
          key={menu._id}
          items={salad}
          coverImg={saladCover}
          heading="Salad"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, fugit labore at itaque amet officiis quam! Ducimus, quaerat alias."
        />
        {/* pizza menu items */}
        <MenuCategory
          key={menu._id}
          items={soup}
          coverImg={soupCover}
          heading="Soup"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, fugit labore at itaque amet officiis quam! Ducimus, quaerat alias."
        />
      </div>
    </div>
  );
};

export default Menu;
