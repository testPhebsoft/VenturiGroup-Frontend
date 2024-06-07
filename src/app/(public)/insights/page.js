import {
  getCategories,
  getCategoriesBlog,
  getCategoriesBlogAll,
} from "@/actions/Getdata";
import { notFound } from "next/navigation";
import { RenderBlogs } from "@/components/RenderBlogs";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Loader, LoaderTwo } from "@/components/Loader";
// TODO: add pagination

export default function Page({ searchParams }) {
  const { page } = searchParams;
  return (
    <Suspense fallback={<LoaderTwo className={" h-[50vh]"} />}>
      <Renderer page={page} />
    </Suspense>
  );
}

async function Renderer({ page = 1 }) {
  let blogs = {};

  try {
    blogs = await getCategoriesBlogAll({ page: page, per_page: 6 });
  } catch (e) {
    return (
      <div className=" h-[50vh] flex items-center justify-center ">
        <p className=" font-[text-lust] text-[16px]"> No internet</p>
      </div>
    );
  }

  if (blogs && blogs.data.length == 0) {
    return (
      <div className=" h-[50vh] flex items-center justify-center ">
        <p className=" font-[text-lust] text-[16px]"> No available data</p>
      </div>
    );
  }
  if (blogs && blogs.data.length !== 0)
    return (
      <RenderBlogs
        blogs={blogs.data}
        currentCategoryPath={"/insights"}
        CategoryBlogs={blogs}
      />
    );
}
