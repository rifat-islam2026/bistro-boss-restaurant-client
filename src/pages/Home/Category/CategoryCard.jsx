// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const CategoryCard = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} />
          <h3 className="uppercase text-3xl font-bold -mt-16 text-center text-white">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} />
          <h3 className="uppercase text-3xl font-bold -mt-16 text-center text-white">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} />
          <h3 className="uppercase text-3xl font-bold -mt-16 text-center text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} />
          <h3 className="uppercase text-3xl font-bold -mt-16 text-center text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} />
          <h3 className="uppercase text-3xl font-bold -mt-16 text-center text-white">salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryCard;
