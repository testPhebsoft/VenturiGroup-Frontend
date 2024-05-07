import { getCategories, getCategoriesBlog } from "@/actions/Getdata";
import { notFound } from "next/navigation";
import { RenderBlogs } from "@/components/RenderBlogs";

export default async function Page({ params }) {
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
