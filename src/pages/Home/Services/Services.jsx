import servicesImg from "../../../assets/home/chef-service.jpg";

const Services = () => {
    
  return (
    <div className="relative w-full h-full container mx-auto my-10">
      {/* Background Image */}
      <img
        src={servicesImg}
        alt="Background"
        className="w-full h-full object-cover"
      />
      {/* Overlay Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center  bg-white p-20 mx-20">
          <h1 className="uppercase text-4xl font-bold mb-2">bistro boss</h1>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime fuga eius, unde ullam repellendus impedit sapiente veniam, molestias necessitatibus cupiditate nesciunt exercitationem officia quos? Reprehenderit quos corporis laborum ullam ex!</p>
        </div>
      </div>
    </div>
  );
}

export default Services
