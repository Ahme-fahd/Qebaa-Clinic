import intro from "../../assets/smart-phone.png";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className=" about-section mx-auto  bg-primary  ">
          <div className="flex flex-col lg:flex-row section-intro">
            <div className="flex-1 text-right lg:px-10 md:px-6 px-4">
              <h2 className="text-white pt-3">من نحن ؟ </h2>
              <h1 className=" text-[#E9BD25] pt-3">الرعاية التي تركز على </h1>
              <h1 className=" text-[#E9BD25] ">المريض</h1>

              <p className="text-white pt-10">
                كل زيارة إلى مجمع نور قباء هي خطوة لتحقيق صحة فموية مثالية
                وابتسامة تضيء وجهك. نتفهم احتياجاتك ونسعى جاهدين لتوفير بيئة
                مريحة وآمنة في مجمع نور قباء الطبي، لسنا مجرد عيادة، بل شريكك في
                رحلة تمتد لأكثر من 18 عامًا نحو الابتسامة المثالية. بفضل فريق من
                الأطباء المتميزين، نلتزم بتقديم أفضل خدمات طب الأسنان التي تجمع
                بين الابتكار والرعاية الفائقة.
              </p>
            </div>
            <div className="mobile-img">
              <img src={intro} alt="Image" className=" object-cover w-full  " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
