function Pricing() {
  const plans = [
    {
      title: "Basic Plan",
      price: "$1k/month",
      link: "https://vita.spsnet.com/plans/?plan=basic",
    },
    {
      title: "Standard Plan",
      price: "$3k/month",
      link: "https://vita.spsnet.com/plans/?plan=basic",
    },
    {
      title: "Premium Plan",
      price: "Custom",
      link: "https://vita.spsnet.com/plans/?plan=basic",
    },
  ];
  return (
    <>
      <div className="px-10">
        <h2 className="text-xl font-semibold text-center">Choose a Plan</h2>
        <div className=" mt-4 flex flex-wrap gap-5 justify-center items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className=" bg-white text-black flex flex-col rounded-lg shadow-lg items-center py-3 w-[100%] xs:[110px] lg:w-[160px]"
            >
              <div className=" font-bold text-xl">{plan.title}</div>
              <div className="my-2 font-light ">{plan.price}</div>
              <a
                className="gradient-btn py-1 px-5 rounded shadow-sm  text-white text-sm"
                href={plan.link}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Pricing;
