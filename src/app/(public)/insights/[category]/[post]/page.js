import {
  getCategoriesBlog,
  getCategoriesBlogAll,
  getPostData,
} from "@/actions/Getdata";
import MaxWidthWrapper from "@/components/MaxWidthWraper";
import { RenderBlogs } from "@/components/RenderBlogs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import { RenderBlogCard } from "@/components/RenderBlogCard";
import { timeDifference } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  let post = params.post;
  let latestBlogs;
  let postdata;
  try {
    latestBlogs = await getCategoriesBlogAll({ page: 1, per_page: 3 });
    postdata = await getPostData({ slug: post });

    postdata = postdata.data;
    latestBlogs = latestBlogs.data;
  } catch (error) {
    // return notFound();
  }

  if (!postdata) {
    return notFound();
  }

  if (
    postdata.category &&
    postdata.category.slug &&
    postdata.category.slug !== "podcasts"
  ) {
    return (
      <>
        <MaxWidthWrapper className={" Posts mt-40"}>
          <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold  font-AntarcticanMonoSemiBold">
            Posted over {timeDifference(postdata.created_at)} • by{" "}
            {postdata.written_by}
          </p>
          <div className=" flex justify-between w-full">
            <h2 className=" mt-10 w-full max-w-[754px] text-[clamp(24px,3.2vw,36px)] leading-[clamp(28px,4vw,40px)] font-[lust-text]">
              {postdata.title ||
                "  Inspirational Emerging Technology & Business Podcasts"}
            </h2>
            {postdata.category && (
              <p className=" h-fit flex  self-end items-center justify-center gap-4 px-3 py-1 text-primary bg-white rounded-[24px] w-fit  capitalize font-AntarcticanMonoSemiBold text-[clamp(12px,1.1vw,16px)] ">
                {" "}
                {postdata.category.name}
                {
                  <span className=" relative size-5">
                    <Image src={postdata.category.icon.url} fill />
                  </span>
                }
              </p>
            )}
          </div>
          <div className=" mt-10 relative w-full aspect-[2.2]">
            <Image
              fill
              src={postdata.image.url}
              className="object-cover rounded-3xl"
            />
          </div>

          <div className="flex max-md:gap-10 max-md:flex-col justify-between mt-20">
            <div className="flex w-full max-w-[236px] flex-col gap-5">
              <RenderSideDetails text={postdata.category.name} />
              <RenderSideDetails
                heading=" Written by"
                text={postdata.written_by}
              />
              <RenderSideDetails
                heading="Published"
                text={timeDifference(postdata.created_at)}
              />
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: postdata.description }}
                className="w-full max-w-[1008px]"
              ></div>
              <div className="w-full max-w-[1008px]">
                {" "}
                <AudioPlayer
                  audioSrc={postdata.file.original_url}
                  className={"my-5"}
                />{" "}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className={"py-10"}>
          <div className=" border-black border border-b-0 mb-10  border-r-0 border-l-0">
            {" "}
          </div>
          <div className="flex gap-3 items-center justify-between ">
            <h2 className=" max-[839px]:text-[clamp(16px,10vw,36px)] max-[839px]:leading-[clamp(24px,10vw,36px)] text-[clamp(16px,3.2vw,36px)] leading-[clamp(24px,3.3vw,36px)] font-[lust-text]">
              Latest Insights{" "}
            </h2>
            {/* <Button className=" uppercase ">see more +</Button> */}
          </div>
          <MaxWidthWrapper className=" grid mt-10 gap-x-3 gap-y-20 grid-cols-2 lg:grid-cols-3 ">
            {latestBlogs.map((post, index) => (
              <RenderBlogCard
                key={index}
                imagesrc={post?.image?.url}
                tag={post.category.name}
                icon={
                  post.category.icon !== null &&
                  post.category.icon.url &&
                  post.category.icon.url
                }
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
        </MaxWidthWrapper>
      </>
    );
  }

  if (
    postdata.category &&
    postdata.category.slug &&
    postdata.category.slug == "podcasts"
  )
    return (
      <MaxWidthWrapper className={"Posts  mt-40"}>
        <div className=" flex max-md:flex-col w-full gap-5 ">
          <div className=" mt-10 w-full max-w-[376px] relative  aspect-square">
            <Image
              fill
              src={"/podcast.jpg"}
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-1  flex-col   justify-end w-full max-w-[747px]">
            <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold  font-AntarcticanMonoSemiBold">
              Posted over {timeDifference(postdata.created_at)} • by{" "}
              {postdata.written_by}
            </p>
            <div className=" flex justify-between w-full ">
              <h2 className=" mt-10 w-full max-w-[754px] text-[clamp(24px,3.2vw,36px)] leading-[clamp(28px,4vw,40px)] font-[lust-text]">
                {postdata.title || "The Daemon Way: Henry Ayres"}
              </h2>
              {postdata.category && (
                <p className=" h-fit flex  self-end items-center justify-center gap-4 px-3 py-1 text-primary bg-white rounded-[24px] w-fit  capitalize font-AntarcticanMonoSemiBold text-[clamp(12px,1.1vw,16px)] ">
                  {" "}
                  {postdata.category.name}
                  {
                    <span className=" relative size-5">
                      <Image src={postdata.category.icon.url} fill />
                    </span>
                  }
                </p>
              )}
            </div>
            <AudioPlayer
              audioSrc={
                postdata.file &&
                postdata.file.original_url &&
                postdata.file.original_url
              }
              title={postdata.title}
              className={"my-5"}
            />
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: postdata.description }}
          className="w-full max-md:mt-10 mt-20 "
        ></div>
      </MaxWidthWrapper>
    );

  function RenderSideDetails({ heading = "Category", text = "Blog" }) {
    return (
      <div>
        <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold text-primary  font-AntarcticanMonoSemiBold">
          {heading}
        </p>
        <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold font-AntarcticanMonoSemiBold">
          {text}
        </p>
      </div>
    );
  }
}
