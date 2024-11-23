import Button from "./Button";

interface componentProps {
  components: JSX.Element[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
export default function MainPage({
  components,
  currentIndex,
  setCurrentIndex,
}: componentProps) {
  return (
    <div className="py-4 px-10 col-span-5">
      {components[currentIndex]}
      {currentIndex < 4 && (
        <Button currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      )}
    </div>
  );
}
