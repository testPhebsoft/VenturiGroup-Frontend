import Quote from "./quote";

export default function OurCustomers() {
  return (
    <div className="bg-background py-[50px]">
      <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
        <span className=" text-input/50">Our </span> <br />
        customers
      </h3>
      <Quote className="mt-16" />

      <p className="mt-10 text-[clamp(24px,9vw,36px)] font-[lust-text] font-light w-full max-w-[420px]">
        Venturi <span className="text-primary"> excels</span> in tech
        recruitment, matching top talent to leading companies with{" "}
        <span className="text-primary"> precision</span> and{" "}
        <span className="text-primary"> efficiency</span>.
      </p>
    </div>
  );
}
