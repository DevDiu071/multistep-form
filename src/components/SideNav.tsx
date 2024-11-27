import clsx from "clsx";

interface NavProps {
  currentIndex: number;
}

export default function SideNav({ currentIndex }: NavProps) {
  return (
    <div className="md:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-[url('/assets/images/bg-sidebar-mobile.svg')] md:p-4 pt-4 pb-[50px] md:rounded-md text-white md:bg-bottom bg-center md:col-span-2 flex md:flex-col md:pt-8 justify-center md:justify-start gap-x-4 gap-y-4">
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs font-bold flex items-center rounded-3xl border-light-blue border justify-center w-[30px] h-[30px] md:w-[25px] md:h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 0 }
          )}
        >
          1
        </p>
        <div className="hidden md:block">
          <p className="text-xs text-cool-gray">STEP 1</p>
          <p className="text-xs text-alabasta">YOUR INFO</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[30px] h-[30px] md:w-[25px] md:h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 1 }
          )}
        >
          2
        </p>
        <div className="hidden md:block">
          <p className="text-xs text-cool-gray">STEP 2</p>
          <p className="text-xs text-alabasta">SELECT PLAN</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[30px] h-[30px] md:w-[25px] md:h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 2 }
          )}
        >
          3
        </p>
        <div className="hidden md:block">
          <p className="text-xs text-cool-gray">STEP 3</p>
          <p className="text-xs text-alabasta">ADD-ONS</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <p
          className={clsx(
            "text-xs  font-bold flex items-center rounded-3xl border-light-blue border  justify-center w-[30px] h-[30px] md:w-[25px] md:h-[25px]",
            { "text-marine-blue bg-light-blue": currentIndex === 3 }
          )}
        >
          4
        </p>
        <div className="hidden md:block">
          <p className="text-xs text-cool-gray">STEP 4</p>
          <p className="text-xs text-alabasta">SUMMARY</p>
        </div>
      </div>
    </div>
  );
}
