"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function InsightsNavs({ categories }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex gap-5 flex-wrap justify-center ">
      {categories.map(({ name, slug }) => {
        return (
          <ShowCategories
            key={slug}
            slug={slug}
            isActive={
              pathName == `/insights/${slug}` ||
              (pathName == "/insights" && name == "All")
            }
            name={name}
          />
        );
      })}
    </div>
  );
}
const ShowCategories = ({ name = "All", isActive, slug }) => {
  console.log("isActive", isActive);
  return (
    <Link href={slug == "insights" ? "/insights" : `/insights/${slug}`}>
      <h3
        data-isActive={isActive}
        className="text-[clamp(12px,1.1vw,16px)] leading-[clamp(12px,1.1vw,16px)] pt-3 py-2 px-6 rounded-full capitalize  text-center bg-input/10  data-[isActive=true]:bg-primary"
      >
        {name}
      </h3>
    </Link>
  );
};
