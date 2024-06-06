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
            imagesrc={post?.image?.url}
            tag={post.category.name}
            icon={post.category.icon.url && post.category.icon.url}
            title={post.title}
            btntext={post.category.slug !== "podcasts" ? "Read" : "listen"}
            btnicon={
              post.category.slug !== "podcasts" ? (
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
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.30693 2.77666C3.32257 2.64415 3.36893 2.51713 3.44233 2.4057C3.51572 2.29428 3.61413 2.20153 3.7297 2.13485C3.84527 2.06817 3.97481 2.0294 4.10801 2.02163C4.24121 2.01385 4.37439 2.03729 4.49693 2.09007C5.11643 2.35491 6.50476 2.98432 8.26643 4.00107C10.0287 5.01841 11.2683 5.90682 11.8067 6.30991C12.2663 6.65466 12.2675 7.33832 11.8073 7.68424C11.2741 8.08499 10.0497 8.96174 8.26643 9.99191C6.48143 11.0221 5.10943 11.6439 4.49576 11.9052C3.96726 12.131 3.37576 11.7886 3.30693 11.2187C3.22643 10.5525 3.07593 9.03991 3.07593 6.99707C3.07593 4.95541 3.22584 3.44341 3.30693 2.77666Z"
                    fill="white"
                  />
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
                <PaginationItem key={label} className="cursor-pointer">
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
