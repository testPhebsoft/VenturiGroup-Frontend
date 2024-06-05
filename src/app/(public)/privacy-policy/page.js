import MaxWidthWrapper from "@/components/MaxWidthWraper";

export default function Page() {
  return (
    <MaxWidthWrapper className=" mt-[150px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600">Last Updated: [Date]</p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-800">
          Thank you for visiting Tailored Recruitment. Your privacy is important
          to us. This Privacy Policy outlines how we collect, use, and safeguard
          your personal information on our website.
        </p>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-gray-800">
          We may collect personal information, such as your name, email address,
          and phone number, when you interact with our website or fill out
          forms. Additionally, we may gather non-personal information, such as
          browser type, IP address, and referring pages, for analytical
          purposes.
        </p>
      </div>

      {/* Other sections of the privacy policy */}

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Updates to This Policy</h2>
        <p className="text-gray-800">
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be posted on this page with a revised
          &apos;Last Updated&apos; date.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
