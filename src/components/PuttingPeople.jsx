import MaxWidthWrapper from "./MaxWidthWraper";

export default function PuttingPeople() {
  return (
    <div>
      <MaxWidthWrapper className={"flex max-md:flex-col justify-between py-10"}>
        <div className="flex  relative  max-md:mt-[60px] justify-betweem  w-full">
          <h2 className="w-full max-w-[625px] font-[lust-text] mt-7 max-[839px]:text-[clamp(16px,11vw,48px)] max-[839px]:leading-[clamp(24px,11vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] text-input/50 font-light">
            Putting <span className="text-input"> People</span> First
          </h2>
        </div>
        <div className="w-full max-md:mt-10 max-w-[496px]">
          <p>
            Thanks to our years of experience, our excellent reputation and our
            knowledge of the market, you can trust us to offer you genuine
            career advice and ongoing support whenever you may need it.
          </p>
          <p>
            We value every candidate&apos;s individuality. We will never treat
            you as just another number; that&apos;s not how we would want to be
            treated. To gain your trust and respect, we must operate with
            integrity and honesty.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
