import clsx from "clsx";

interface ButtonProps {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  nextSection: boolean;
}

export default function Button({
  nextSection,
  setCurrentIndex,
  currentIndex,
}: ButtonProps) {
  function handleNextButton() {
    if (nextSection) {
      setCurrentIndex((curr) => curr + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex((curr) => curr - 1);
  }
  return (
    <div className="flex justify-between items-center mt-10 mx-4">
      <button
        onClick={handlePrev}
        className={clsx("text-cool-gray text-sm", {
          "opacity-0": currentIndex === 0,
        })}
      >
        Go back
      </button>
      <button
        onClick={handleNextButton}
        className={clsx(
          "text-center text-xs bg-marine-blue text-white py-2 px-4 font-semibold rounded-md",
          { "bg-blue px-6": currentIndex === 3 }
        )}
      >
        {currentIndex === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
