import AddOn from "./AddOn";
import MainPage from "./MainPage";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SideNav from "./SideNav";

export default function App() {
  const arr = [<PersonalInfo />, <SelectPlan />, <AddOn />];
  return (
    <div className="grid grid-cols-7 rounded-md gap-x-[10px] max-w-[700px] mt-10 mx-auto bg-white p-2 shadow-custom">
      <SideNav />
      <MainPage components={arr} />
    </div>
  );
}
