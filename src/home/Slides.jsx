import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css/bundle";
import "./swiperCustom.css";


const Slides = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="mx-auto   object-cover object-center"
            src={"https://i.ibb.co/BPnQKRL/slide1.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mx-auto   object-cover object-center"
            src={"https://i.ibb.co/WBDxcw2/slide2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mx-auto   object-cover object-center"
            src={"https://i.ibb.co/Nx8j9SG/slide3.jpg"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Slides.propTypes = {};

export default Slides;
