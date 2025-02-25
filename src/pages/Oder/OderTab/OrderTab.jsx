import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
