import React, { useState } from "react";
import "./FAQSection.css";

const FAQItem = ({ question, answer, isActive, onToggle, index }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="question" onClick={() => onToggle(index)}>
        <i
          className={`fas fa-chevron-${isActive ? "up" : "down"} text-right `}
        ></i>
        <p className="text-right ">{question}</p>
      </div>
      <div className="answer">
        <p className="text-right ">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "ما هي الخدمات التي تقدمونها في عيادات نور قباء؟",
      answer:
        "نقدم جميع خدمات طب الأسنان من تنظيف الأسنان المتقدم وتنظيف وعلاج الأسنان بكفاءة بالإضافة إلى تركيب وتقويم الأسنان بأحدث التقنيات",
    },
    {
      question: "كيف يمكنني حجز موعد في عيادتكم؟",
      answer:
        "يمكنك حجز موعد بسهولة عبر الإتصال مباشرة أو من خلال أرقامنا وحساباتنا المتاحة على موقعنا الإلكتروني",
    },
    {
      question: "هل تقدمون خدمات تقويم الأسنان؟",
      answer:
        "نعم، نوفر تقويم الأسنان الشفاف والمعدني بإستخدام أجدث التقنيات لضمان أفضل النتائج وراحة المريض",
    },
    {
      question: "هل لديكم خدمات للأطفال؟",
      answer:
        "نعم، نقدم رعاية خاصة للأطفال تشمل الفحص الدوري العلاجات الوقائية وعلاج التسوس في بيئة مريحة وآمنة",
    },
    {
      question: "كيف تضمنون التعقيم والسلامة في عياداتكم؟",
      answer:
        "نتبع إجراءات تعقيم صارمة بإستخدام احدث التقنيات لضمان بيئة آمنة تماما لكل مريض",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questions text-white p-8 sm:p-6 md:p-8  ">
      <div className="card text-right w-full mx-auto relative">
        <h1 className="mb-4 sm:mb-6 md:mb-8 text-right pt-2 sm:pt-4 md:pt-10 px-1 sm:px-2 md:px-3 text-base sm:text-lg md:text-2xl font-bold">
          هل لديك أي استفسارات؟
        </h1>

        <div className="faq-items space-y-1 sm:space-y-2 md:space-y-4  ">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onToggle={handleToggle}
              index={index}
            />
          ))}
        </div>

        <div className=" absolute bottom-[8%]  left-0 right-0 flex mx-auto justify-center items-center text-center pt-24 button">
          <a
            href="https://wa.me/+966550075591"
            className="flex justify-center items-center text-[#E9BD2599] font-extrabold"
          >
            تواصل معنا
          </a>

          <p className="text-white px-3">لديك سؤال آخر ؟</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
