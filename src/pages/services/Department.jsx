import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
function Department() {
  return (
    <>
      <Navbar />
      <section
        className="bg-[url(/src/assets/images/banner.png)] bg-center 
                   w-[100vw] overflow-x-hidden   pt-[10vh]  relative rubik"
      >
        <div className=" absolute top-0 left-0 h-full w-full bg-neutral-900/60 z-10"></div>
        <div className="relative z-20  flex flex-col  items-center justify-center py-20  text-white">
          <h1 className="text-5xl py-3  font-semibold">
            Departmental Tabletop Exercises
          </h1>
        </div>
      </section>
      <section className="md:mx-20 mx-4 ">
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]   my-10  md:px-7 py-7 rounded-xl text-neutral-500 flex flex-col md:flex-row items-center">
          <div className="px-2 pe-10">
            <h3 className="text-2xl font-[500] text-neutral-800">
              Departmental Tabletop Exercises
            </h3>
            <p className="my-6 mt-2  leading-7">
              After the Cyber Range Event, we facilitate Tabletop Exercises for
              each department to document their IT infrastructure and
              applications. This helps us create a comprehensive map of the
              county’s technology ecosystem, including services offered,
              servers, and critical applications.
            </p>
          </div>
          <div className="flex justify-center basis-full  md:basis-[75%]">
            <img
              className=" rounded-xl md:hover:scale-105 duration-300 ease-in-out px-3 md:px-0"
              src="/images/depart.jpg"
              alt="Image"
            ></img>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="basis-full md:basis-[60%]  shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl text-sm">
            <h4 className="text-xl font-[500]">Key Steps</h4>
            <ul>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">
                    Catalog Services & IT Systems:
                  </span>
                  Understand the critical services provided and the underlying
                  IT systems that support them.
                </span>
              </li>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">Document Applications: </span>For
                  each application, assess its architecture, hardware and
                  software components, user access, and data governance
                  practices.
                </span>
              </li>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">
                    {" "}
                    Identify Opportunities for Modernization:{" "}
                  </span>{" "}
                  Based on this documentation, we identify key areas for cloud
                  migration and infrastructure upgrades.
                </span>
              </li>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">
                    Risk & Dependency Analysis:{" "}
                  </span>
                  Evaluate interdependencies between services and applications
                  to uncover potential risks and ensure smooth modernization and
                  migration efforts.
                </span>
              </li>
            </ul>
          </div>
          <div className="basis-full md:basis-[40%]  shadow-[0_0_15px_rgba(0,0,0,0.1)] p-5 rounded-xl text-sm">
            <h4 className="text-xl font-[500]">Benefits</h4>
            <ul>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">Comprehensive IT Overview:</span>
                  Gain insight into your county’s complete technology landscape.
                </span>
              </li>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">Optimized Infrastructure: </span>
                  Identify outdated hardware and inefficient systems for
                  migration to modern cloud environments.
                </span>
              </li>
              <li className="flex items-start my-4">
                <MdKeyboardArrowRight className=" mr-1 text-2xl text-green-600" />
                <span>
                  <span className="font-bold">Improved Security Posture:</span>
                  Uncover vulnerabilities in your IT ecosystem and strengthen
                  your security measures.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Department;
