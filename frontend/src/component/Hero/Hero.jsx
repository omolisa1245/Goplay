import React from "react";
import Slider from "react-slick";

import stage1 from "../../assets/stage1.jpg";
import stage2 from "../../assets/stage2.jpg";
import stage3 from "../../assets/stage3.jpg";
import stage4 from "../../assets/stage4.webp";
import stage5 from "../../assets/stage5.webp";
import stage6 from "../../assets/stage6.jpg";
import stage7 from "../../assets/stage7.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2500,
      cssEase: "linear",
      arrows: false,
   };

   const slides = [stage1, stage2, stage3, stage4, stage5, stage6, stage7];

   return (
      <div
         id="Hero"
         className="
        w-[61vw]
        lg:w-[55vw]
        ml-5
        pt-20
        text-white 
        hidden md:flex
        justify-center
        px-3
        sm:px-4
        lg:px-0

      "
      >
         <div className="w-full rounded-xl overflow-hidden">

            <Slider {...settings}>
               {slides.map((img, index) => (
                  <div key={index}>

                     <div
                        className="
                  w-full 
                  h-[180px]
                  sm:h-[240px]
                  md:h-[320px]
                  lg:h-[25vw]
                  rounded-xl 
                  overflow-hidden
                "
                     >
                        <img
                           src={img}
                           alt=""
                           className="w-full h-full object-cover"
                        />
                     </div>

                  </div>
               ))}
            </Slider>

         </div>
      </div>
   );
};

export default Hero;