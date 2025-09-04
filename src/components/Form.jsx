function Form() {
  return (
    <>
      <form className="bg-white  p-6 space-y-4" id="contactForm" noValidate>
        <input type="hidden" name="action" value="add_build" />

        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
          />
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            required
            className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
          />
        </div>

        {/* Company + Job Title */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company / Organization"
            required
            className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
          />
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title / Role"
            required
            className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
          />
        </div>

        {/* Date & Time */}
        <div>
          <h6 className="text-gray-800 font-medium mb-2">
            What date and time work best for you to meet with our consultant?
          </h6>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="time"
              name="time"
              id="time"
              required
              className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
            />
            <input
              type="date"
              name="date"
              id="date"
              required
              className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none font-bold"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <a
            href="https://vita.spsnet.com/about-us/"
            className=" gradient-btn py-3 px-6  rounded text-white"
          >
            Submit
          </a>
          <div id="msgSubmit"></div>
        </div>
      </form>
    </>
  );
}
export default Form;
