import clsx from "clsx";
import { useEffect } from "react";

interface AddOnItem {
  name: string;
  id: string;
  info: string;
  amount: number;
}

interface AddOnProps {
  setSelectedAddOn: React.Dispatch<React.SetStateAction<AddOnItem[]>>;
  filteredAddOns: AddOnItem[];
  selectedAddOn: AddOnItem[];
  setNextSection: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddOn({
  filteredAddOns,
  setSelectedAddOn,
  selectedAddOn,
  setNextSection,
}: AddOnProps) {
  useEffect(function () {
    setNextSection(false);
  }, []);

  return (
    <div className="bg-white p-4 rounded-md mx-2 -mt-[50px] md:mt-0 mb-[55px] md:mb-4 px-4">
      <h2 className="text-marine-blue font-semibold text-2xl">Pick add-ons</h2>
      <p className="text-sm mb-6 text-cool-gray">
        Add-ons help enhance your gaming experience
      </p>
      {filteredAddOns.map((addOn) => (
        <div
          key={Math.random()}
          className={clsx(
            "flex items-center justify-between hover:border-blue-color cursor-pointer border p-2 border-light-gray rounded-md mb-3",
            {
              "bg-magnolia": selectedAddOn.some(
                (item) => item.name === addOn.name
              ),
              "border-blue-color": selectedAddOn.some(
                (item) => item.name === addOn.name
              ),
            }
          )}
        >
          <div className="flex items-center gap-x-4">
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedAddOn.some((item) => item.name === addOn.name)}
                onChange={(e) => {
                  setNextSection(true);
                  setSelectedAddOn(
                    (currentSelection) =>
                      e.target.checked
                        ? [...currentSelection, addOn] // Add if checked
                        : currentSelection.filter(
                            (item) => item.name !== addOn.name
                          ) // Remove if unchecked
                  );
                }}
              />
            </div>
            <div>
              <p className="text-sm text-marine-blue font-semibold">
                {addOn.name}
              </p>
              <p className="text-sm text-cool-gray">{addOn.info}</p>
            </div>
          </div>
          <p className="text-blue text-sm">
            +${addOn.amount}/{addOn.id === "yearly" ? "yr" : "mo"}
          </p>
        </div>
      ))}
    </div>
  );
}
