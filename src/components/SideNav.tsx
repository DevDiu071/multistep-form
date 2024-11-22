export default function SideNav() {
  return (
    <div className="bg-[url('/assets/images/bg-sidebar-desktop.svg')] p-4 rounded-md text-white bg-bottom col-span-2 flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <p className="text-xs text-marine-blue font-bold flex items-center rounded-3xl justify-center bg-light-blue w-[25px] h-[25px]">
          1
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 1</p>
          <p className="text-xs text-alabasta">YOUR INFO</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-xs font-bold flex items-center rounded-3xl justify-center border border-light-blue w-[25px] h-[25px]">
          2
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 2</p>
          <p className="text-xs text-alabasta">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-xs font-bold flex items-center rounded-3xl justify-center border border-light-blue w-[25px] h-[25px]">
          3
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 3</p>
          <p className="text-xs text-alabasta">ADD-ONS</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="text-xs font-bold flex items-center rounded-3xl justify-center border border-light-blue w-[25px] h-[25px]">
          4
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 4</p>
          <p className="text-xs text-alabasta">SUMMARY</p>
        </div>
      </div>
    </div>
  );
}
