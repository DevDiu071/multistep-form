import Button from "./Button";

interface componentProps {
  components: JSX.Element[];
  currentIndex: number;
  nextSection: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedPlan: {};
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MainPage({
  components,
  currentIndex,
  setCurrentIndex,
  nextSection,
  setValidate,
  selectedPlan,
}: componentProps) {
  return (
    <div className="py-4 px-2 md:px-10 col-span-5">
      {components[currentIndex]}
      {currentIndex < 4 && currentIndex > 0 && (
        <Button
          nextSection={nextSection}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          selectedPlan={selectedPlan}
          setValidate={setValidate}
        />
      )}
    </div>
  );
}
