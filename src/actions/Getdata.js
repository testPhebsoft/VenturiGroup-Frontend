"use server";
import { fetchDataFromApi } from "@/lib/fetchDataFromApi";
import { cache } from "react";
import { getCode, getCodeServer } from "@/lib/serverUtils/getCode";

const serverUrl = process.env.SERVER_URL || "";
const revalidate = 80;
export async function getCategories() {
  return [
    { slug: "insights", name: "All" },
    { name: "Blog Posts", slug: "blog-posts" },
    { slug: "data", name: "Data" },
    { slug: "podcasts", name: "Podcasts" },
  ];
}

export const getCategoriesBlog = cache(async function ({ slug }) {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("completed");
      resolve();
    }, 3000)
  );
  let data = [
    {
      blogLink: "/insights/data/data",
      category: {
        slug: "data",
        name: "Data",
      },
      imagesrc: "/data.jpg",
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
      title: "5 Uses for Data in Your Business",
      btntext: "read",
      btnicon: (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4258_1309)">
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
            <clipPath id="clip0_4258_1309">
              <rect width="12" height="13" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      blogLink: "/insights/podcasts/podcast",
      category: {
        slug: "podcasts",
        name: "Podcasts",
      },
      imagesrc: "/podcast.jpg",
      tag: "podcast",
      icon: (
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
      title: "The Daemon Way: Henry Ayres - Head of Engineering",
      btntext: "listen",
      btnicon: (
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
    },
    {
      blogLink: "/insights/data/data",
      category: {
        slug: "data",
        name: "Data",
      },
      imagesrc: "/data.jpg",
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
      title: "5 Uses for Data in Your Business",
      btntext: "read",
      btnicon: (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4258_1309)">
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
            <clipPath id="clip0_4258_1309">
              <rect width="12" height="13" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      blogLink: "/insights/blog-posts/blog",
      category: {
        name: "Blog Posts",
        slug: "blog-posts",
      },
      imagesrc: "/blog.jpg",
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
      title: "15 Inspriational Emerging Technology & Business Podcasts",
      btntext: "read",
      btnicon: (
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
    },
    {
      blogLink: "/insights/podcasts/podcast",
      category: {
        slug: "podcasts",
        name: "Podcasts",
      },
      imagesrc: "/podcast.jpg",
      tag: "podcast",
      icon: (
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
      title: "The Daemon Way: Henry Ayres - Head of Engineering",
      btntext: "listen",
      btnicon: (
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
    },

    {
      blogLink: "/insights/blog-posts/blog",
      category: {
        name: "Blog Posts",
        slug: "blog-posts",
      },
      imagesrc: "/blog.jpg",
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
      title: "15 Inspriational Emerging Technology & Business Podcasts",
      btntext: "read",
      btnicon: (
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
    },
  ];
  if (slug === "random3") return data.slice(0, 3);
  if (slug !== "insights")
    return data.filter((item) => item.category.slug == slug);
  return data;
});

export async function Name() {
  let config = {
    url: `${serverUrl}/locations/${code} `,
    next: { revalidate: revalidate, tags: ["all", "locations"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at Name", e);
  }
}

export async function getTeamMembersGlobal() {
  let config = {
    url: `${serverUrl}/team-members`,
    next: { revalidate: revalidate, tags: ["all", "team-members"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTeamMembersByLocations", e);
  }
}
export async function getTeamMembersByLocations() {
  const code = await getCodeServer();
  let config = {
    url: `${serverUrl}/team-members?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", "team-members"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTeamMembersByLocations", e);
  }
}
export async function getTabs() {
  let config = {
    url: `${serverUrl}/tabs`,
    next: { revalidate: revalidate, tags: ["all", "tabs"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTabs", e);
  }
}

export async function getJobs() {
  const code = await getCodeServer();
  console.log(code);
  let config = {
    url: `${serverUrl}/jobs?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", "jobs"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getJobs", e);
  }
}

export async function getTestimonials() {
  const code = await getCodeServer();
  let config = {
    url: `${serverUrl}/testimonials?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", "testimonials"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTestimonials", e);
  }
}
export async function getPartners() {
  const code = await getCodeServer();
  console.log(code);
  let config = {
    url: `${serverUrl}/partners?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", "partners"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getPartners", e);
  }
}

export async function getLocationsByCode({ code } = { code: "GB" }) {
  let config = {
    url: `${serverUrl}/locations/${code}`,
    next: { revalidate: revalidate, tags: ["all", "locations"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getLocationsByCode", e);
  }
}

export async function getLocations() {
  let config = {
    url: `${serverUrl}/locations`,
    next: { revalidate: revalidate, tags: ["all", "locations"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getLocations", e);
  }
}
