import React from "react";
import "./Reservation.css";
import img from "../../../src/assets/Artboard.png";
import locateImg from "../../../src/assets/icons/locate.png";
import telImg from "../../../src/assets/icons/tel.png";
import textImg from "../../../src/assets/icons/text.png";

function Reservation() {
  return (
    <div className="bg-white">
      <div className="contact-us text-center py-8 px-4 sm:px-6 lg:px-8">
        <h1 className=" text-tertiary mb-4" id="contact-us">
          تواصل معنا و احجز موعدك
        </h1>
        <p className="text-tertiary mb-2 px-16">
          سواء أردت حجز موعداً او لديك اي استفسارات ،وسائل التواصل معنا متعددة،
          اختر الأنسب لك وفريقنا معك لخدمتك على مدار الساعة
        </p>

        <img src={img} alt="" className="mx-auto max-w-full h-auto mb-6" />

        <div className="reservation grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 custom-653:gap-custom max-w-6xl mx-auto text-tertiary">
          <div className="call-us pb-10 flex flex-col items-center justify-center lg:space-y-3 p-2 order-3 sm:order-1">
            <img src={textImg} alt="Text" className="w-[64px] h-[64px]" />
            <p className="meseri text-lg font-semibold pt-4 lg:pb-4">
              اتصل بنا
            </p>
            <p className="text-sm lg:pt-4 lg:pb-6 opacity-[80%]">
              (جوال & واتساب)
            </p>
            <a href="https://wa.me/+966550075591">
              <p className="font-medium lg:pt-4">+966550075591</p>
            </a>
          </div>

          <div className="call-us flex flex-col items-center justify-center lg:space-y-3 p-2 order-2 sm:order-2">
            <img src={telImg} alt="Phone" className="w-[64px] h-[64px] " />
            <p className="meseri text-lg font-semibold pt-2 ">اتصل بنا</p>
            <p className="text-sm lg:pt-6  opacity-[80%]">(هاتفياً)</p>
            <p className="font-medium ">
              <a href="tel:0148644555">0148644555</a>
            </p>
            <p className="font-medium ">
              <a href="tel:0148445095">0148445095</a>
            </p>
          </div>

          <div className="call-us flex flex-col items-center justify-center lg:space-y-3 p-2 lg:mb-8 order-1 sm:order-3">
            <img src={locateImg} alt="Location" className="w-[64px] h-[64px]" />
            <p>زيارة العيادة</p>
            <p className=" opacity-[80%]">يسعدنا زيارتكم</p>
            <a href="https://maps.app.goo.gl/nQaYQLQckAAc1MUo9">
              <p>المدينة المنورة - طريق الهجرة النازل</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
