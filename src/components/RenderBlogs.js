import MaxWidthWrapper from "@/components/MaxWidthWraper";
import { RenderBlogCard } from "@/components/RenderBlogCard";

export function RenderBlogs({ blogs }) {
  return (
    <div className="w-full mt-10">
      <MaxWidthWrapper className=" grid gap-x-3 gap-y-20 grid-cols-2 lg:grid-cols-3 ">
        {blogs.map(
          ({ imagesrc, tag, icon, title, btntext, btnicon }, index) => (
            <RenderBlogCard
              key={index}
              imagesrc={imagesrc}
              tag={tag}
              icon={icon}
              title={title}
              btntext={btntext}
              btnicon={btnicon}
            />
          )
        )}
      </MaxWidthWrapper>
    </div>
  );
}
