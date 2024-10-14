
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import "./Carousel.css"
import Button from "../Buttons/Button";


export default function Carousel(){
    
    return(<Swiper
      slidesPerView={1}
      spaceBetween={50}
      centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      modules={[ Autoplay,Pagination]}
      className="mySwiper"
    >


      <SwiperSlide className="first_slide">
        <img src="./carousel_images/image1-Photoroom.png" alt="first slide"  className="firstimg" />
         <a href="https://blockdag.network/keynote"><Button  value="Watch KEYNOTE"/></a>
      </SwiperSlide>

       <SwiperSlide className="video_Slide">
         <video src="./carousel_images/slideVideo.mp4"autoPlay loop muted playsInline />
         <h1>Presale is <span style={{color:"green"}}>Live</span></h1>
       </SwiperSlide>

       <SwiperSlide className="thirdSlide carousel-slide ">
         <h1 style={{ display: "block" }}>Batch 8<br />Selling Out Fast<br />limited Miners<br />Available </h1>
         <img src="./carousel_images/image3-Photoroom.webp" alt="third slide" />
       </SwiperSlide>

       <SwiperSlide className="forthSlide carousel-slide " >
         <h1 style={{ display: "block" }}>Join Cloud Mining,<br />Earn BDAG,<br />Injoy.</h1>
         <img src="./carousel_images/image4-Photoroom.webp" alt="forth slide" />
       </SwiperSlide>

       <SwiperSlide className="fifthSlide carousel-slide ">
         <h1 style={{ display: "block" }}>Next Generation<br />Blockchain,<br />Built For Defi</h1>
       <img src="./carousel_images/image2-Photoroom.webp" alt="fifth slide" />
       </SwiperSlide>


</Swiper>)
}