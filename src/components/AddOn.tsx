export default function AddOn() {
  return (
    <div className="mb-[55px] px-4">
      <h2 className="text-marine-blue font-semibold text-2xl">Pick add-ons</h2>
      <p className="text-sm mb-6 text-cool-gray">
        Add-ons help enhance your gaming experience
      </p>
      <div className="flex items-center justify-between border p-2 border-light-gray rounded-md mb-3">
        <div className="flex items-center gap-x-4">
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div>
            <p className="text-sm text-marine-blue font-semibold">
              Online service
            </p>
            <p className="text-sm text-cool-gray">
              Access to multiplayer games
            </p>
          </div>
        </div>
        <p className="text-blue text-sm">+$10/yr</p>
      </div>
      <div className="flex items-center justify-between border p-2 border-light-gray rounded-md mb-3">
        <div className="flex items-center gap-x-4">
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div>
            <p className="text-sm text-marine-blue font-semibold">
              Larger storage
            </p>
            <p className="text-sm text-cool-gray">Extra 1TB of cloud save</p>
          </div>
        </div>
        <p className="text-blue text-sm">+$20/yr</p>
      </div>
      <div className="flex items-center justify-between border p-2 border-light-gray rounded-md mb-3">
        <div className="flex items-center gap-x-4">
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
          <div>
            <p className="text-sm text-marine-blue font-semibold">
              Customizable profile
            </p>
            <p className="text-sm text-cool-gray">
              Customize theme on your profile
            </p>
          </div>
        </div>
        <p className="text-blue text-sm">+$20/yr</p>
      </div>
    </div>
  );
}
