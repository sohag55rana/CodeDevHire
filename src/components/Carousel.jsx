import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={img1} text={"Expert in Websites, Ads & Visual Content"}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img2} text={"Create, Promote, and Design for Impact"}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img3} text={"Front-End Developer & Digital Branding Specialist"}></Slide></SwiperSlide>
      </Swiper>
    </>
  );
}