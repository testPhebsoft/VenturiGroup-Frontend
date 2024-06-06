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

export default async function Page({ params }) {
  let post = params.post;
  let latestBlogs = await getCategoriesBlogAll({ page: 1, per_page: 3 });
  let postdata = await getPostData({ slug: post });
  postdata = postdata.data;
  latestBlogs = latestBlogs.data;

  let data = {
    tag: "data",
    icon: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1394 11.455H1.54517"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M11.6097 11.455V7.48219C11.6097 7.04429 11.253 6.68762 10.8151 6.68762H9.22596C8.78807 6.68762 8.4314 7.04429 8.4314 7.48219V11.455"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
        <path
          d="M8.4312 11.455V2.44991C8.4312 1.70125 8.4312 1.32692 8.19813 1.09385C7.96505 0.860779 7.59072 0.860779 6.84206 0.860779C6.09341 0.860779 5.71908 0.860779 5.486 1.09385C5.25293 1.32692 5.25293 1.70125 5.25293 2.44991V11.455"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
        <path
          opacity="0.5"
          d="M5.25298 11.455V4.83363C5.25298 4.39573 4.8963 4.03906 4.45841 4.03906H2.86927C2.43138 4.03906 2.07471 4.39573 2.07471 4.83363V11.455"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
      </svg>
    ),
  };
  let blog = {
    tag: "blog",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.34473 8.4703C2.34473 5.58313 2.34473 4.1361 3.24051 3.24032C4.13629 2.34454 5.58331 2.34454 8.47048 2.34454H10.0002C12.8874 2.34454 14.3344 2.34454 15.2302 3.24032C16.126 4.1361 16.1259 5.58313 16.1259 8.4703V11.5297C16.1259 14.4169 16.126 15.8639 15.2302 16.7597C14.3344 17.6555 12.8874 17.6555 10.0002 17.6555H8.47048C5.58331 17.6555 4.13629 17.6555 3.24051 16.7597C2.34473 15.8639 2.34473 14.4169 2.34473 11.5297V8.4703Z"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
        <path
          opacity="0.5"
          d="M4.63916 10C4.63916 8.91819 4.63916 8.37383 4.9768 8.03619C5.31444 7.69855 5.85191 7.69855 6.94062 7.69855H11.5367C12.6185 7.69855 13.1628 7.69855 13.5005 8.03619C13.8381 8.37383 13.8381 8.91129 13.8381 10V13.0594C13.8381 14.1413 13.8381 14.6856 13.5005 15.0233C13.1628 15.3609 12.6254 15.3609 11.5367 15.3609H6.94062C5.8588 15.3609 5.31444 15.3609 4.9768 15.0233C4.63916 14.6856 4.63916 14.1482 4.63916 13.0594V10Z"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
        <path
          opacity="0.5"
          d="M5.40381 5.40393H9.23499"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
      </svg>
    ),
  };

  if (postdata.category.slug !== "podcasts") {
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
            <Button className=" uppercase ">see more +</Button>
          </div>
          <MaxWidthWrapper className=" grid mt-10 gap-x-3 gap-y-20 grid-cols-2 lg:grid-cols-3 ">
            {latestBlogs.map((post, index) => (
              <RenderBlogCard
                key={index}
                imagesrc={post.image.url}
                tag={post.category.name}
                icon={post.category.icon && post.category?.icon?.url}
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
        </MaxWidthWrapper>
      </>
    );
  }
  if (postdata.category.slug == "podcasts")
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
              audioSrc={postdata.file.original_url}
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
