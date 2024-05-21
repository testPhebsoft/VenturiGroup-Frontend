import { getCategories, getCategoriesBlog } from "@/actions/Getdata";
import { notFound } from "next/navigation";
import { RenderBlogs } from "@/components/RenderBlogs";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Loader, LoaderTwo } from "@/components/Loader";

export default async function Page({ params }) {
  return (
    <Suspense fallback={<LoaderTwo className={" h-[50vh]"} />}>
      <Renderer params={params} />
    </Suspense>
  );
}

async function Renderer({ params }) {
  let category = params.category;
  let categories;
  let blogs = [];
  try {
    categories = await getCategories();
  } catch (e) {}
  let currentCategory = categories.filter((data) => data.slug == category);
  if (currentCategory.length == 0) {
    return notFound();
  }
  currentCategory = currentCategory[0];
  try {
    blogs = await getCategoriesBlog({ slug: category });
  } catch (e) {
    console.log(e);
  }
  if (blogs.length == 0) {
    return (
      <div className=" h-[50vh] flex items-center justify-center ">
        <p className=" font-[text-lust] text-[16px]"> No available data</p>
      </div>
    );
  }
  if (blogs.length !== 0) return <RenderBlogs blogs={blogs} />;
}
