import { getFooterData, getHeaderData } from "@/actions/Getdata";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Layout({ children }) {
  let headerData;
  let footerData;

  try {
    headerData = await getHeaderData();
    footerData = await getFooterData();
    console.log(headerData);
  } catch (error) {}
  return (
    <>
      <Header data={headerData ?? {}} />
      {children}
      <Footer staticData={footerData ?? {}} />
    </>
  );
}
