"use client";
export function VideoPlayer({ res, className }) {
  return (
    <video
      className={
        className ||
        "fixed w-[99.19vw] z-[-2]  h-[100vh] object-cover  bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)]"
      }
      loop
      muted
      autoPlay
    >
      <source
        src={
          (res && res.data && res.data.video && res.data.video.original_url) ||
          "https://venturi.gitwork.tech/storage/videos/-e78b-4017-9db2-5f993aaf3743.mp4"
        }
      />
    </video>
  );
}
