import React from "react";
import hero from "../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className=" mx-auto  container  flex flex-col md:flex-row items-center">
        <div className=" image-intro  w-full md:w-1/4 mb-8 md:mb-0 text-center flex item-center flex-1">
          <img src={hero} alt="Image" className=" mx-auto md:mx-0 px-4 " />
        </div>
        <div className="hero-content flex-1 lg:px-6 md:text-right ">
          <h2 className=" text-tertiary">مرحباً بكم في</h2>
          <h1 className=" text-tertiary pt-4">عيادات نور قباء</h1>
          <h2 className=" text-[#E9BD25] pt-4" id="colorized">
            لطب الأسنان
          </h2>
          <p className=" pt-4 text-tertiary custom">وجهتك لإبتسامة أفضل</p>
          <p className=" text-tertiary pt-4">
            نؤمن بأن الابتسامة هي سر الثقة، لذا نسعى دائمًا لتقديم تجربة طبية
            تتجاوز التوقعات، باستخدام أحدث التقنيات العالمية{" "}
          </p>

          <a href="https://wa.me/+966550075591" className="inline-block mt-6">
            <button className=" py-2 px-4 pt-5 pb-5 transition duration-300 font-extrabold flex items-center justify-center text-center">
              أحجز موعدك الأن
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
