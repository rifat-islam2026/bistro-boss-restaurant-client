import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  console.log(title)
  return (
    <div className="mb-10">
      {title && (
        <Cover img={img} title={title} />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex justify-center mt-5">
          <button className="uppercase btn btn-outline border-0 border-b-4">
            Oder Now
          </button>
        </div>
      </Link>
    </div>
  );
}

export default MenuCategory
