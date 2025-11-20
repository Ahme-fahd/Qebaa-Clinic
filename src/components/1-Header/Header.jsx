import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const desktopNavLinks = [
    { href: "#contact-us", text: "تواصل معنا" },
    { href: "#doctorCarousel", text: "فريقنا" },
    { href: "#services", text: "خدماتنا" },
    { href: "#about", text: "من نحن" },
    { href: "#home", text: "الرئيسية" },
  ];

  const mobileNavLinks = [
    { href: "#home", text: "الرئيسية" },
    { href: "#about", text: "من نحن" },
    { href: "#services", text: "خدماتنا" },
    { href: "#doctorCarousel", text: "فريقنا" },
    { href: "#contact-us", text: "تواصل معنا" },
  ];

  return (
    <header className="bg-[#00A5D3] w-full ">
      <div className="w-full h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {isMobile ? (
            <>
              <div className="flex-1 flex justify-start py-4">
                <button
                  className="rounded bg-[#E9BD25]  shadow-md p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex justify-end">
                <img src={logo} alt="logo" className="h-10" />
              </div>
              <div className="flex-2"></div>
            </>
          ) : (
            <>
              <nav aria-label="Global" className="flex-1 items-center">
                <ul className="flex items-center justify-center gap-6 lg:gap-10 text-sm h-14">
                  {desktopNavLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        className="text-header transition hover:text-[#E9BD25] h-18 flex items-center"
                        href={link.href}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="md:h-14 sm:h-10  px-10 "
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex  justify-center"
          onClick={toggleMenu}
        >
          <div
            className="bg-[#E9BD25] w-full h-fit  opacity-80 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleMenu}
                className="text-tertiary hover:text-gray-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col items-center gap-4">
                {mobileNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="text-tertiary hover:text-white font-bold text-lg"
                      href={link.href}
                      onClick={toggleMenu}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
