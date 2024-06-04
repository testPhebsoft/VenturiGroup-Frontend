import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function RenderBlogCard({
  imagesrc = "/podcast.jpg",
  tag = "podcast",
  icon,
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
          className=" max-md:rounded-[5px] object-cover rounded-[10px]"
        />
      </div>
      <p className=" flex  items-center justify-center gap-4 px-3 py-1 text-primary bg-white rounded-[24px] w-fit  capitalize font-AntarcticanMonoSemiBold text-[clamp(12px,1.1vw,16px)] ">
        {" "}
        {tag}{" "}
        {
          <span className=" relative size-5">
            <Image src={icon} fill />
          </span>
        }{" "}
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
