import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import plansContent from "../data/plansContent";
import Banner from "../components/Banner";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { TbCheckbox } from "react-icons/tb";
function Plans() {
  const { pageId } = useParams();
  const pageData = plansContent[pageId];
  console.log("Page Data:", pageData);

  return (
    <>
      <Navbar />
      <Banner bannerContent={pageData.banner[0]} />
      <section className="flex flex-col md:flex-row px-20 gap-4">
        <div className="basis-full md:basis-[55%] mt-10">
          <h1 className="text-xl font-bold ">{pageData.mainHeading}</h1>
          {pageData.pageContents.map((contents, index) => (
            <div className="content" key={index}>
              <h2 className="text-xl py-4 font-extralight">
                {contents.heading}
              </h2>
              <p>{contents.content}</p>
              <ul>
                {contents.list &&
                  contents.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 my-4">
                      <TbCheckbox className="text-blue-600 text-2xl" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <h2 className="text-xl font-bold my-4">How You Benifit:</h2>
          <ul>
            {pageData.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 my-4">
                <TbCheckbox className="text-blue-600 text-2xl" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-full md:basis-[45%] my-10">
          <h1 className="text-xl font-bold px-6">
            Take the first step toward VITA SEC-530 compliance today.
          </h1>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Plans;
