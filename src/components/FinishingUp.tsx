export default function FinishingUp() {
  return (
    <div className="px-4 mb-[67px]">
      <h2 className="text-marine-blue font-semibold text-2xl">Finishing up</h2>
      <p className="text-sm mb-6 text-cool-gray">
        Double-check everything looks OK before comfirming
      </p>
      <div className="bg-alabasta rounded-md p-3">
        <div className="flex justify-between mb-4 text-sm border-b pb-3 border-light-blue">
          <div>
            <p className="text-marine-blue font-semibold">Arcade(Monthly)</p>
            <p className="text-cool-gray border-b-2 border-light-gray inline">
              change
            </p>
          </div>
          <p className="text-marine-blue font-semibold">$9/mo</p>
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <div className="flex justify-between">
            <p className="text-cool-gray">Online service</p>
            <p className="text-marine-blue">+$1/mo</p>
          </div>
          <div className="flex justify-between">
            <p className="text-cool-gray">Larger storage</p>
            <p className="text-marine-blue">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm mt-6 px-3">
        <p className="text-cool-gray">total(per month)</p>
        <p className="text-blue font-semibold">+$12/mo</p>
      </div>
    </div>
  );
}
