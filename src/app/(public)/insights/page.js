import { getCategories, getCategoriesBlog } from "@/actions/Getdata";
import { notFound } from "next/navigation";
import { RenderBlogs } from "@/components/RenderBlogs";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Loader } from "@/components/Loader";

export default function Page({}) {
  return (
    <Suspense fallback={<Loader className={" h-[50vh]"} />}>
      <Renderer />
    </Suspense>
  );
}
async function Renderer() {
  let blogs = [];

  try {
    blogs = await getCategoriesBlog({ slug: "insights" });
  } catch (e) {}

  if (blogs.length == 0) {
    return (
      <div className=" h-[50vh] flex items-center justify-center ">
        <p className=" font-[text-lust] text-[16px]"> No available data</p>
      </div>
    );
  }
  if (blogs.length !== 0) return <RenderBlogs blogs={blogs} />;
}