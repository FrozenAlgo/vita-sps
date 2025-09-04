import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function CyberRange() {
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
            IBM X-Force Cyber Range
          </h1>
          <p className="text-xl ">
            The elite training your business leaders need to improve your
            readiness to effectively respond to a breach
          </p>
        </div>
      </section>
      <section className="md:mx-20 mx-4 ">
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]  my-10 leading-7 px-2 md:px-7 py-7  rounded-xl text-neutral-500">
          <h3 className="text-2xl font-[500] text-neutral-800">Overview</h3>
          <p className="mb-6">
            When it comes to cyber threats, you can’t always predict when one
            will occur, but you can prepare. Responding to a cyber incident is a
            business-wide responsibility. Your entire organization should be
            prepared to react with speed, agility, common purpose and the right
            security services.
          </p>
          <p className="my-6">
            The IBM X-Force Cyber Range solution creates immersive simulations
            to guide your team through realistic breach scenarios, helping
            ensure you can respond and recover from enterprise-level cyber
            security incidents, manage vulnerabilities, and build a stronger
            security culture in your organization.
          </p>
          <p className="my-6">
            Since our launch in 2016, over 17,000 business leaders have gone
            through our immersive training, finding ideas of growth in their
            response plan within a safe environment, while using industry best
            practices and real-life data breaches.
          </p>
        </div>
        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]   my-10  md:px-7 py-7 rounded-xl text-neutral-500 flex flex-col md:flex-row">
          <div className="px-2">
            <h3 className="text-2xl font-[500] text-neutral-800">
              Take a tour of the cyber range experience
            </h3>
            <p className="mb-6 mt-2 pe-10 leading-7">
              The IBM X-Force Cyber Range (formerly known as IBM Security
              Command Centers) immerse organizations into real-world cyber
              simulations that help them assess their security posture and
              maturity for a full-business response. These gamified simulations
              address technical, leadership and communication skills for
              security teams, executives and the board, helping organizations to
              reduce cyber risk. Watch it in action in this short video.
            </p>
          </div>
          <div className="flex justify-center">
            <iframe
              className="md:w-[400px] md:h-[220px] w-3xs"
              //   height="315"
              src="https://www.youtube.com/embed/8YV-tBr11a4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]  my-10 leading-7 px-2 md:px-7 py-7  rounded-xl text-neutral-500">
          <h3 className="text-2xl font-[500] text-neutral-800">Benefits</h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
                id="oil--pump"
                viewBox="0 0 32 32"
                data-di-res-id="72ec2c2e-57cc4247"
                data-di-rand="1748721510730"
                fill="green"
                class="svg-icon"
              >
                <path d="M31,31.36H1v-0.72h3.64V15.843c-0.325-0.055-0.645-0.168-0.947-0.342 c-0.659-0.381-1.131-0.998-1.33-1.738s-0.098-1.51,0.283-2.169l5.5-9.526c0.38-0.659,0.998-1.131,1.737-1.33 c0.738-0.199,1.509-0.098,2.169,0.283c0.659,0.381,1.131,0.998,1.33,1.738s0.098,1.51-0.283,2.169L11.15,8.306l18.694,10.785 c0.083,0.048,0.144,0.126,0.168,0.219c0.024,0.092,0.012,0.19-0.036,0.272l-1.5,2.598c-0.032,0.056-0.076,0.1-0.128,0.13v4.33h1.174 c0.199,0,0.36,0.161,0.36,0.36v3.64H31V31.36z M26.839,30.64h2.322v-3.28h-2.322V30.64z M22.316,30.64h3.802V27 c0-0.199,0.161-0.36,0.36-0.36h1.148v-4.533L16.695,15.8L22.316,30.64z M10.426,30.64h11.12l-1.242-3.279h-8.629L10.426,30.64z M5.36,30.64h4.296l5.897-15.499L9.29,11.528L7.6,14.455c-0.486,0.841-1.338,1.343-2.24,1.419C5.36,15.874,5.36,30.64,5.36,30.64z M11.949,26.64h8.083l-1.25-3.3h-5.577L11.949,26.64z M13.479,22.619h5.03l-1.242-3.279h-2.54L13.479,22.619z M16.216,14.692 l11.816,6.817l1.14-1.975L10.792,8.931l-1.14,1.975l6.489,3.743C16.168,14.66,16.193,14.675,16.216,14.692z M15,18.619h1.993 l-0.995-2.625L15,18.619z M10.632,1.359c-0.187,0-0.375,0.024-0.562,0.075c-0.554,0.148-1.016,0.501-1.3,0.994l-5.5,9.526 c-0.285,0.493-0.359,1.069-0.211,1.623s0.501,1.016,0.994,1.3c1.021,0.59,2.333,0.239,2.923-0.783l5.5-9.526 c0.59-1.022,0.239-2.333-0.783-2.923C11.366,1.456,11.002,1.359,10.632,1.359z M5.134,11.98c-0.552,0-1,0.448-1,1s0.448,1,1,1 s1-0.448,1-1C6.134,12.428,5.686,11.98,5.134,11.98z"></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                Incident response could save USD 1.5 million
              </h6>
              <p>
                Organizations with an incident response (IR) team who regularly
                tested their IR plan experienced an average cost of data breach
                that was USD 1.5 million lower compared to organizations without
                an IR team or IR plan testing.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
                id="chart--line"
                viewBox="0 0 32 32"
                data-di-res-id="d25b3d27-e1359976"
                data-di-rand="1748721510727"
                fill="green"
                class="svg-icon"
              >
                <path d="M31,31.36H1c-0.199,0-0.36-0.161-0.36-0.36V1h0.72v28.377l6.314-13.529 c0.055-0.119,0.171-0.198,0.302-0.207c0.137-0.003,0.257,0.054,0.327,0.165l4.468,6.952l4.887-14.869 c0.045-0.136,0.166-0.233,0.309-0.246c0.14-0.012,0.278,0.059,0.349,0.184l6.266,11.336l6.107-10.579l0.623,0.36l-6.426,11.13 c-0.064,0.111-0.183,0.181-0.312,0.181c-0.001,0-0.002,0-0.003,0c-0.13-0.002-0.249-0.072-0.312-0.187L18.084,8.896L13.219,23.7 c-0.043,0.132-0.159,0.228-0.296,0.245c-0.136,0.021-0.272-0.045-0.348-0.163L8.05,16.744L1.565,30.64H31V31.36z"></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                Experience a simulated cyber incident
              </h6>
              <p>
                Give your cross-functional fusion team the chance to feel the
                intensity and pressure of a real-life data breach through an
                immersive, gamified experience in a simulated incident.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
                id="support--services"
                viewBox="0 0 32 32"
                fill="green"
                class="svg-icon"
              >
                <path d="M13,12.64c-0.199,0-0.36,0.161-0.36,0.36v6c0,0.199,0.161,0.36,0.36,0.36h6 c0.199,0,0.36-0.161,0.36-0.36v-6c0-0.199-0.161-0.36-0.36-0.36H13z M18.64,18.64h-5.28v-5.28h5.28V18.64z M25.5,5.36H11V4.64h14.5 c3.231,0,5.86,2.628,5.86,5.86s-2.629,5.86-5.86,5.86H21v-0.72h4.5c2.834,0,5.14-2.306,5.14-5.14S28.334,5.36,25.5,5.36z M1.36,9 H0.64V8.5c0-1.714,1.032-3.264,2.575-3.959C2.848,4.118,2.641,3.574,2.641,3c0-1.301,1.058-2.36,2.359-2.36S7.359,1.699,7.359,3 c0,0.574-0.208,1.118-0.574,1.541C8.328,5.236,9.36,6.785,9.36,8.5V9H8.64V8.5c0-1.605-1.087-3.038-2.644-3.483 C5.861,4.978,5.761,4.864,5.739,4.725C5.718,4.585,5.78,4.447,5.897,4.37C6.362,4.064,6.64,3.552,6.64,3 c0-0.904-0.736-1.64-1.64-1.64S3.36,2.096,3.36,3c0,0.552,0.277,1.064,0.742,1.37c0.118,0.077,0.18,0.215,0.159,0.355 C4.239,4.864,4.139,4.978,4.004,5.017C2.447,5.462,1.36,6.894,1.36,8.5V9z M31.36,30.499V31h-0.72v-0.501 c0-1.605-1.087-3.037-2.643-3.483c-0.136-0.038-0.236-0.152-0.257-0.291c-0.021-0.14,0.04-0.278,0.157-0.355 c0.465-0.306,0.742-0.817,0.742-1.369c0-0.904-0.735-1.64-1.64-1.64s-1.64,0.735-1.64,1.64c0,0.552,0.277,1.063,0.742,1.369 c0.117,0.077,0.179,0.216,0.157,0.355c-0.021,0.139-0.121,0.253-0.257,0.291c-1.556,0.446-2.643,1.878-2.643,3.483V31H22.64v-0.501 c0-1.714,1.032-3.264,2.575-3.959c-0.367-0.423-0.575-0.967-0.575-1.54c0-1.302,1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36 c0,0.573-0.208,1.117-0.575,1.54C30.328,27.235,31.36,28.785,31.36,30.499z M18.255,23.745L21.509,27l-3.254,3.255l-0.51-0.51 l2.386-2.385H6.5c-3.231,0-5.86-2.629-5.86-5.86s2.628-5.86,5.86-5.86H11v0.72H6.5c-2.834,0-5.14,2.306-5.14,5.14 s2.306,5.14,5.14,5.14h13.631l-2.386-2.385L18.255,23.745z"></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                Sharpen collaboration organization
              </h6>
              <p>
                When you participate in an X-Force Cyber Range experience, you
                have the rare opportunity to collaborate with not only your
                security team but the executive leaders across multiple lines of
                business including but not limited to, legal, PR, HR,
                operations, and finance.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]   my-10  md:px-7 py-7 rounded-xl text-neutral-500 flex flex-col md:flex-row items-center">
          <div className="flex justify-center basis-full  md:basis-[75%]">
            <img
              className=" rounded-xl md:hover:scale-105 duration-300 ease-in-out px-3 md:px-0"
              src="/src/assets/images/c2.png"
              alt="image"
            ></img>
          </div>
          <div className="px-2 ps-10">
            <h3 className="text-2xl font-[500] text-neutral-800">
              Dig into the New Threats of 2025 with X-Force
            </h3>
            <p className="my-6 mt-2  leading-7">
              Armed with the insights of our X-Force 2025 Threat Intelligence
              Index report, our team can help you secure your business against
              cyber threats. We are offering briefings with our expert team of
              intelligence analysts to give you customized insights about your
              organization.
            </p>
          </div>
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]  my-10 leading-7 px-2 md:px-7 py-7  rounded-xl text-neutral-500">
          <h3 className="text-2xl font-[500] text-neutral-800">Benefits</h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                fill="green"
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                id="intelligence"
                viewBox="0 0 32 32"
                data-di-res-id="4a2dec84-5d273af"
                data-di-rand="1748764022505"
              >
                <path d="M29.36,16.5c0-1.433-0.797-2.74-2.052-3.406c0.034-0.205,0.052-0.401,0.052-0.594 c0-1.433-0.797-2.74-2.052-3.406C25.343,8.889,25.36,8.692,25.36,8.5c0-1.506-0.864-3.067-2.038-3.73 C23.08,2.999,21.441,1.64,19.5,1.64c-1.554,0-2.889,0.928-3.5,2.256c-0.611-1.327-1.946-2.256-3.5-2.256 c-1.989,0-3.632,1.508-3.828,3.472C7.431,5.783,6.64,7.09,6.64,8.5c0,0.192,0.017,0.388,0.051,0.594 C5.436,9.76,4.64,11.067,4.64,12.5c0,0.192,0.017,0.388,0.051,0.594C3.436,13.76,2.64,15.067,2.64,16.5 c0,0.875,0.303,1.722,0.858,2.41C3.261,19.424,3.14,19.957,3.14,20.5c0,1.61,1.022,3.05,2.523,3.605 C5.647,24.242,5.64,24.373,5.64,24.5c0,1.832,1.312,3.406,3.093,3.767c0.36,1.781,1.935,3.094,3.767,3.094 c1.555,0,2.889-0.929,3.5-2.256c0.176,0.382,0.412,0.73,0.697,1.033c0.018,0.04,0.016,0.085,0.049,0.118 c0.033,0.033,0.078,0.031,0.118,0.049c0.691,0.65,1.615,1.056,2.636,1.056c1.832,0,3.406-1.312,3.767-3.094 c1.781-0.36,3.094-1.935,3.094-3.767c0-0.128-0.008-0.257-0.023-0.395c1.5-0.556,2.523-1.995,2.523-3.605 c0-0.542-0.121-1.075-0.359-1.59C29.057,18.223,29.36,17.376,29.36,16.5z M13.36,30.505v-1.801c0-1.184-0.919-2.05-2.029-2.98 c-0.153-0.126-0.38-0.107-0.507,0.045c-0.128,0.152-0.108,0.38,0.045,0.508c1.149,0.963,1.772,1.635,1.772,2.428v1.921 c-0.047,0.002-0.092,0.014-0.14,0.014c-1.562,0-2.894-1.175-3.097-2.732l-0.036-0.274l-0.274-0.036 C7.535,27.394,6.36,26.062,6.36,24.5c0-0.136,0.022-0.266,0.041-0.398l1.745-0.773c0.182-0.08,0.264-0.293,0.183-0.475 c-0.081-0.183-0.294-0.268-0.475-0.184l-1.803,0.8C4.757,23.056,3.86,21.856,3.86,20.5c0-0.387,0.101-0.766,0.253-1.14H7 c0.199,0,0.36-0.161,0.36-0.36S7.199,18.64,7,18.64H4.217l-0.024-0.026C3.656,18.027,3.36,17.277,3.36,16.5 c0-1.245,0.74-2.373,1.884-2.875l0.274-0.12L5.45,13.214c-0.061-0.257-0.09-0.491-0.09-0.714c0-1.153,0.639-2.199,1.642-2.746 l1.721,2.186c0.313,0.38,0.596,0.688,0.901,0.929l-1.878,1.878c-0.141,0.141-0.141,0.368,0,0.509C7.816,15.325,7.908,15.36,8,15.36 s0.184-0.035,0.254-0.105l2-2c0.005-0.005,0.003-0.014,0.008-0.019c0.22,0.077,0.459,0.125,0.738,0.125h2 c0.199,0,0.36-0.161,0.36-0.36s-0.161-0.36-0.36-0.36h-2c-0.656,0-1.005-0.29-1.717-1.152l-1.841-2.34 C7.392,8.919,7.36,8.702,7.36,8.5c0-1.129,0.63-2.171,1.615-2.724L9.769,6.44C9.836,6.497,9.918,6.524,10,6.524 c0.103,0,0.205-0.044,0.276-0.129c0.127-0.152,0.107-0.379-0.045-0.507L9.4,5.193c0.158-1.599,1.482-2.833,3.1-2.833 c1.731,0,3.14,1.409,3.14,3.14v4.169C15.078,8.998,14.199,8.64,13,8.64c-0.199,0-0.36,0.161-0.36,0.36S12.801,9.36,13,9.36 c1.826,0,2.64,0.814,2.64,2.64v4.659c-0.749,0.076-1.166,0.358-1.52,0.623c-0.455,0.343-0.814,0.612-2.049,0.365 c-0.196-0.042-0.385,0.087-0.424,0.282c-0.039,0.194,0.087,0.385,0.282,0.423c0.375,0.075,0.691,0.107,0.964,0.107 c0.857,0,1.277-0.315,1.659-0.602c0.3-0.225,0.58-0.417,1.088-0.482v5.253l-2.14,0.01c-1.044,0-1.771-0.59-2.159-1.754 c-0.062-0.188-0.268-0.291-0.455-0.228c-0.188,0.063-0.291,0.267-0.228,0.456c0.651,1.954,2.06,2.246,2.843,2.246l2.139-0.01v4.15 C15.64,28.931,14.672,30.128,13.36,30.505z M26.121,23.406c-0.619-1.282-1.559-1.786-3.181-1.778l-1.006,0.012 c-1.207,0-1.574-0.383-1.574-1.64c0-0.199-0.161-0.36-0.36-0.36s-0.36,0.161-0.36,0.36c0,1.654,0.687,2.36,2.299,2.36l1.01-0.012 c0.024-0.001,0.049-0.001,0.073-0.001c1.415,0,2.072,0.416,2.563,1.607c0.031,0.178,0.055,0.358,0.055,0.545 c0,1.416-0.971,2.634-2.313,3.002c-0.078-1.062-0.414-1.876-1.079-2.501c-0.146-0.136-0.373-0.13-0.509,0.015 c-0.137,0.146-0.13,0.373,0.015,0.509c0.564,0.531,0.828,1.22,0.869,2.184l-0.026,0.199c-0.203,1.558-1.535,2.732-3.097,2.732 c-0.736,0-1.404-0.265-1.94-0.69l1.695-1.695c0.141-0.141,0.141-0.369,0-0.51s-0.369-0.141-0.51,0L17.05,29.44 c-0.426-0.536-0.691-1.204-0.691-1.94V27c0-1.58,0.504-1.64,2.64-1.64c0.199,0,0.36-0.161,0.36-0.36s-0.161-0.36-0.36-0.36 c-1.115,0-2.041,0.015-2.64,0.456v-7.758c1.462-0.044,1.926-0.348,2.329-0.621c0.292-0.2,0.524-0.357,1.312-0.357 c0.199,0,0.36-0.161,0.36-0.36s-0.161-0.36-0.36-0.36c-1.01,0-1.369,0.245-1.717,0.481c-0.334,0.227-0.689,0.459-1.923,0.497V8.331 C16.922,9.002,17.801,9.36,19,9.36c0.199,0,0.36-0.161,0.36-0.36S19.199,8.64,19,8.64c-1.826,0-2.64-0.814-2.64-2.64V5.5 c0-1.731,1.409-3.14,3.14-3.14c1.495,0,2.756,0.976,3.055,2.28H20c-0.199,0-0.36,0.161-0.36,0.36S19.801,5.36,20,5.36h2.888 c0.986,0.503,1.751,1.864,1.751,3.14c0,0.191-0.033,0.397-0.077,0.611c-0.946,0.799-1.729,1.563-1.888,2.529H20 c-0.199,0-0.36,0.161-0.36,0.36s0.161,0.36,0.36,0.36h2.64V15c0,0.199,0.161,0.36,0.36,0.36s0.36-0.161,0.36-0.36v-3 c0-0.749,0.56-1.393,1.589-2.272c1.031,0.54,1.69,1.601,1.69,2.772c0,0.224-0.029,0.457-0.09,0.713l-0.068,0.292l0.274,0.12 c1.145,0.501,1.884,1.63,1.884,2.875c0,0.777-0.296,1.528-0.833,2.113l-0.024,0.026H25c-0.199,0-0.36,0.161-0.36,0.36 s0.161,0.36,0.36,0.36h2.887c0.152,0.373,0.252,0.754,0.252,1.14C28.14,21.795,27.32,22.944,26.121,23.406z"></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                At IBM Cyber Range facilities
              </h6>
              <p>
                At IBM Cyber Range facilities IBM Consulting maintains X-Force
                Cyber Range facilities in Cambridge, Massachusetts, Washington
                DC, Ottawa, Canada (in partnership with the University of
                Ottawa) and Bangalore, India. Each facility provides an
                immersive, stimulating setting for organizations to experience
                true-to-life cyber response scenarios, in a full-scale security
                operations center (SOC) based on a fusion team model.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                fill="green"
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                id="connected--ecosystem"
                viewBox="0 0 32 32"
                data-di-res-id="ea9afd8d-5392ff54"
                data-di-rand="1748764022512"
              >
                <path d="M16,31.36c-1.25,0-2.276-0.978-2.355-2.208c-3.32-0.592-6.336-2.459-8.361-5.173 C4.914,24.22,4.473,24.36,4,24.36c-1.301,0-2.36-1.059-2.36-2.36c0-1.015,0.644-1.882,1.544-2.215 C2.823,18.562,2.64,17.289,2.64,16h0.72c0,1.241,0.179,2.466,0.533,3.643c0.821-0.038,1.584,0.363,2.032,0.992l4.11-2.055 l-2.353-4.411l0.636-0.339l2.361,4.427l15.074-7.537C25.68,10.494,25.64,10.251,25.64,10c0-0.568,0.202-1.09,0.538-1.498 c-1.905-2.58-4.751-4.359-7.887-4.936C18.036,4.595,17.105,5.36,16,5.36c-1.106,0-2.037-0.765-2.291-1.793 c-1.994,0.366-3.884,1.216-5.487,2.469L7.778,5.469c1.712-1.339,3.734-2.242,5.867-2.622C13.724,1.617,14.75,0.64,16,0.64 s2.276,0.977,2.355,2.207c3.318,0.592,6.335,2.459,8.361,5.173c0.37-0.24,0.811-0.38,1.284-0.38c1.302,0,2.36,1.059,2.36,2.36 c0,1.015-0.644,1.882-1.544,2.214c0.36,1.224,0.544,2.496,0.544,3.786h-0.72c0-1.242-0.179-2.466-0.532-3.643 c-0.806,0.054-1.584-0.363-2.032-0.993l-15.058,7.529l4.202,7.879c0.245-0.086,0.507-0.133,0.78-0.133 c1.105,0,2.036,0.765,2.291,1.793c1.992-0.365,3.883-1.214,5.487-2.468l0.443,0.566c-1.714,1.34-3.736,2.242-5.866,2.622 C18.276,30.384,17.25,31.36,16,31.36z M16,27.36c-0.904,0-1.64,0.735-1.64,1.64s0.736,1.64,1.64,1.64c0.904,0,1.64-0.735,1.64-1.64 S16.904,27.36,16,27.36z M5.823,23.497c1.904,2.579,4.75,4.359,7.886,4.936c0.133-0.535,0.448-0.999,0.876-1.32l-4.211-7.896 l-4.126,2.062C6.32,21.506,6.36,21.748,6.36,22C6.36,22.568,6.158,23.09,5.823,23.497z M4,20.36c-0.904,0-1.64,0.735-1.64,1.64 S3.096,23.64,4,23.64S5.64,22.904,5.64,22S4.904,20.36,4,20.36z M28,8.36c-0.904,0-1.64,0.736-1.64,1.64s0.735,1.64,1.64,1.64 s1.64-0.736,1.64-1.64S28.904,8.36,28,8.36z M16,1.36c-0.904,0-1.64,0.736-1.64,1.64S15.096,4.64,16,4.64 c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z M30,25.36h-4v-0.72h4V25.36z M31.36,24h-0.72v-4h0.721L31.36,24L31.36,24z M25.36,24h-0.72v-4h0.721L25.36,24L25.36,24z M30,19.36h-4v-0.72h4V19.36z M6,13.36H2v-0.72h4V13.36z M7.36,12H6.64V8h0.72 C7.36,8,7.36,12,7.36,12z M1.36,12H0.64V8h0.72V12z M6,7.36H2V6.64h4V7.36z"></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                Customer on-site
              </h6>
              <p>
                Bring the IBM X-Force Cyber Range immersive and gamified
                experience to your preferred location. Our X-Force Cyber Range
                team will customize either a half or full-day agenda
                specifically for you and then immerse your technical and
                leadership teams in an engaging session to hone your
                cybersecurity response.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4">
              <svg
                width="60px"
                fill="green"
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                id="application--security"
                viewBox="0 0 32 32"
                data-di-res-id="cff1a251-78dd3964"
                data-di-rand="1748764022514"
              >
                <path
                  clip-rule="evenodd"
                  d="M29,2.5C29,2.776,28.776,3,28.5,3S28,2.776,28,2.5S28.224,2,28.5,2S29,2.224,29,2.5z M27,2.5C27,2.776,26.776,3,26.5,3 S26,2.776,26,2.5S26.224,2,26.5,2S27,2.224,27,2.5z M25,2.5C25,2.776,24.776,3,24.5,3S24,2.776,24,2.5S24.224,2,24.5,2 S25,2.224,25,2.5z M15,23.36H1c-0.199,0-0.36-0.161-0.36-0.36V1c0-0.199,0.161-0.36,0.36-0.36h30c0.199,0,0.36,0.161,0.36,0.36v22 h-0.72V4.36H1.36v18.28H15V23.36z M1.36,3.64h29.28V1.36H1.36V3.64z M10,14.36H4v-0.72h6V14.36z M10,11.36H4v-0.72h6V11.36z M10,8.36H4V7.64h6V8.36z M23,31.36c-3.507,0-6.36-2.854-6.36-6.36v-7.223l6.36-3.18l6.36,3.18V25 C29.36,28.507,26.507,31.36,23,31.36z M17.36,18.223V25c0,3.11,2.529,5.64,5.64,5.64s5.64-2.529,5.64-5.64v-6.777L23,15.402 L17.36,18.223z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <h6 className="text-lg font-semibold text-black my-4">
                Customer on-site
              </h6>
              <p>
                The IBM X-Force Cyber Range virtual experiences provide
                immersive simulations to strengthen your organization’s cyber
                response and improve resilience and fix vulnerabilities—anywhere
                in the world. Collaborate with individuals from across your
                organization, regardless of location. Our 2-to-4-hour
                experiences can be customized based on your industry, location
                and structure.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-[0_0_15px_rgba(0,0,0,0.1)]  my-10 leading-7 px-2 md:px-7 py-7  rounded-xl text-neutral-500">
          <h3 className="text-2xl font-[500] text-neutral-800">Benefits</h3>
          <p>
            Explore X-Force resources to better prepare your organization for
            cyber threats—from training and simulations to full crisis response
            services.
          </p>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4 group hover:bg-blue-900 ">
              <h6 className="text-lg font-semibold text-black my-4 group-hover:text-white">
                IBM X-Force solution brief
              </h6>
              <p className="group-hover:text-white">
                Understand more about the capabilities X-Force can offer to
                protect your organization against cyber attack.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4 group hover:bg-blue-900 ">
              <h6 className="text-lg group-hover:text-white font-semibold text-black my-4">
                Train team for cyber incident
              </h6>
              <p className="group-hover:text-white">
                Learn more about the cyber range offerings and how your
                organization can train for a full-business incident response.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4 group hover:bg-blue-900 ">
              <h6 className="text-lg font-semibold text-black my-4 group-hover:text-white">
                Experience cyber range
              </h6>
              <p className="group-hover:text-white">
                After a cyber breach, every second can count. Prepare your team
                to respond on your organization’s worst day.
              </p>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-3 py-4 group hover:bg-blue-900 ">
              <h6 className="text-lg font-semibold text-black my-4 group-hover:text-white">
                IBM X-Force cyber crisis
              </h6>
              <p className="group-hover:text-white">
                A whole-of-business response to crisis-level cyberattacks that
                threaten your entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default CyberRange;
