import clsx from "clsx";
import { useRef, useState } from "react";

interface PersonalInfoProps {
  setNextSection: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  nextSection: boolean;
}

export default function PersonalInfo({
  setNextSection,
  nextSection,
  setCurrentIndex,
}: PersonalInfoProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(false);
  const [number, setNumber] = useState<number>();

  const validateEmail = (email: string): boolean => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  // const formValidated = number && email && isValid && userName;

  function subMitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setNextSection(true);
    setCurrentIndex((curr) => curr + 1);
    setNextSection(false);
  }

  console.log(userName);
  return (
    <div className="bg-white p-4 md:px-5 -mt-12 md:mt-0 rounded-md">
      <h2 className="text-marine-blue font-semibold text-2xl ">
        Personal info
      </h2>
      <p className="text-sm mb-6 text-cool-gray">
        Please provide your name, email address, & phone No.
      </p>
      <form onSubmit={subMitHandler} className="flex flex-col">
        <label className="text-sm  text-marine-blue mb-1">Name</label>
        <input
          className={clsx(
            "border mb-3 placeholder:text-sm rounded-md px-2 border-light-gray py-1"
          )}
          type="text"
          placeholder="e.g. Stephen King"
          required
        />
        <label className="text-sm  text-marine-blue mb-1">Email</label>
        <input
          className={clsx(
            "border placeholder:text-sm mb-3 rounded-md px-2 border-light-gray py-1",
            { "border-red": !isValid && email }
          )}
          type="text"
          required
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className="text-sm placeholder:text-sm  text-marine-blue mb-2">
          Phone Number
        </label>
        <input
          className="border mb-3 placeholder:text-sm rounded-md px-2 border-light-gray py-1"
          type="text"
          placeholder="e.g. +1 234 567"
          required
        />
        <div className="flex justify-end mt-10 md:mt-6 py-4 px-4">
          <button className="text-xs bg-marine-blue w-[90px]  text-white py-2 px-4 font-semibold rounded-md">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
