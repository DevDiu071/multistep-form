export default function ThankYou() {
  return (
    <div className="flex flex-col items-center text-center mt-[90px] mb-[100px]">
      <img
        src="/assets/images/icon-thank-you.svg"
        alt="thank you icon"
        className="w-[50px] h-[50px]"
      />
      <h2 className="text-2xl font-bold mb-2 mt-4">Thank you!</h2>
      <p className="text-sm text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
