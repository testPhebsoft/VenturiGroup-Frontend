import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function RenderBlogCard({
  imagesrc = "/podcast.jpg",
  tag = "podcast",
  icon = (
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4249_767)">
        <path
          d="M3.35547 4.18683C3.35547 2.56458 4.67081 1.24924 6.29307 1.24924C7.91532 1.24924 9.23066 2.56458 9.23066 4.18683V5.94689C9.23066 7.56914 7.91532 8.88449 6.29307 8.88449C4.67081 8.88449 3.35547 7.56914 3.35547 5.94689V4.18683Z"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
        />
        <path
          opacity="0.5"
          d="M7.1731 4.18684H9.22754"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M7.1731 5.94688H9.22754"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M3.35547 4.18684H4.52988"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M3.35547 5.94688H4.52988"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M10.9908 5.35812V5.9469C10.9908 8.54 8.88621 10.6445 6.29311 10.6445M6.29311 10.6445C3.70001 10.6445 1.59546 8.54 1.59546 5.9469V5.35812M6.29311 10.6445V12.4046"
          stroke="#9E76E9"
          stroke-miterlimit="133.33"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4249_767">
          <rect
            width="10.8951"
            height="12.6154"
            fill="white"
            transform="translate(0.865479 0.519226)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  title = "The Daemon Way: Henry Ayres - Head of Engineering",
  btntext = "listen",
  btnicon = (
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
  ),
  blogLink = "",
}) {
  return (
    <div
      style={{ transitionDuration: "0.5s" }}
      className="hover:scale-105 w-full max-w-[401px] flex flex-col gap-4"
    >
      <div className=" relative w-full   aspect-[1] ">
        <Image
          fill
          src={imagesrc}
          alt={imagesrc}
          className=" max-md:rounded-[5px] rounded-[10px]"
        />
      </div>
      <p className=" flex  items-center justify-center gap-4 px-3 py-1 text-primary bg-white rounded-[24px] w-fit  capitalize font-AntarcticanMonoSemiBold text-[clamp(12px,1.1vw,16px)] ">
        {" "}
        {tag} {icon}{" "}
      </p>
      <h3 className="font-[lust-text] text-[clamp(16px,4vw,24px)]">{title}</h3>
      <div className="flex-1 flex items-end">
        <Link
          href={blogLink}
          className={cn(
            buttonVariants(),
            " uppercase w-fit gap-3 rounded-full h-[30px]"
          )}
        >
          {btntext} {btnicon}
        </Link>
      </div>
    </div>
  );
}
