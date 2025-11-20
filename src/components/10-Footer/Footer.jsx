import React from "react";
import "./Footer.css";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import instagram from "../../assets/footer/instagram.svg";
import linkedin from "../../assets/footer/linkedin.svg";

function Footer() {
  return (
    <div className="footer flex justify-between items-center bg-[#00A5D3]  grid-cols-1 sm:grid-cols-1 ">
      <a href="https://cbb.com.sa/">
        <p className="copyright text-white text-sm md:text-md lg:px-24 ">
          جميع الحقوق محفوظة عيادات نور قباء © 2024 الأعمال الراقية
        </p>
      </a>
      <div className="flex justify-between items-center icons px-24">
        <a href="https://www.instagram.com/noor__qubaa?igsh=OXJ3dHFsdTF6cWht">
          <img src={instagram} alt="" className="mx-2 " />
        </a>
        <p className="text-white text-sm md:text-md ">تابعنا على انستجرام</p>
      </div>
    </div>
  );
}

export default Footer;
