
const MenuItem = ({item}) => {
  const { name, price, image, recipe } = item;
  console.log(item);
  return (
    <div>
      <div className="flex items-center gap-5">
        <img
          className="w-28 h-24"
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt={name}
        />
        <div>
          <h2 className="text-xl uppercase mb-3">{item.name}--------</h2>
          <p>{recipe}</p>
        </div>
        <span className="text-lg font-semibold text-yellow-500">${price}</span>
      </div>
    </div>
  );
};

export default MenuItem
