import clsx from "clsx";

type obj = {
  name: string;
  id: string;
  image: string;
  amount: number;
};

interface ButtonProps {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  nextSection: boolean;
  selectedPlan: obj;
}

export default function Button({
  nextSection,
  setCurrentIndex,
  currentIndex,
  selectedPlan,
  setValidate,
}: ButtonProps) {
  function handleNextButton() {
    if (currentIndex === 1 && !selectedPlan.name) {
      setValidate(true);
      return 0;
    }

    if (nextSection) {
      setCurrentIndex((curr) => curr + 1);
      setValidate(false);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex((curr) => curr - 1);
  }
  return (
    <div className="flex bg-white py-4 px-4 md:px-0 justify-between items-center mt-[100px] md:mt-0 md:mx-4">
      <button
        onClick={handlePrev}
        className={clsx(
          "text-cool-gray text-sm transition-colors hover:text-black",
          {
            "opacity-0": currentIndex === 0,
          }
        )}
      >
        Go back
      </button>
      <button
        onClick={handleNextButton}
        className={clsx(
          "text-center text-xs bg-marine-blue hover:bg-marine-hover transition-all text-white py-2 px-4 font-semibold rounded-md",
          { "bg-blue-color px-6": currentIndex === 3 }
        )}
      >
        {currentIndex === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
