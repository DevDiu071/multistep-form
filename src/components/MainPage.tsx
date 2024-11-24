import Button from "./Button";

interface componentProps {
  components: JSX.Element[];
  currentIndex: number;
  nextSection: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function MainPage({
  components,
  currentIndex,
  setCurrentIndex,
  nextSection,
}: componentProps) {
  return (
    <div className="py-4 px-10 col-span-5">
      {components[currentIndex]}
      {currentIndex < 4 && (
        <Button
          nextSection={nextSection}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
}
