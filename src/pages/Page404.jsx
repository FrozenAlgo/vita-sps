import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

function Page404() {
  return (
    <>
      <Helmet>
        <title>
          Page Not Found - Virtual Information Security Officer (vISO) Services
        </title>
        <meta
          name="description"
          content="Expert cybersecurity leadership for VITA, COV and regulatory compliance, audit-ready security, and resilient operations."
        />
        {/* Open Graph tags for social media */}
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

        {/* Optionally add canonical */}
        {/* <link rel="canonical" href="https://yourdomain.com/" /> */}
      </Helmet>
      <Navbar />
      <main className="w-screen flex flex-col justify-center h-screen bg-blue-950 text-white text-center items-center">
        <h1 className="text-xl md:text-5xl font-extrabold">
          404 - Page Not Found
        </h1>
        <p className="text-md md:text-lg pt-4 max-w-2xl">
          The page you are looking for does not exist. Please check the URL or
          return to the homepage.
          <a href="/" className="ms-3 text-red-400 underline font-semibold">
            HOME
          </a>
        </p>
      </main>
    </>
  );
}
export default Page404;
