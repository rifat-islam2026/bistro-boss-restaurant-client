import useMenu from "../../../Hooks/useMenu";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items,heading,title,coverImg}) => {
  const [menu] = useMenu();
  
  return (
    <div className="mb-10">
      {title && <Cover
        img={coverImg}
        heading={heading}
        title={title}
      />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuCategory
