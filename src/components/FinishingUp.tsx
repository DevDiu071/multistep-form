interface AddOnItem {
  name: string;
  id: string;
  info: string;
  amount: number;
}

type AddOnProps = {
  selectedAddOn: AddOnItem[];
  selectedPlan: AddOnItem;
};

export default function FinishingUp({
  selectedAddOn,
  selectedPlan,
}: AddOnProps) {
  const addOnTotal = selectedAddOn.reduce((acc, item) => acc + item.amount, 0);
  return (
    <div className="px-4 mb-[67px] md:mb-8 bg-white p-4 mx-2 rounded-md -mt-[50px] md:mt-0">
      <h2 className="text-marine-blue font-semibold text-2xl">Finishing up</h2>
      <p className="text-sm mb-6 text-cool-gray">
        Double-check everything looks OK before comfirming
      </p>
      <div className="bg-alabasta rounded-md p-3">
        <div className="flex justify-between mb-4 text-sm border-b pb-3 border-light-blue">
          <div>
            <p className="text-marine-blue font-semibold text-lg">
              {selectedPlan.name}({selectedPlan.id})
            </p>
            <p className="text-cool-gray border-b-2 border-light-gray inline">
              change
            </p>
          </div>
          <p className="text-marine-blue font-semibold">
            ${selectedPlan.amount}/{selectedPlan.id === "yearly" ? "yr" : "mo"}
          </p>
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          {selectedAddOn.map((addOn) => (
            <div key={Math.random()} className="flex justify-between">
              <p className="text-cool-gray">{addOn.name}</p>
              <p className="text-marine-blue text-xs font-medium">
                +${addOn.amount}/{addOn.id === "yearly" ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-sm mt-6 px-3">
        <p className="text-cool-gray">
          total(per {selectedPlan.id === "yearly" ? "Year" : "Month"})
        </p>
        <p className="text-blue font-semibold">
          +${addOnTotal + selectedPlan.amount}/
          {selectedPlan.id === "yearly" ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
}
