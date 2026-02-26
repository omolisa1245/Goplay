import React from 'react'
import Slider from "react-slick"

import nath_img2 from '../../assets/nath_img.jpg'
import mercy_img1 from '../../assets/mercy_img1.webp'
import tribbet_img from '../../assets/tribbet_img.jpg'
import judikay_img1 from '../../assets/judikay_img1.jpg'
import marvin_img from '../../assets/marvin_img.jpg'
import bidemi_img1 from '../../assets/bidemi_img1.jpg'
import Sunmisola_img3 from '../../assets/Sunmisola_img3.jpg'
import walker_img from '../../assets/walker_img.webp'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Display = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1026,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    }

    const artists = [
        Sunmisola_img3,
        nath_img2,
        walker_img,
        mercy_img1,
        marvin_img,
        judikay_img1,
        tribbet_img,
        bidemi_img1
    ]

    return (
        <div
            id="Artist"
            className="w-[50vw] ml-27 md:ml-8 mt-20 mb-12 border-t border-white/30 pt-8 text-white"
        >

            <h3 className="text-lg md:text-xl lg:text-2xl mb-6 ml-2">
                Artist
            </h3>

            <div className="px-4">

                <Slider {...settings}>

                    {artists.map((img, index) => (
                        <div key={index} className="flex justify-center">

                            <div
                                className="
                                    w-[130px] h-[130px]
                                    sm:w-[110px] sm:h-[110px]
                                    md:w-[130px] md:h-[130px]
                                   lg:w-[130px] lg:h-[130px]
                                    xl:w-[150px] xl:h-[150px]
                                    rounded-full overflow-hidden
                                    border-[5px] border-gray-400
                                    hover:scale-105 ml-8
                                    transition duration-300
                                    cursor-pointer
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
    )
}

export default Display