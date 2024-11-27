import clsx from "clsx";

type Plan = {
  name: string;
  id: string;
  amount: number;
  image: string;
};

interface SelectPlanProps {
  setSelectedPlan: React.Dispatch<
    React.SetStateAction<{
      name: string;
      id: string;
      amount: number;
      image: string;
    }>
  >;
  shiftBtn: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  validate: boolean;
  selected: string;
  selectedPlan: {
    name: string;
    id: string;
    amount: number;
    image: string;
  };
  setNextSection: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubCription: () => void;
  plansFiltered: Plan[];
}

export default function SelectPlan({
  plansFiltered,
  handleSubCription,
  shiftBtn,
  setSelectedPlan,
  validate,
  setValidate,
  setSelected,
  selected,
  setNextSection,
}: SelectPlanProps) {
  return (
    <div className="bg-white p-4 mx-2 rounded-md -mt-[50px] md:mb-4 md:mt-0">
      <div className="md:ml-6">
        <h2 className="text-marine-blue font-semibold text-2xl">
          Select your plan
        </h2>
        <p className="text-sm mb-6 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div>
        {validate && (
          <p className="text-red px-9 text-sm mb-1">Please select a plan</p>
        )}
        <div className="md:flex-row md:gap-x-4 md:justify-center flex flex-col gap-y-3 ">
          {plansFiltered.map((plan) => (
            <div
              key={plan.name}
              onClick={() => {
                setNextSection(false);
                setSelected(plan.name);
                setSelectedPlan(plan);
                setValidate(false);
                setNextSection(true);
              }}
              className={clsx(
                "border border-light-gray hover:border-blue-color py-2 px-3 cursor-pointer flex md:flex-col md:justify-center items-start gap-x-2 rounded-md",
                {
                  "border-blue-color": plan.name === selected,
                  "bg-magnolia": plan.name === selected,
                }
              )}
            >
              <img
                width={30}
                height={30}
                src={plan.image}
                alt="arcade-icon"
                className="mt-2 md:mt-0"
              />
              <div className="md:mt-5 leading-loose">
                <p className="text-marine-blue font-semibold">{plan.name}</p>
                <p className="text-sm text-cool-gray">
                  ${plan.amount}/{shiftBtn ? "mo" : "yr"}
                </p>

                <p
                  className={clsx("text-xs text-marine-blue", {
                    "opacity-0": shiftBtn,
                  })}
                >
                  2 months free
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center rounded-md max-w-[340px] mx-auto gap-x-4 mt-6 mb-5 py-1.5 bg-magnolia">
        <p
          className={clsx("text-sm font-bold text-cool-gray", {
            "text-black": shiftBtn,
          })}
        >
          Monthly
        </p>
        <div className="h-[18px] w-[33px] bg-marine-blue rounded-3xl relative">
          <div
            onClick={handleSubCription}
            className={clsx(
              "h-[14px] w-[14px] cursor-pointer rounded-3xl transition-all duration-200  bg-white absolute top-0.5 right-0.5",
              { "right-4": shiftBtn }
            )}
          ></div>
        </div>
        <p
          className={clsx("text-sm font-bold text-cool-gray", {
            "text-black": !shiftBtn,
          })}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
