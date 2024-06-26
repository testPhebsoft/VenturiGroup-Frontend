"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function InsightsNavs({ data = {}, categories }) {
  const pathName = usePathname();
  if (pathName.split("/").length == 2 || pathName.split("/").length == 3)
    return (
      <>
        <div className=" h-[400px] flex justify-center items-end  ">
          {data && (
            <h1
              dangerouslySetInnerHTML={{
                __html:
                  data ?? '   Our <span class="text-primary">insights</span>',
              }}
              className="text-[clamp(64px,15vw,121px)] text-center font-[lust-text] w-fit mx-auto"
            ></h1>
          )}
        </div>
        <div
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="w-full px-5  sm:px-0  snap-x overflow-x-scroll whitespace-nowrap snap-mandatory "
        >
          <div className="flex gap-5 w-fit mx-auto justify-center ">
            {categories.map(({ name, slug }) => {
              return (
                <ShowCategories
                  key={slug}
                  slug={slug}
                  isActive={
                    (pathName.includes(`/insights/${slug}`) &&
                      name !== "All") ||
                    (pathName.split("/").length == 2 &&
                      pathName.includes(`/insights`) &&
                      name == "All")
                  }
                  name={name}
                />
              );
            })}
          </div>
        </div>
      </>
    );
}
const ShowCategories = ({ name = "All", isActive, slug }) => {
  return (
    <Link
      className="snap-center"
      href={slug == "insights" ? "/insights" : `/insights/${slug}`}
    >
      <h3
        data-isActive={isActive}
        className="text-[clamp(12px,1.1vw,16px)] leading-[clamp(12px,1.1vw,16px)] pt-3 py-2 px-6 rounded-full capitalize  text-center bg-input/10  data-[isActive=true]:bg-primary"
      >
        {name}
      </h3>
    </Link>
  );
};
