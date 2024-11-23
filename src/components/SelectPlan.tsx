import clsx from "clsx";
import { useState } from "react";

interface FilteredPlansProps {
  name: string;
  id: string;
  amount: number;
}
interface SelectPlanProps {
  // setSubCription: React.Dispatch<React.SetStateAction<string>>;
  // setFilteredPlans: React.Dispatch<React.SetStateAction<FilteredPlansProps[]>>;
  // sections: FilteredPlansProps[];
  // subCription: string;
  shiftBtn: boolean;
  handleSubCription: () => void;
  plansFiltered: {
    name: string;
    id: string;
    amount: number;
  }[];
}

// type props = FilteredPlansProps & SelectPlanProps;

export default function SelectPlan({
  plansFiltered,
  handleSubCription,
  shiftBtn,
}: SelectPlanProps) {
  return (
    <div className="mb-[60px]">
      <div className="ml-8">
        <h2 className="text-marine-blue font-semibold text-2xl">
          Select your plan
        </h2>
        <p className="text-sm mb-6 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex gap-x-4 justify-center">
        {plansFiltered.map((plan) => (
          <div
            key={Math.random()}
            onClick={() => console.log("curr plan: ", plan.name)}
            className="border border-light-gray py-2 px-3 rounded-md"
          >
            <img
              width={30}
              height={30}
              src="/assets/images/icon-arcade.svg"
              alt="arcade-icon"
            />
            <div className="mt-5 leading-loose">
              <p className="text-marine-blue font-semibold">{plan.name}</p>
              <p className="text-sm text-cool-gray">
                ${plan.amount}/{shiftBtn ? "mo" : "yr"}
              </p>
              <p className="text-xs text-marine-blue">2 months free</p>
            </div>
          </div>
        ))}
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
