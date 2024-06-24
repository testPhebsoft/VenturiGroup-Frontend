"use server";
import { fetchDataFromApi } from "@/lib/fetchDataFromApi";
import { cache } from "react";
import { getCode, getCodeServer, getLangCode } from "@/lib/serverUtils/getCode";
import endata from "../Mocks/en.json";
import dedata from "../Mocks/de.json";
import nldata from "../Mocks/nl.json";
import engbdata from "../Mocks/en-gb.json";
const serverUrl = process.env.SERVER_URL || "";
const revalidate = 800;
export async function getCategories() {
  let config = {
    url: `${serverUrl}/categories`,
    next: { revalidate: revalidate, tags: ["all", "categories"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getCategories", e);
  }
}

export const getPostData = async function ({ slug }) {
  let config = {
    url: `${serverUrl}/posts/${slug}`,
    next: {
      revalidate: revalidate,
      tags: ["all", `/posts/${slug}`],
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getPostData", e);
  }
};

export const getCategoriesBlogAll = async function (
  { per_page, page } = {
    per_page: 8,
    page: 1,
  }
) {
  // console.log(`posts?page=${page}&per_page=${per_page}`);
  let config = {
    url: `${serverUrl}/posts?page=${page}&per_page=${per_page}`,
    next: {
      revalidate: revalidate,
      tags: ["all", `posts?page=${page}&per_page=${per_page}`],
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // console.log(config.url);
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getCategoriesBlogAll", e);
  }
};

export const getCategoriesBlog = async function ({
  slug,
  per_page = 8,
  page = 1,
}) {
  let config = {
    url: `${serverUrl}/categories/${slug}/posts?page=${page}&per_page=${per_page}`,
    next: {
      revalidate: revalidate,
      tags: [
        "all",
        `/categories/${slug}/posts?page=${page}&per_page=${per_page}`,
      ],
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getCategoriesBlog", e);
  }
};

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

export async function getPageData() {
  let langCode = await getLangCode();
  console.log(langCode);
  if (langCode == "en") {
    return endata;
  }
  if (langCode == "de") {
    return dedata;
  }
  if (langCode == "nl") {
    return nldata;
  }
  if (langCode == "en-gb") {
    return engbdata;
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
export async function getTabsLocation() {
  const code = await getCodeServer();
  let config = {
    url: `${serverUrl}/tabs?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", `/tabs?location=${code}`] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTabsLocation", e);
  }
}

export async function getJobs() {
  const code = await getCodeServer();
  console.log(code);
  let config = {
    url: `${serverUrl}/jobs?location=${code}`,
    next: { revalidate: revalidate, tags: ["all", `jobs?location=${code}`] },
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

export async function getSocials() {
  let config = {
    url: `${serverUrl}/settings`,
    next: { revalidate: revalidate, tags: ["all", `settings`] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getSocials", e);
  }
}
export async function getJobsInternal() {
  let code = await getCodeServer();
  let config = {
    url: `${serverUrl}/internal-jobs?location=${code}`,
    next: {
      revalidate: revalidate,
      tags: ["all", "internal-jobs?location=${code}"],
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getJobsInternal", e);
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

export async function getLocationsByCode() {
  let code = await getCodeServer();
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
  console.log("Locations called");
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
