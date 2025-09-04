import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import complianceContent from "../data/complianceContent";
import { TbCheckbox } from "react-icons/tb";

function Compliance() {
  const { pageId } = useParams();
  const pageData = complianceContent[pageId];
  console.log("Page Data:", pageData);
  return (
    <>
      <Helmet>
        <title>{pageData.title} | VITA SEC-530 Compliance</title>
        <meta
          name="description"
          content="Expert cybersecurity leadership for VITA, COV and regulatory compliance, audit-ready security, and resilient operations."
        />

        <meta
          property="og:title"
          content="Virtual Information Security Officer (vISO) Services"
        />
        <meta
          property="og:description"
          content="Expert cybersecurity leadership to ensure VITA, COV compliance and secure operations."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Virtual Information Security Officer (vISO) Services"
        />
        <meta
          name="twitter:description"
          content="Expert cybersecurity leadership to ensure VITA, COV compliance and secure operations."
        />
        {/* <link rel="canonical" href="https://yourdomain.com/" /> */}
      </Helmet>
      <Navbar />
      <Banner bannerContent={pageData.banner[0]} />
      {/* <div>Page id : {pageId}</div> */}
      <main>
        <section className="mx-2 md:mx-20  my-10">
          <div className="flex  items-center flex-col-reverse md:flex-row px-2 md:px-8 border-1 border-gray-100  gap-10 shadow-lg py-4">
            <div className="w-full md:w-[70%]">
              <h2 className="text-xl font-semibold pt-2">
                {pageData.mainSection[0].heading}
              </h2>
              <p className="text-[16px] my-4 ">
                {pageData.mainSection[0].content}
              </p>
              {pageData.mainSection[0].quote && (
                <p className="">"{pageData.mainSection[0].quote}"</p>
              )}
              {pageData.mainSection[0].list && (
                <ul>
                  {pageData.mainSection[0].list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-3">
                      <TbCheckbox className="text-blue-500 text-sm md:text-2xl stroke-3 " />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <span className="font-bold">— SEC 530 Standard</span>
            </div>
            <div className="w-full md:w-[30%]">
              <img
                className="max-w-full
                 "
                src={`/src/${pageData.mainSection[0].image}`}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="">
          {pageData.subSection.map((section, index) => (
            <div
              key={index}
              className="mx-2 md:mx-20 my-10 px-2 md:px-8 border-1 border-gray-100  gap-10 shadow-lg py-4"
            >
              <h2 className="text-lg font-bold my-3">{section.heading}</h2>
              <p className="my-3">{section.content}</p>

              {section.catalog && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                  {section.catalog.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-xl">{item.heading}</h4>
                      <p className="text-sm font-light my-3">{item.content}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.list && (
                <ul>
                  {section.list.map((item, idx) =>
                    typeof item === "string" ? (
                      <li key={idx} className="flex items-center gap-2 mb-4">
                        <TbCheckbox className="text-blue-500 text-2xl stroke-3 " />{" "}
                        {item}
                      </li>
                    ) : (
                      <li key={idx} className="my-3">
                        <span className="font-bold  inline align-middle">
                          <TbCheckbox className="text-blue-500 text-2xl stroke-3  inline align-middle me-2" />
                          {item.heading} :
                        </span>
                        <span className="inline align-middle ml-2">
                          {item.content}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Compliance;
