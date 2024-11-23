export default function PersonalInfo() {
  return (
    <div className="px-5">
      <h2 className="text-marine-blue font-semibold text-2xl ">
        Personal info
      </h2>
      <p className="text-sm mb-6 text-cool-gray">
        Please provide your name, email address, & phone No.
      </p>
      <form className="flex flex-col">
        <label className="text-sm  text-marine-blue mb-1">Name</label>
        <input
          className="border mb-3 placeholder:text-sm rounded-md px-2 border-light-gray py-1"
          type="text"
          placeholder="e.g. Stephen King"
        />
        <label className="text-sm  text-marine-blue mb-1">Email</label>
        <input
          className="border placeholder:text-sm mb-3 rounded-md px-2 border-light-gray py-1"
          type="text"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className="text-sm placeholder:text-sm  text-marine-blue mb-2">
          Phone Number
        </label>
        <input
          className="border mb-3 placeholder:text-sm rounded-md px-2 border-light-gray py-1"
          type="text"
          placeholder="e.g. +1 234 567"
        />
      </form>
    </div>
  );
}
