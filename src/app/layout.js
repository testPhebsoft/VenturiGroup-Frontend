import { Inter } from "next/font/google";
import "./globals.css";
import {
  ArticulateRegular,
  ArticulateRegularOblique,
  ArticulateMedium,
  ArticulateMediumOblique,
  ArticulateThin,
  ArticulateThinOblique,
  ArticulateBold,
  ArticulateBoldOblique,
  ArticulateDemiBold,
  ArticulateDemiBoldOblique,
  ArticulateExtraBold,
  ArticulateExtraBoldOblique,
  ArticulateExtraLight,
  ArticulateExtraLightOblique,
  ArticulateHeavy,
  ArticulateHeavyOblique,
  ArticulateNormal,
  ArticulateNormalOblique,
  ArticulateLight,
  ArticulateLightOblique,
} from "@/fonts/ArticulatCF";
import { cn } from "@/lib/utils";
import {
  AntarcticanMonoBold,
  AntarcticanMonoBoldItalic,
  AntarcticanMonoBook,
  AntarcticanMonoBookItalic,
  AntarcticanMonoMedium,
  AntarcticanMonoMediumItalic,
  AntarcticanMonoSemiBold,
  AntarcticanMonoSemiBoldItalic,
} from "@/fonts/AntarcticanMono";
import InitStoreFunctions from "@/components/IntialiseStore";

export const metadata = {
  title: "Venturi Group",
  description: "Venturi Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-[#1A1B1D] overflow-x-hidden  bg-background",
          ArticulateRegular.className,
          `${ArticulateRegular.variable} ${ArticulateRegularOblique.variable} ${ArticulateMedium.variable} ${ArticulateMediumOblique.variable} ${ArticulateThin.variable} ${ArticulateThinOblique.variable} ${ArticulateBold.variable} ${ArticulateBoldOblique.variable} ${ArticulateDemiBold.variable} ${ArticulateDemiBoldOblique.variable} ${ArticulateExtraBold.variable} ${ArticulateExtraBoldOblique.variable} ${ArticulateExtraLight.variable} ${ArticulateExtraLightOblique.variable} ${ArticulateHeavy.variable} ${ArticulateHeavyOblique.variable} ${ArticulateNormal.variable} ${ArticulateNormalOblique.variable} ${ArticulateLight.variable} ${ArticulateLightOblique.variable} ${AntarcticanMonoBook.variable} ${AntarcticanMonoBookItalic.variable} ${AntarcticanMonoMedium.variable} ${AntarcticanMonoMediumItalic.variable} ${AntarcticanMonoSemiBold.variable} ${AntarcticanMonoSemiBoldItalic.variable} ${AntarcticanMonoBold.variable} ${AntarcticanMonoBoldItalic.variable}`
        )}
      >
        <InitStoreFunctions />
        {children}
      </body>
    </html>
  );
}
