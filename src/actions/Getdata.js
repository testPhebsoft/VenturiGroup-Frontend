"use server";
import { fetchDataFromApi } from "@/lib/fetchDataFromApi";
import { cache } from "react";
import { getCode, getCodeServer, getLangCode } from "@/lib/serverUtils/getCode";
import endata from "../Mocks/home/en.json";
import dedata from "../Mocks/home/de.json";
import nldata from "../Mocks/home/nl.json";
import engbdata from "../Mocks/home/en-gb.json";

import enAboutData from "../Mocks/about/en.json";
import deAboutData from "../Mocks/about/de.json";
import nlAboutData from "../Mocks/about/nl.json";
import engbAboutData from "../Mocks/about/en-gb.json";

import enJoinusData from "../Mocks/joinus/en.json";
import deJoinusData from "../Mocks/joinus/de.json";
import nlJoinusData from "../Mocks/joinus/nl.json";
import engbJoinusData from "../Mocks/joinus/en-gb.json";

import enInsightsData from "../Mocks/insights/en.json";
import deInsightsData from "../Mocks/insights/de.json";
import nlInsightsData from "../Mocks/insights/nl.json";
import engbInsightsData from "../Mocks/insights/en-gb.json";

import enIamcandidateData from "../Mocks/iamcandidate/en.json";
import deIamcandidateData from "../Mocks/iamcandidate/de.json";
import nlIamcandidateData from "../Mocks/iamcandidate/nl.json";
import engbIamcandidateData from "../Mocks/iamcandidate/en-gb.json";

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

export async function getPageData({ pageName } = { pageName: "home" }) {
  let langCode = await getLangCode();
  switch (langCode) {
    case "en": {
      switch (pageName) {
        case "home": {
          return endata;
        }
        case "about": {
          return enAboutData;
        }
        case "joinus": {
          return enJoinusData;
        }
        case "insights": {
          return enInsightsData;
        }
        case "iamcandidate": {
          return enIamcandidateData;
        }
      }
    }
    case "de": {
      switch (pageName) {
        case "home": {
          return dedata;
        }
        case "about": {
          return deAboutData;
        }
        case "joinus": {
          return deJoinusData;
        }
        case "insights": {
          return deInsightsData;
        }
        case "iamcandidate": {
          return deIamcandidateData;
        }
      }
    }
    case "nl": {
      switch (pageName) {
        case "home": {
          return nldata;
        }
        case "about": {
          return nlAboutData;
        }
        case "joinus": {
          return nlJoinusData;
        }
        case "insights": {
          return nlInsightsData;
        }
        case "iamcandidate": {
          return nlIamcandidateData;
        }
      }
    }
    case "en-gb": {
      switch (pageName) {
        case "home": {
          return engbdata;
        }
        case "about": {
          return engbAboutData;
        }
        case "joinus": {
          return engbJoinusData;
        }
        case "insights": {
          return engbInsightsData;
        }
        case "iamcandidate": {
          return engbIamcandidateData;
        }
      }
    }
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
