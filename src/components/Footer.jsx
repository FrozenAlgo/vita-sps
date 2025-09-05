import { ChevronRight } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-[url(/src/assets/images/banner.avif)] bg-center relative text-white pt-10 mt-12">
        <div className=" absolute top-0 left-0 h-full w-full bg-blue-950/90 "></div>
        <div className="flex flex-col md:flex-row  z-20 relative">
          <div className=" basis-full md:basis-1/2 px-3 md:ps-20">
            <div className="">
              <img
                src="/src/assets/images/logo.png"
                className="w-[100%] md:w-[80%] "
                alt=""
              />
            </div>
            <p className="py-4 text-[12px] md:text-[15px]">
              Software Productivity Strategists, Inc. (SPS) delivers AI and
              Cloud-powered industry solutions. With expertise across design,
              development, security, and operations, we build scalable, secure,
              and reliable systems. Our award-winning team includes
              IBM-certified inventors and global competition champions.
            </p>
          </div>
          <div className=" basis-full md:basis-1/2 px-3 md:ps-20 ">
            <h4 className="font-semibold text-lg md:text-xl">Compliance</h4>
            <ul className=" pb-4 text-[12px] md:text-[15px]    ">
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  Information Security Policy
                </a>
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  Roles and Responsibilities
                </a>
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  Business Impact Analysis
                </a>
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />
                </a>
                IT System and Data Sensitivity Classification
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />
                </a>
                Sensitive IT System Inventory and Definition
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  Risk Assessment
                </a>
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  IT Security Audits
                </a>
              </li>
              <li className="flex items-center my-3 text-md hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-300">
                <a href="" className="flex items-center">
                  <ChevronRight className=" md:text-xl md:drop-shadow-[0_0_1px_white] " />{" "}
                  Security Controls Catalog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center  py-5 border-t-neutral-50 border-t-[0.1px] text-[12px] md:text-[15px] z-20 relative">
          © 2024
          <span className="mx-1 font-semibold">
            Software Productivity Strategists, Inc.
          </span>
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
export default Footer;
