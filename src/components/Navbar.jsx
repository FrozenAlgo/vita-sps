import { useEffect, useState } from "react";
import { TbAlignJustified } from "react-icons/tb";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [expandOptions, setExpandOptions] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollY = this.window.scrollY || window.pageYOffset;
      // console.log(scrollY);
      if (scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  const toggleMenu = (menu) => {
    setExpandOptions(expandOptions === menu ? null : menu);
  };
  return (
    <>
      <nav
        className={`flex justify-between flex-col lg:flex-row fixed top-0 w-screen items-center rubik font-[500] text-[16px] lg:py-2 lg:px-8 bg-white ${
          navScroll
            ? " lg:bg-blue-950 animate__animated animate__slideInDown"
            : "lg:bg-transparent"
        }`}
      >
        <div
          className={`nav-logo w-full px-5 py-3 lg:py-0 lg:px-0 lg:w-[30%] bg-blue-950 flex lg:bg-transparent ${
            navScroll
              ? "bg-blue-950 animate__animated animate__slideInDown"
              : ""
          }`}
        >
          <a href="/vita-sps/">
            <img
              src="src/assets/images/logo.png"
              className=" w-[80%] md:w-[50%] lg:w-full "
              alt="SPS logo Image"
              loading="lazy"
            />
          </a>
          <button
            className="text-white lg:hidden text-lg md:text-4xl cursor-pointer"
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
          >
            {toggleNav ? <FaXmark /> : <TbAlignJustified />}
          </button>
        </div>
        <div
          className={`nav-links w-full ps-4 lg:ps-0 lg:w-[70%] bg-white lg:bg-transparent max-h-[60vh] lg:h-full overflow-y-auto lg:overflow-visible ${
            toggleNav
              ? "block animate__animated animate__slideInUp"
              : "hidden lg:block animate__animated animate__slideInDown"
          }`}
        >
          <ul className="flex flex-col py-4 lg:py-0 lg:flex-row text-white gap-8 justify-start  lg:justify-center ">
            <li>
              <a href="/" className="nav-active">
                Home
              </a>
            </li>
            <li className=" group">
              <a role="button" className="top-link flex items-center gap-2 ">
                Compliance
                <span
                  onClick={() => {
                    toggleMenu("compliance");
                  }}
                  className="font-bold text-xl ms-2 transition-transform duration-300 group-hover:rotate-180"
                >
                  +
                </span>
              </a>
              <ul
                className={`dropdown-menu lg:absolute bg-white text-black font-normal mt-2 
             lg:invisible lg:opacity-0 translate-y-2 
             lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-0
             transition-all duration-300 min-w-[200px] ${
               expandOptions == "compliance" ? "block" : "hidden"
             }   lg:block`}
              >
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/information-security-policy/"
                    className="nav-link"
                  >
                    Information Security Policy
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/roles-and-responsibilities/"
                    className="nav-link"
                  >
                    Roles and Responsibilities
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/business-impact/"
                    className="nav-link"
                  >
                    Business Impact
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/it-system-data/"
                    className="nav-link"
                  >
                    IT System and Data Sensitivity
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/sensitive-it-inventory/"
                    className="nav-link"
                  >
                    Sensitive IT Inventory
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/risk-assessment/"
                    className="nav-link"
                  >
                    Risk Assessment
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/it-security-audits/"
                    className="nav-link"
                  >
                    IT Security Audits
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/security-controls-catalog/"
                    className="nav-link"
                  >
                    Security Controls Catalog
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/sec-540/"
                    className="nav-link"
                  >
                    SEC-540 Classification
                  </a>
                </li>
              </ul>
            </li>
            <li className="group">
              <a role="button" className="flex items-center gap-2 top-link">
                Pricing
                <span
                  onClick={() => {
                    toggleMenu("pricing");
                  }}
                  className="font-bold text-xl ms-2 transition-transform duration-300 group-hover:rotate-180"
                >
                  +
                </span>
              </a>
              <ul
                className={`dropdown-menu lg:absolute bg-white text-black font-normal mt-2 
             lg:invisible lg:opacity-0 translate-y-2 
             lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-0
             transition-all duration-300 min-w-[200px] ${
               expandOptions == "pricing" ? "block" : "hidden"
             }   lg:block`}
              >
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/information-security-policy/"
                    className="nav-link"
                  >
                    Basic Plan
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/roles-and-responsibilities/"
                    className="nav-link"
                  >
                    Standard Plan
                  </a>
                </li>
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a
                    href="https://vita.spsnet.com/compliance/business-impact/"
                    className="nav-link"
                  >
                    Premium Plan
                  </a>
                </li>
              </ul>
            </li>
            <li className="group">
              <a role="button" className="flex items-center gap-2 top-link">
                About Us
                <span
                  onClick={() => {
                    toggleMenu("about");
                  }}
                  className="font-bold text-xl ms-2 transition-transform duration-300 group-hover:rotate-180"
                >
                  +
                </span>
              </a>
              <ul
                className={`dropdown-menu lg:absolute bg-white text-black font-normal mt-2 
             lg:invisible lg:opacity-0 translate-y-2 
             lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-y-0
             transition-all duration-300 min-w-[200px] ${
               expandOptions == "about" ? "block" : "hidden"
             }   lg:block`}
              >
                <li className="py-2 px-3 border-b-1 border-b-gray-300 hover:text-blue-500 hover:border-b-blue-600 transition-all ease-in-out duration-200">
                  <a href="/vita-sps/about" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-button ">
          <button className="px-4  py-2 border-1 border-white rounded text-white text-sm font-light hover:bg-blue-900 transition-all ease-in-out duration-300 w-max hidden lg:block">
            Login to CSM
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
