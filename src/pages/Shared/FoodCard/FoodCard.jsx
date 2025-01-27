const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={image} className="w-full" alt={name} />
        </figure>
        <div className="card-body bg-slate-200">
          <h2 className="card-title">{name}</h2>
          <p title={recipe}>{recipe.substring(0,80)}...</p>
          <div className="flex justify-center">
            <button className="btn btn-outline hover:text-yellow-500 text-yellow-600 bg-slate-300 border-0 border-b-4 px-10 uppercase">
              add to cart
            </button>
          </div>
        </div>
        <p className="px-2 py-1 bg-slate-800 text-white font-semibold absolute right-5 top-3 ">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
