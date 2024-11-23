import { useState } from "react";
import AddOn from "./AddOn";
import FinishingUp from "./FinishingUp";
import MainPage from "./MainPage";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SideNav from "./SideNav";
import ThankYou from "./ThankYou";

const plans = [
  {
    name: "Arcade",
    id: "yearly",
    amount: 90,
  },
  {
    name: "Advanced",
    id: "yearly",
    amount: 120,
  },
  {
    name: "Pro",
    id: "yearly",
    amount: 150,
  },
  {
    name: "Arcade",
    id: "monthly",
    amount: 9,
  },
  {
    name: "Advanced",
    id: "monthly",
    amount: 12,
  },
  {
    name: "Pro",
    id: "monthly",
    amount: 15,
  },
];

interface FilteredPlansProps {
  name: string;
  id: string;
  amount: number;
}
export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sections, setSections] = useState(plans);
  const [subsCription, setSubCription] = useState<string>("monthly");
  const [filteredPlans, setFilteredPlans] = useState<FilteredPlansProps[]>([]);

  const [shiftBtn, setShiftBtn] = useState<boolean>(false);
  function handleSubcription() {
    setShiftBtn((shift) => !shift);
    setSubCription((sub) => (sub === "monthly" ? "yearly" : "monthly"));
    // setFilteredPlans(sections.filter((section) => section.id !== subsCription));
  }
  console.log(filteredPlans);

  const plansFiltered = sections.filter(
    (section) => section.id !== subsCription
  );
  console.log("New: ", plansFiltered);

  const arr = [
    <PersonalInfo />,
    <SelectPlan
      shiftBtn={shiftBtn}
      handleSubCription={handleSubcription}
      plansFiltered={plansFiltered}
    />,
    <AddOn />,
    <FinishingUp />,
    <ThankYou />,
  ];

  return (
    <div className="grid grid-cols-7 rounded-md gap-x-[10px] max-w-[700px] mt-10 mx-auto bg-white p-2 shadow-custom">
      <SideNav currentIndex={currentIndex} />
      <MainPage
        components={arr}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}
