export default function SelectPlan() {
  return (
    <div>
      <div className="ml-8">
        <h2 className="text-marine-blue font-semibold text-2xl">
          Personal info
        </h2>
        <p className="text-sm mb-6 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex gap-x-4 justify-center">
        <div className="border border-light-gray py-2 px-3 rounded-md">
          <img
            width={30}
            height={30}
            src="/assets/images/icon-arcade.svg"
            alt="arcade-icon"
          />
          <div className="mt-5 leading-loose">
            <p className="text-marine-blue font-semibold">Arcade</p>
            <p className="text-sm text-cool-gray">$90/yr</p>
            <p className="text-xs text-marine-blue">2 months free</p>
          </div>
        </div>
        <div className="border border-light-gray py-2 px-3 rounded-md">
          <img
            width={30}
            height={30}
            src="/assets/images/icon-advanced.svg"
            alt="arcade-icon"
          />
          <div className="mt-5 leading-loose">
            <p className="text-marine-blue font-semibold">Advanced</p>
            <p className="text-sm text-cool-gray">$120/yr</p>
            <p className="text-xs text-marine-blue">2 months free</p>
          </div>
        </div>
        <div className="border border-light-gray py-2 px-3 rounded-md">
          <img
            width={30}
            height={30}
            src="/assets/images/icon-pro.svg"
            alt="arcade-icon"
          />
          <div className="mt-5 leading-loose">
            <p className="text-marine-blue font-semibold">Pro</p>
            <p className="text-sm text-cool-gray">$150/yr</p>
            <p className="text-xs text-marine-blue">2 months free</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-md max-w-[340px] mx-auto gap-x-4 mt-6 mb-5 py-1.5 bg-magnolia">
        <p className="text-sm">Monthly</p>
        <div className="h-[18px] w-[33px] bg-marine-blue rounded-3xl relative">
          <div className="h-[14px] w-[14px] rounded-3xl bg-white absolute top-0.5 right-0.5"></div>
        </div>
        <p className="text-sm">Yearly</p>
      </div>
    </div>
  );
}
