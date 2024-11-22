import { useState } from "react";

interface componentProps {
  components: JSX.Element[];
}
export default function MainPage({ components }: componentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNextButton() {
    setCurrentIndex((curr) => curr + 1);
  }
  return (
    <div className="py-4 px-10 col-span-5">
      {components[currentIndex]}
      <div className="flex justify-end">
        <button
          onClick={handleNextButton}
          className="text-center text-xs bg-marine-blue text-white py-2 px-4 font-semibold mt-8  rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
