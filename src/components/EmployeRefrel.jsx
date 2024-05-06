import { Button } from "./ui/button";

export default function EmployeeRefral() {
  return (
    <div className="md:text-center px-10 flex flex-col  relative z-10 gap-10  ">
      <h2 className="font-[lust-text] mt-7 max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] text-input font-light">
        Employee <span className="text-input/50"> referral</span> scheme
      </h2>
      <p className="font-[lust-text]  font-light text-[clamp(18px,2.1vw,24px)] leading-[clamp(24px,5vw,36px)] mx-auto w-full max-w-[1011px]">
        If you&apos;re passionate about connecting great minds and igniting
        success, you belong here. In a thriving, inclusive environment that puts
        people first. 
      </p>
      <Button className="w-fit md:mx-auto">contact us +</Button>
    </div>
  );
}
