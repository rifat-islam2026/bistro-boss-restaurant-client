const Cover = ({ img,title}) => {
  return (
    <div>
      <div className="relative w-full h-full mb-10">
        {/* Background Image */}
        <img
          src={img}
          alt="Background"
          className="w-full h-[700px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Overlay Section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-black/40 p-20 mx-20 text-white">
            <h1 className="uppercase text-4xl font-bold mb-2">{title}</h1>
            <p className="text-lg w-3/6 mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
