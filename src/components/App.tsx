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
  const [subsCription, setSubCription] = useState<string>("monthly");
  const [selectedPlan, setSelectedPlan] = useState({
    name: "",
    id: "",
    amount: 0,
    image: "",
  });
  const [selectedAddOn, setSelectedAddOn] = useState<AddOnProps[]>([]);
  const [nextSection, setNextSection] = useState<boolean>(false);
  const [selected, setSelected] = useState("");
  const [validate, setValidate] = useState(false);

  const [shiftBtn, setShiftBtn] = useState<boolean>(false);
  function handleSubcription() {
    setShiftBtn((shift) => !shift);
    setSubCription((sub) => (sub === "monthly" ? "yearly" : "monthly"));
  }

  const plansFiltered = plans.filter((section) => section.id !== subsCription);

  const filteredAddOns = addOns.filter((add) => add.id !== subsCription);

  const arr = [
    <PersonalInfo
      setNextSection={setNextSection}
      nextSection={nextSection}
      setCurrentIndex={setCurrentIndex}
    />,
    <SelectPlan
      shiftBtn={shiftBtn}
      handleSubCription={handleSubcription}
      plansFiltered={plansFiltered}
      setSelectedPlan={setSelectedPlan}
      setNextSection={setNextSection}
      selected={selected}
      setSelected={setSelected}
      selectedPlan={selectedPlan}
      validate={validate}
      setValidate={setValidate}
    />,
    <AddOn
      filteredAddOns={filteredAddOns}
      setSelectedAddOn={setSelectedAddOn}
      selectedAddOn={selectedAddOn}
      setNextSection={setNextSection}
    />,
    <FinishingUp selectedAddOn={selectedAddOn} selectedPlan={selectedPlan} />,
    <ThankYou />,
  ];

  return (
    <div className="md:grid md:grid-cols-7 flex flex-col rounded-md gap-x-[10px] max-w-[700px] md:mt-10 mx-auto md:bg-white md:p-2 shadow-custom">
      <SideNav currentIndex={currentIndex} />
      <MainPage
        components={arr}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        nextSection={nextSection}
        selectedPlan={selectedPlan}
        setValidate={setValidate}
      />
    </div>
  );
}
