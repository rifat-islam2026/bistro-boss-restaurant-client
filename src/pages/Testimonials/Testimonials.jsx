import { useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/reviews");
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, []);

  return (
      <div className="container mx-auto my-10">
          
          <SectionTitle
              heading="testimonials"
              subHeading="what our clients say"
          />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="py-10 px-20 rounded-none">
                    <div className="text-center flex flex-col items-center justify-center">
                        <img src="../../../src/assets/icon/quote-left 1.png"/>
                <p>{review.details}</p>
                <h2 className="text-3xl mt-3 font-semibold text-yellow-500">{review.name}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
