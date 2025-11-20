import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Opinions.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Opinions() {
  const Img = [
    "/src/assets/opinions/image 32.png",
    "/src/assets/opinions/image 33.png",
    "/src/assets/opinions/image 34.png",
    "/src/assets/opinions/image 35.png",
    "/src/assets/opinions/image 36.png",
    "/src/assets/opinions/image 37.png",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-label="Next slide"
        className="absolute xl:right-[30%] right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 focus:outline-none z-10"
      >
        <ChevronRight size={24} />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        aria-label="Previous slide"
        className="absolute xl:left-[30%] left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 focus:outline-none z-10"
      >
        <ChevronLeft size={24} />
      </button>
    );
  };

  return (
    <>
      <div className="img-content">
        <div className="box-container">
          <div className="box text-right">
            <h1 className="text-tertiary">! أطفـالك بأمـان</h1>
            <p className="text-tertiary pt-6">
              فريقنا ودود مع الاطفال و يتعـامل بلـطف وإحترافية معهم حفاظاً على
              صحة أسنانهم
            </p>
            <a href="https://wa.me/+966550075591">
              <button className="text-[#E9BD25] px-4 py-2 rounded hover:bg-primary-dark transition duration-300 border-[#E9BD25] flex flex-end">
                أحجز موعدك الأن
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-8 sm:py-[32px] opinions">
        <div className="content text-center mb-8">
          <h1 className="text-tertiary text-3xl sm:text-4xl md:text-5xl font-extrabold p-2">
            آراء مرضانا
          </h1>
          <div className="flex items-center justify-center">
            <h2 className="text-tertiary font-bold text-lg sm:text-xl">4.8</h2>
            <div className="rating text-[#FBBC04] text-lg sm:text-xl ml-2">
              {"★".repeat(5)}
            </div>
            <h3 className="text-tertiary font-bold p-2 text-sm sm:text-base">
              تقييمات جوجل
            </h3>
          </div>
        </div>
        <div className="relative">
          <Carousel
            responsive={responsive}
            ssr={true}
            autoPlaySpeed={8000}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {Img.map((img, index) => (
              <div
                key={index}
                className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg flex items-center justify-center"
              >
                <img
                  src={img}
                  className="block w-[518px] h-[291px]  object-contain"
                  alt={`Opinion ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Opinions;
