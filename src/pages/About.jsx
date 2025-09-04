import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { PiPhone } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import Form from "../components/Form";

function About() {
  const banner = [
    {
      heading: "Helping State of Virginia with VITA SEC-530 Compliance",
      para: "Need guidance on achieving VITA SEC-530 Compliance? Our experts provide tailored support and solutions to help Virginia state agencies meet cybersecurity and compliance requirements effectively.",
      button: false,
      pricingView: false,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Contact Us | VITA SEC-530 Compliance</title>
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
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Navbar />
      <Banner bannerContent={banner[0]} />
      <Marquee />
      <main className="about rubik flex flex-col md:flex-row justify-center pt-8 md:px-15 gap-8">
        {/* Left Column - Contact Form */}
        <section className="basis-full md:basis-[60%]">
          <h3 className="text-lg font-extrabold ps-6">
            Reach out to us for expert assistance in meeting VITA SEC-530
            compliance requirements for Virginia state agencies.
          </h3>
          <Form />
        </section>

        <section className="basis-full md:basis-[40%] pt-5 px-5 md:px-0">
          <div className="bg-gray-100 md:w-[80%] shadow-md  p-6 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Info
            </h3>

            <div className="flex gap-2 w-full justify-between ">
              <p className="font-bold text-blue-600 flex items-center  gap-2">
                <BiSolidPhoneCall /> Call Us
              </p>
              <a
                href="tel:301-337-2290"
                className="md:w-[50%] hover:underline block"
              >
                +301-337-2290
              </a>
            </div>

            <div className="flex gap-2 w-full justify-between ">
              <p className="font-bold text-blue-600 flex items-center  gap-2">
                {" "}
                <TfiEmail /> Email
              </p>
              <a
                href="mailto:support@spsnet.com"
                className="text-blue-600 hover:underline block md:w-[50%]"
              >
                support@spsnet.com
              </a>
            </div>

            <div className="flex gap-2 w-full justify-between ">
              <p className="font-bold text-blue-600 flex items-center  gap-2">
                <CiLocationOn /> Address
              </p>
              <p className="text-gray-700 md:w-[50%]">
                2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.
              </p>
            </div>
          </div>
          <div className="flex md:w-[80%] text-2xl font-semibold justify-between items-center py-4 px-6 mt-4 shadow-md text-white bg-blue-700">
            <div>Follow Us</div>
            <div className="flex gap-4 text-2xl">
              <BsTwitter />
              <LiaLinkedin />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
export default About;
