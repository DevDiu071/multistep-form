import clsx from "clsx";

interface NavProps {
  currentIndex: number;
}

export default function SideNav({ currentIndex }: NavProps) {
  return (
    <div className="bg-[url('/assets/images/bg-sidebar-desktop.svg')] p-4 rounded-md text-white bg-bottom col-span-2 flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[25px] h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 0 }
          )}
        >
          1
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 1</p>
          <p className="text-xs text-alabasta">YOUR INFO</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[25px] h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 1 }
          )}
        >
          2
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 2</p>
          <p className="text-xs text-alabasta">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[25px] h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 2 }
          )}
        >
          3
        </p>
        <div>
          <p className="text-xs text-cool-gray">STEP 3</p>
          <p className="text-xs text-alabasta">ADD-ONS</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[25px] h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 3 }
          )}
        >
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
