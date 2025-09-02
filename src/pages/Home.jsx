import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Home() {
  const [details, setDetails] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000);
    console.log(details);

    return () => clearTimeout(timer);
  }, [details]);
  const banner = [
    {
      heading:
        "Virtual Information Security Officer (vISO) Services for VITA Security Compliance",
      para: "Our vISOs provide expert, hands-on cybersecurity leadership to help your organization achieve and maintain compliance with VITA, COV, and other regulatory standards. Acting as an integrated member of your team, our vISOs guide staff, manage security documentation, lead risk assessments, and support day-to-day security operations—ensuring your systems are protected, your controls are audit-ready, and your security program is both effective and sustainable.",
      button: true,
      pricingView: true,
    },
  ];
  const features = [
    {
      title: "Information Security Policy",
      description:
        "Our Information Security Policy establishes a comprehensive framework for protecting the confidentiality, integrity, and availability of data, systems, and networks across the organization. It sets clear security objectives, compliance requirements, and operational practices designed to safeguard organizational information from internal and external threats, while ensuring regulatory and contractual obligations are met. The policy emphasizes the protection of sensitive information, including personally identifiable information (PII), financial records, intellectual property, and other critical business data, against unauthorized access, disclosure, modification, or destruction.",
      points: [],
      link: "#",
    },
    {
      title: "Roles and Responsibilities",
      description:
        "Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program. Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary.",
      points: [],
      link: "#",
    },
    {
      title: "Business Impact Analysis",
      description:
        "The Business Impact Analysis (BIA) is a critical component of our organization's information security and continuity planning efforts. It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively.",
      points: [],
      link: "#",
    },
    {
      title: "IT System and Data Sensitivity Classification",
      description:
        "We classify IT systems and data based on their sensitivity to ensure the right level of protection. Classification categories typically include:",
      points: [
        {
          label: "Public",
          text: "Information intended for general access without restrictions.",
        },
        {
          label: "Internal",
          text: "Business-use information not for public disclosure.",
        },
        {
          label: "Confidential",
          text: "Sensitive data requiring controlled access.",
        },
        {
          label: "Restricted",
          text: "Highly sensitive systems/data with strict protection measures.",
        },
      ],
      link: "#",
    },
    {
      title: "Sensitive IT System Inventory and Definition",
      description:
        "An inventory of sensitive IT systems helps maintain visibility and proper protection. Each system is defined by:",
      points: [
        {
          label: "System Name & Owner",
          text: "Identification and accountability.",
        },
        {
          label: "Data Handled",
          text: "Type of sensitive or regulated information processed.",
        },
        {
          label: "Criticality",
          text: "Impact of downtime or data loss on business operations.",
        },
        {
          label: "Controls Applied",
          text: "Security measures in place for protection.",
        },
      ],
      link: "#",
    },
    {
      title: "Risk Assessment",
      description:
        "Risk assessments evaluate potential threats and vulnerabilities to IT systems and data. The process typically includes:",
      points: [
        {
          label: "Identify Assets",
          text: "Catalog critical systems, data, and processes.",
        },
        {
          label: "Analyze Threats & Vulnerabilities",
          text: "Assess possible risks and weaknesses.",
        },
        {
          label: "Evaluate Impact & Likelihood",
          text: "Measure business impact if risks materialize.",
        },
        {
          label: "Mitigation Plans",
          text: "Recommend controls and prioritize risk treatments.",
        },
      ],
      link: "#",
    },
    {
      title: "IT Security Audits",
      description:
        "IT security audits are conducted to evaluate the effectiveness of security measures, compliance with policies, and adherence to regulatory standards. These audits help identify gaps and strengthen the overall security posture.",
      points: [
        {
          label: "Compliance Review",
          text: "Ensures alignment with industry standards (e.g., ISO, NIST, GDPR).",
        },
        {
          label: "Vulnerability Assessment",
          text: "Identifies weaknesses in systems, networks, and processes.",
        },
        {
          label: "Control Effectiveness",
          text: "Tests whether implemented safeguards are working as intended.",
        },
        {
          label: "Continuous Improvement",
          text: "Provides recommendations to reduce risks and enhance resilience.",
        },
      ],
      link: "#",
    },
    {
      title: "Security Controls Catalog",
      description:
        "The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data. These controls are aligned with best practices and regulatory requirements.",
      points: [
        {
          label: "Access Controls",
          text: "Role-based access, authentication, and authorization policies.",
        },
        {
          label: "Network Security",
          text: "Firewalls, intrusion detection/prevention, and segmentation.",
        },
        {
          label: "Data Protection",
          text: "Encryption, backup, and secure data handling processes.",
        },
        {
          label: "Monitoring & Logging",
          text: "Continuous monitoring of systems for anomalies and threats.",
        },
        {
          label: "Incident Response",
          text: "Defined processes to detect, respond, and recover from security incidents.",
        },
      ],
      link: "#",
    },
    {
      title: "SEC 540 — Data Classifications",
      description:
        "The Data Classification Standard (SEC 540) establishes how agencies across the Commonwealth of Virginia (COV) classify and protect information. Agencies must safeguard electronic data in line with the Code of Virginia and comply with federal regulations such as HIPAA, FERPA, PCI, and others.",
      points: [
        {
          label: "Why it matters",
          text: "Protects confidentiality, integrity, and availability while meeting legal and regulatory requirements.",
        },
        {
          label: "Who it applies to",
          text: "All employees, contractors, and partners handling organizational data in any format.",
        },
        {
          label: "How data is classified",
          text: "Based on confidentiality, regulatory needs, business impact, and access requirements.",
        },
        {
          label: "Classification labels",
          text: "Define usage, compliance, and sensitivity or handling requirements.",
        },
      ],
      link: "#",
    },
  ];

  function showDetails(index) {
    console.log(index);
    setDetails(index);
  }
  return (
    <>
      <Helmet>
        <title>
          Virtual Information Security Officer (vISO) Services | VITA Compliance
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
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <Navbar />
      <Banner bannerContent={banner[0]} />
      <Marquee />
      <main className="features flex flex-col md:flex-row justify-center pt-8 md:px-15">
        <section className="basis-full md:basis-1/2">
          <ul className="flex flex-col gap-3 text-sm md:text-md px-2 md:px-12 py-6">
            {features.map((item, index) => (
              <li
                className="features-list cursor-pointer"
                onClick={() => {
                  showDetails(index);
                }}
                key={index}
              >
                <IoIosArrowForward /> {item.title}
              </li>
            ))}
          </ul>
        </section>
        <section className="basis-full md:basis-1/2 pt-5 px-5 md:px-0">
          <div
            className={`${
              animate ? "animate__animated animate__slideInRight" : ""
            }`}
          >
            <h1 className="text-xl mb-2 ">{features[details].title}</h1>
            <div className="">
              <div className="mb-3">{features[details].description}</div>

              {features[details].points.length > 0
                ? features[details].points.map((point, index) => (
                    <ul className="ms-7 list-disc  text-[15px]">
                      <li>
                        <span className="font-semibold"> {point.label} : </span>
                        {point.text}
                      </li>
                    </ul>
                  ))
                : ""}
              <a
                href={features[details].link}
                className={`${
                  features[details].points.length > 0 ? "py-2" : ""
                } flex items-center text-blue-600`}
              >
                Learn More <IoIosArrowForward />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
export default Home;
