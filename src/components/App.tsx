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
    image: "/assets/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    id: "yearly",
    amount: 120,
    image: "/assets/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    id: "yearly",
    amount: 150,
    image: "/assets/images/icon-pro.svg",
  },
  {
    name: "Arcade",
    id: "monthly",
    amount: 9,
    image: "/assets/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    id: "monthly",
    amount: 12,
    image: "/assets/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    id: "monthly",
    amount: 15,
    image: "/assets/images/icon-pro.svg",
  },
];

const addOns = [
  {
    name: "Online service",
    info: "Access to multiplayer games",
    amount: 10,
    id: "yearly",
  },
  {
    name: "Larger storage",
    info: "Extra 1TB of cloud save",
    amount: 20,
    id: "yearly",
  },
  {
    name: "Customizable profile",
    info: "Customize theme on your profile",
    amount: 20,
    id: "yearly",
  },
  {
    name: "Online service",
    info: "Access to multiplayer games",
    amount: 1,
    id: "monthly",
  },
  {
    name: "Larger storage",
    info: "Extra 1TB of cloud save",
    amount: 2,
    id: "monthly",
  },
  {
    name: "Customizable profile",
    info: "Customize theme on your profile",
    amount: 2,
    id: "monthly",
  },
];

interface AddOnProps {
  name: string;
  id: string;
  amount: number;
  info: string;
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sections, setSections] = useState(plans);
  const [subsCription, setSubCription] = useState<string>("monthly");
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedAddOn, setSelectedAddOn] = useState<AddOnProps[]>([]);
  const [nextSection, setNextSection] = useState<boolean>(false);
  // const [filteredAddOns, setFilteredAddOns] = useState<AddOnProps[]>([]);

  const [shiftBtn, setShiftBtn] = useState<boolean>(false);
  function handleSubcription() {
    setShiftBtn((shift) => !shift);
    setSubCription((sub) => (sub === "monthly" ? "yearly" : "monthly"));
    // setFilteredAddOns(addOns.filter((add) => add.id !== subsCription));
  }

  const plansFiltered = sections.filter(
    (section) => section.id !== subsCription
  );

  const filteredAddOns = addOns.filter((add) => add.id !== subsCription);
  console.log("Addons: ", filteredAddOns);

  console.log("New: ", plansFiltered);
  console.log("Selected: ", selectedPlan);
  console.log("SelectedAdd: ", selectedAddOn);

  const arr = [
    <PersonalInfo setNextSection={setNextSection} nextSection={nextSection} />,
    <SelectPlan
      shiftBtn={shiftBtn}
      handleSubCription={handleSubcription}
      plansFiltered={plansFiltered}
      setSelectedPlan={setSelectedPlan}
      setNextSection={setNextSection}
    />,
    <AddOn
      filteredAddOns={filteredAddOns}
      setSelectedAddOn={setSelectedAddOn}
      selectedAddOn={selectedAddOn}
    />,
    <FinishingUp selectedAddOn={selectedAddOn} selectedPlan={selectedPlan} />,
    <ThankYou />,
  ];

  return (
    <div className="grid grid-cols-7 rounded-md gap-x-[10px] max-w-[700px] mt-10 mx-auto bg-white p-2 shadow-custom">
      <SideNav currentIndex={currentIndex} />
      <MainPage
        components={arr}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        nextSection={nextSection}
      />
    </div>
  );
}
