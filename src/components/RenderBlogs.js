import MaxWidthWrapper from "@/components/MaxWidthWraper";
import { RenderBlogCard } from "@/components/RenderBlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
export function RenderBlogs({ blogs, CategoryBlogs, currentCategoryPath }) {
  return (
    <div className="w-full mt-10">
      <MaxWidthWrapper className=" grid gap-x-3 gap-y-20 grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((post, index) => (
          <RenderBlogCard
            key={index}
            imagesrc={post.image.url}
            tag={post.category.name}
            icon={post.category.icon.url}
            title={post.title}
            btntext={post.category.slug !== "podcasts" && "Read"}
            btnicon={
              post.category.slug !== "podcasts" && (
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2013_2077)">
                    <path
                      d="M9.09474 8.36786L5.28174 12.2667L5.99422 12.9952L9.80722 9.09637L9.09474 8.36786Z"
                      fill="white"
                    />
                    <path
                      d="M5.99494 0L5.28101 0.729988L10.4152 5.97969H0V7.01513H11.6405L12 6.13501L5.99494 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2013_2077">
                      <rect width="12" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )
            }
            blogLink={`/insights/${post.category.slug}/${post.slug}`}
          />
        ))}
      </MaxWidthWrapper>

      <Pagination className={"my-5 "}>
        <PaginationContent>
          {CategoryBlogs.links.map(({ url, label, active }, index) => (
            <>
              {index === 0 && (
                <PaginationItem key={label} className="cursor-pointer">
                  <Link
                    href={`${currentCategoryPath}?page=${
                      Number(CategoryBlogs.current_page - 1) > 1
                        ? Number(CategoryBlogs.current_page - 1)
                        : 1
                    }`}
                  >
                    {" "}
                    <PaginationPrevious />
                  </Link>
                </PaginationItem>
              )}
              {index > 0 && index < CategoryBlogs.links.length - 1 && (
                <PaginationItem className="cursor-pointer">
                  <Link href={`${currentCategoryPath}?page=${Number(label)}`}>
                    {" "}
                    <PaginationLink isActive={active}>{label}</PaginationLink>
                  </Link>
                </PaginationItem>
              )}

              {index == CategoryBlogs.links.length - 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {index == CategoryBlogs.links.length - 1 && (
                <PaginationItem
                  className={` ${
                    Number(CategoryBlogs.current_page) ===
                    Number(CategoryBlogs.last_page)
                      ? "disabled"
                      : "cursor-pointer"
                  } `}
                >
                  <Link
                    href={`${currentCategoryPath}?page=${
                      Number(CategoryBlogs.current_page + 1) <
                      Number(CategoryBlogs.last_page)
                        ? Number(CategoryBlogs.current_page + 1)
                        : Number(CategoryBlogs.last_page)
                    }`}
                  >
                    <PaginationNext
                      className={` ${
                        Number(CategoryBlogs.current_page) ===
                        Number(CategoryBlogs.last_page)
                          ? "disabled  "
                          : ""
                      } `}
                    />{" "}
                  </Link>
                </PaginationItem>
              )}
            </>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
