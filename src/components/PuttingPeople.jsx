import MaxWidthWrapper from "./MaxWidthWraper";

export default function PuttingPeople() {
  return (
    <div>
      <MaxWidthWrapper className={"flex max-md:flex-col justify-between py-10"}>
        <div className="flex  relative  max-md:mt-[60px] justify-betweem  w-full">
          <div className="absolute top-[15%] max-[1586px]:top-[-70px]  max-[1586px]:left-0 left-[calc(-8vw-40px)]">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1513 28C13.4391 28 12 25.5646 12 23.0185C12 19.5867 14.048 15.9889 18.1439 13L19.1956 14.2731C15.5424 17.2066 13.9926 20.417 16.0959 21.4686C17.3137 22.0221 19.3063 22.5756 19.3063 25.0664C19.3063 26.7269 18.0332 28 16.1513 28ZM26.0037 28C23.2915 28 21.8524 25.5646 21.8524 23.0185C21.8524 19.5867 23.9004 15.9889 27.9963 13L29.048 14.2731C25.3948 17.2066 23.845 20.417 25.9483 21.4686C27.1661 22.0221 29.1587 22.5756 29.1587 25.0664C29.1587 26.7269 27.8856 28 26.0037 28Z"
                fill="#9E76E9"
              />
              <circle
                cx="21"
                cy="21"
                r="21"
                fill="#9E76E9"
                fill-opacity="0.1"
              />
            </svg>
          </div>
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
            We value every candidate's individuality. We will never treat you as
            just another number; that's not how we would want to be treated. To
            gain your trust and respect, we must operate with integrity and
            honesty.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
