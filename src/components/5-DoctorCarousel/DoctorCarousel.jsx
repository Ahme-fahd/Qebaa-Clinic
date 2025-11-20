import "react-multi-carousel/lib/styles.css";
import "./DoctorCarousel.css";
import Carousel from "react-multi-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Doctors = [
  {
    name: "أ.د/ محسن نور الدين",
    description: "أستاذ علاج الجذور بكلية طب الفم والأسنان",
  },
  {
    name: "د/ألطاف الخطيب",
    description:
      "طبيبة أسنان بخبرة ثلاثين عامًا متخصصة في جميع معالجات الأسنان،",
  },
  {
    name: "د/أحمد طولة",
    description: "استشاري التركيبات و متخصص في حشوات الأسنان",
  },
  {
    name: "د/حسني أبو طالب",
    description:
      "أخصائي زراعة الأسنان- 28 عامًا من الخبرة في زراعة وتركيبات الأسنان",
  },
  {
    name: "د/أحمد سلطان",
    description: "الزمالة البريطانية في تقويم الأسنان والفكين",
  },
  {
    name: "د/سمية المزيني",
    description: "متخصصة في الحشوات التجميلية وتركيبات الأسنان",
  },
  { name: "د/أحمد كيخيا", description: "بكالوريوس طب وجراحة الفم والأسنان" },
  { name: "د/أريج الرغبان", description: "ماجستير في تقويم الأسنان" },
  { name: "د/حنان الشافعي", description: "اختصاصية جراحة الفم والأسنان" },
  { name: "د/محمد كمال سعيدة", description: "طبيب أسنان" },
  { name: "د/ميادة كفت", description: "طبيبة أسنان" },
  { name: "د/رولا إخوان", description: "طبيبة أسنان" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
      aria-label="Go to next slide"
      className="absolute right-0 top-[35%] -translate-y-1/2 bg-white bg-opacity-50  rounded-full shadow-md hover:bg-opacity-75 focus:outline-none"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Go to previous slide"
      className="absolute left-0 top-[35%] -translate-y-1/2 bg-white bg-opacity-50  rounded-full shadow-md hover:bg-opacity-75 focus:outline-none"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

function DoctorCarousel() {
  return (
    <div className="container doctors relative mx-auto">
      <div className="card-text z-10 relative">
        <h1 className="text-tertiary p-2 pt-[24px]">نخبة أطباء الأسنان</h1>
        <p className="text-[#E9BD25] p-2">من يعتني بابتسامتك</p>
        <h3 className=" text-tertiary p-2">أسنانك لامعة دائماً</h3>
      </div>
      <div className="relative px-2">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Adjusted for faster sliding
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          swipeable={true}
          draggable={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {Doctors.map((doctor, index) => (
            <div key={index} className=" mb-16  py-2">
              <div className="cards bg-white md:w-[300px] h-[150px] w-[200px] p-4 rounded-lg shadow-lg border border-gray-200 transition-colors duration-300 group-hover:border-[#E9BD25]">
                <div className=" h-full flex flex-col justify-center items-center text-center">
                  <h1 className="mb-2 tracking-tight text-tertiary line-clamp-2 pt-2 pb-5">
                    {doctor.name}
                  </h1>
                  <p className=" text-tertiary line-clamp-3 pb-10">
                    {doctor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default DoctorCarousel;
