"use server";
import { fetchDataFromApi } from "@/lib/fetchDataFromApi";
import { cache } from "react";
import { getCode, getCodeServer } from "@/lib/serverUtils/getCode";

const serverUrl = process.env.SERVER_URL || "";
const revalidate = 80;
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

export const getCategoriesBlogAll = async function ({
  per_page = 8,
  page = 1,
}) {
  let config = {
    url: `${serverUrl}/posts?page=${page}`,
    next: {
      revalidate: revalidate,
      tags: ["all", `posts?page=${page}`],
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
