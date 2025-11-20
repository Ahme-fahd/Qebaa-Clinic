import "./Services.css";
import img1 from "../../assets/1-tooth.png";
import img2 from "../../assets/2-tooth-loosen.png";
import img3 from "../../assets/3-illustration.png";
import img4 from "../../assets/4-tag.png";
import img5 from "../../assets/5-braces.png";
import img6 from "../../assets/6-tooth.png";

function Services() {
  const services = [
    {
      image: <img src={img3} alt="" className=" mx-auto " />,
      title: "علاج جذور الأسنان",
      description:
        "نحمي أسنانك مع علاج جذور الأسنان بالمايكروسكوب، والذي يوفر دقة عالية في معالجة الجذور مما يعيد لأسنانك حيويتها ويضمن لك الراحة والثقة في كل ابتسامة.",
    },
    {
      image: <img src={img2} alt="" className=" mx-auto" />,
      title: "حالات الخلع الجراحي",
      description:
        "نوفر لك الأمان الكامل في حالات الخلع الجراحي حيث نعتمد على أساليب منظمة ومتقدمة لضمان إزالة الأسنان بأقل قدر من الألم وبأعلى معايير السلامة، مع ضمان عملية شفاء سريعة وسهلة.",
    },
    {
      image: <img src={img1} alt="" className=" mx-auto" />,
      title: "زراعة الأسنان",
      description:
        "عد لابتسامتك بريقها في وقت قياسي مع خدمات الزراعة الفورية. باستخدام أحدث التقنيات، حيث نمنحك أسنانًا جديدة وثابتة في وقت قصير، لتستمتع بمظهر طبيعي ومتانة ممتازة.",
    },
    {
      image: <img src={img6} alt="" className=" mx-auto" />,
      title: "تفتيح اللثة وتبييض الأسنان",
      description:
        "استعد ابتسامتك النقية مع خدماتنا في علاج اللثة المتقدمة وتبييض الأسنان حيث نستخدم تقنيات مبتكرة تُضفي على ابتسامتك بريقًا وإشراقًا يدوم.",
    },
    {
      image: <img src={img5} alt="" className=" mx-auto" />,
      title: "تقويم الأسنان",
      description:
        "حقق ابتسامتك المثالية مع تقويم الأسنان المبتكر، سواء عبر التقويم المخفي أو نظام انفزلاين الشفاف. نقدم حلولًا مريحة وغير مرئية لتصحيح أسنانك",
    },
    {
      image: <img src={img4} alt="" className=" mx-auto" />,
      title: "تيجان و جسور الأسنان",
      description:
        "تشمل خدمتنا تقييمًا دقيقًا وتصميم تيجان وجسور مخصصة تناسب شكل ولون الأسنان الطبيعية لضمان نتائج طبيعية ومريحة",
    },
  ];

  return (
    <div className="services-section " id="services">
      <div className="upper-banner text-center mb-8 mt-8">
        <h1 className="flex justify-center align-center">خدماتنا</h1>
      </div>
      <div className="main">
        <div className="container  mx-auto">
          <div className="main-section  grid grid-cols-1  w-full sm:w-full lg:grid-cols-3 gap-4 sm:gap-6 mx-auto ">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white card shadow-md border-2 rounded-lg p-4 text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="flex justify-center items-center tooth-image pt-8">
                  {service.image}
                </div>
                <h2 className=" text-tertiary pt-8 ">{service.title}</h2>
                <p className="text-tertiary pt-8 pb-8">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-banner mt-8 rounded-lg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4 sm:p-6 md:px-4 md:py-8 lg:p-10">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="text lg:ml-8 container w-full lg:w-[65%] text-right md:pr-0">
              <h2 className="mb-2 sm:mb-2 ">لماذا عيادات نور قباء؟</h2>
              <p className="pt-4">
                كل ما تحتاجه من خدمات طب الأسنان في مكان واحد، بأعلى مستويات
                الجودة والرعاية. نقدم لك نخبة من الأطباء بخبرات طويلة تضمن لك
                رعاية متكاملة ونتائج تفوق التوقعات ، كما نعتمد على أحدث الأجهزة
                والتقنيات المتقدمة في طب الأسنان لتحقيق أفضل النتائج.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
