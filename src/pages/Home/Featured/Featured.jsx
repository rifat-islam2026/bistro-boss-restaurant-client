import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Featured = () => {
  return (
    <div
      className="relative w-full bg-fixed bg-center bg-cover container mx-auto my-10 py-10"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/NyYvqsp/featured.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10  h-full max-w-5xl mx-auto text-white">
        <SectionTitle heading="from our featured" subHeading="check it out" />
        <div className="flex items-center justify-between p-10">
          {/* Left Side: Featured Image */}
          <div className="w-1/2">
            <img
              src="https://i.ibb.co.com/NyYvqsp/featured.jpg"
              alt="Featured"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Content */}
                  <div className="w-1/2 pl-10">
                      <span className="text-lg">March 20, 2023</span>
            <h1 className="text-4xl font-bold mb-2">WHERE CAN I GET SOME?</h1>
            <p className="text-lg mb-6">
              This is the featured content description. Add some compelling
              details here to grab the user's attention.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white uppercase">
              reade more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured
