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
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full" src={slide5} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryCard;
