import MaxWidthWrapper from "@/components/MaxWidthWraper";

export default function Page() {
  return (
    <MaxWidthWrapper className={"mt-[150px]"}>
      <h1 className="text-2xl font-bold mb-2">Impressum</h1>

      <div className="my-6">
        <div className="text-gray-800">
          Angaben gemäß § 5 TMG <br />
          Venturi Germany GmbH
          <br />
          Graf-Adolf-Platz 15
          <br />
          40213 Düsseldorf
          <div className="my-4  ">
            <span className="font-bold "> Handelsregister:</span> HRB 95440
            <br />
            <span className="font-bold"> Registergericht:</span> Düsseldorf
          </div>
          <span className="font-bold"> Vertreten durch: </span>
          <br />
          Bradley James Lamb <br />
          Konstantin Minchin (Prokurist) <br />
          <br />
          <br />
          <span className=" font-bold">Kontakt</span>
          <br />
          E-Mail:{" "}
          <a
            className="text-blue-400"
            href={`mailto:enquiries@venturi-group.com`}
          >
            enquiries@venturi-group.com
          </a>
          <br />
          <br />
          <span className="font-bold">Umsatzsteuer-ID</span>
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a
          <br />
          Umsatzsteuergesetz:
          <br />
          DE318606138
          <br />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
