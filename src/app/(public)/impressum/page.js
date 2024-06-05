import MaxWidthWrapper from "@/components/MaxWidthWraper";

export default function Page() {
  return (
    <MaxWidthWrapper className={"mt-[150px]"}>
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <p className="text-gray-600">Last Updated: [Date]</p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG:</h2>
        <p className="text-gray-800">
          Max Mustermann
          <br />
          Musterstraße 123
          <br />
          12345 Musterstadt
          <br />
          Deutschland
          <br />
          Telefon: 01234 567890
          <br />
          E-Mail: max.mustermann@example.com
          <br />
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Vertreten durch:</h2>
        <p className="text-gray-800">Max Mustermann (Geschäftsführer)</p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p className="text-gray-800">
          Max Mustermann
          <br />
          Musterstraße 123
          <br />
          12345 Musterstadt
          <br />
          Deutschland
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">
          Haftungsausschluss (Disclaimer):
        </h2>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor vitae metus faucibus, id faucibus quam aliquam.
          Aenean efficitur dapibus ipsum, non dapibus erat vehicula vel. Integer
          nec varius felis, vitae rhoncus velit. Proin pretium felis sed
          ullamcorper varius. Aenean ac dolor a eros bibendum vulputate.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Haftung für Links:</h2>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor vitae metus faucibus, id faucibus quam aliquam.
          Aenean efficitur dapibus ipsum, non dapibus erat vehicula vel. Integer
          nec varius felis, vitae rhoncus velit. Proin pretium felis sed
          ullamcorper varius. Aenean ac dolor a eros bibendum vulputate.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
