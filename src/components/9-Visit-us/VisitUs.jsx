import React, { useEffect, useState } from "react";
import "./VisitUs.css";
import timeImg from "../../assets/visit-us/access_time.svg";
import locateImg from "../../assets/visit-us/location.svg";

const WorkingHours = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const days = [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    const currentDay = new Date().getDay();
    setToday(days[currentDay]);
  }, []);

  const workingHours = [
    { day: "السبت", time: "9:00am - 10:00pm" },
    { day: "الأحد", time: "9:00am - 10:00pm" },
    { day: "الاثنين", time: "9:00am - 10:00pm" },
    { day: "الثلاثاء", time: "9:00am - 10:00pm" },
    { day: "الأربعاء", time: "9:00am - 10:00pm" },
    { day: "الخميس", time: "9:00am - 10:00pm" },
    { day: "الجمعة", time: "مغلق" },
  ];

  return (
    <div className="working-hours  text-tertiary relative rounded-lg ">
      <img
        src={timeImg}
        alt=""
        className="absolute top-0 right-2 w-8 h-8 sm:w-10 sm:h-10 "
      />
      <div className="flex justify-end">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-right pt-10 px-4">
          مواعيد العمل
        </h3>
      </div>
      <ul className="space-y-2 schedule">
        {workingHours.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.day === today && (
              <span className="text-base sm:text-lg text-[#E9BD25]  flex justify-center w-1">
                &#9654;
              </span>
            )}
            <div
              className={`flex justify-between py-2 px-4 sm:px-8 rounded-md text-sm sm:text-base flex-grow ${
                item.day === today ? "bg-[#E9BD2524]" : ""
              }`}
            >
              <span className="time">{item.time}</span>
              <span className="day font-medium">{item.day}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function VisitUs() {
  return (
    <section className="visit-us mt-3 sm:mt-5 px-3 sm:px-4 md:px-4 lg:px-8 pb-10 ">
      <div className="lg:px-10 px-4 sm:px-0">
        <h2 className="text-right pt-10 text-white">نُرَحِب بزيارتك</h2>
        <p className="text-right pt-2 sm:pt-3 text-xs sm:text-sm md:text-base text-white">
          هنا في نور قباء، تتلقي أعلى مستويات الرعاية، حيث راحتك ورضاك هما
          غايتنا وأولويتنا. ونعتز لكوننا اختيارك الأول لنعتني بتفاصيل راحتك،
          زورنا لتجربة طبية استثنائية
        </p>
        <p className="text-right  sm:pt-3 text-xs sm:text-sm md:text-base text-white"></p>
      </div>
      <div className="content-wrapper container mx-auto flex flex-col lg:flex-row-reverse mt-4 sm:mt-6 gap-4 justify-between align-center">
        <div className="working-hours-section bg-[#F2F3F3] shadow-md w-full lg:w-1/2 p-3 sm:p-4 rounded-lg mt-4 sm:mt-0">
          <WorkingHours />
        </div>
        <div className="map-section w-full lg:w-1/2 p-3 sm:p-4  rounded-lg shadow-md relative">
          <img
            src={locateImg}
            alt=""
            className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 "
          />
          <div className="flex flex-col items-end">
            <h3 className="text-right font-bold text-white pt-8 sm:pt-8 text-base sm:text-lg">
              موقعنا
            </h3>
          </div>
          <p className="text-right font-bold text-white pt-1 sm:pt-2 text-sm sm:text-base">
            المدينة المنورة - طريق الهجرة النازل (طريق الجامعات)
          </p>
          <div className="flex justify-end mt-2 sm:mt-0">
            <a
              href="https://maps.app.goo.gl/nQaYQLQckAAc1MUo9"
              className="map-link text-[#E9BD25] pb-1 sm:pb-2 text-sm sm:text-base"
            >
              عرض على الخريطة
            </a>
          </div>
          <div className="map-placeholder w-full h-40 sm:h-48 md:h-64 mt-2 border-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.3481591481986!2d39.60957447591225!3d24.438703262003333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf825b4e494d%3A0x7154dce40309a8a7!2z2YXYs9iq2YjYtdmBINmG2YjYsSDZgtio2KfYoSDZhNi32Kgg2KfZhNij2LPZhtin2YYgLyDYry7Zhdit2YXYryDZg9mF2KfZhCDYs9i52K_Zitip!5e0!3m2!1sen!2seg!4v1725370621995!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
