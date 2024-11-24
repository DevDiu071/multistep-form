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
}

export default function AddOn({
  filteredAddOns,
  setSelectedAddOn,
  selectedAddOn,
}: AddOnProps) {
  return (
    <div className="mb-[55px] px-4">
      <h2 className="text-marine-blue font-semibold text-2xl">Pick add-ons</h2>
      <p className="text-sm mb-6 text-cool-gray">
        Add-ons help enhance your gaming experience
      </p>
      {filteredAddOns.map((addOn) => (
        <div
          key={Math.random()}
          className="flex items-center justify-between border p-2 border-light-gray rounded-md mb-3"
        >
          <div className="flex items-center gap-x-4">
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedAddOn.some((item) => item.name === addOn.name)}
                onChange={(e) =>
                  setSelectedAddOn(
                    (currentSelection) =>
                      e.target.checked
                        ? [...currentSelection, addOn] // Add if checked
                        : currentSelection.filter(
                            (item) => item.name !== addOn.name
                          ) // Remove if unchecked
                  )
                }
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
