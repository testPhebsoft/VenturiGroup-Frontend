"use server";
import { fetchDataFromApi } from "@/lib/fetchDataFromApi";
import { cache } from "react";
import {
  getCode,
  getCodeServer,
  getLangCode,
  getLangCodeServer,
} from "@/lib/serverUtils/getCode";
import enApiJobsdata from "../Mocks/api/Jobs/en.json";
import deApiJobsdata from "../Mocks/api/Jobs/de.json";
import nlApiJobsdata from "../Mocks/api/Jobs/nl.json";
import enApiJobsgbdata from "../Mocks/api/Jobs/en-gb.json";

import endata from "../Mocks/home/en.json";
import dedata from "../Mocks/home/de.json";
import nldata from "../Mocks/home/nl.json";
import engbdata from "../Mocks/home/en-gb.json";

import enAboutData from "../Mocks/about/en.json";
import deAboutData from "../Mocks/about/de.json";
import nlAboutData from "../Mocks/about/nl.json";
import engbAboutData from "../Mocks/about/en-gb.json";

import enHeaderData from "../Mocks/header/en.json";
import deHeaderData from "../Mocks/header/de.json";
import nlHeaderData from "../Mocks/header/nl.json";
import engbHeaderData from "../Mocks/header/en-gb.json";

import enFooterData from "../Mocks/footer/en.json";
import deFooterData from "../Mocks/footer/de.json";
import nlFooterData from "../Mocks/footer/nl.json";
import engbFooterData from "../Mocks/footer/en-gb.json";

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

export async function getHeaderData() {
  const langCode = await getLangCodeServer();
  switch (langCode) {
    case "en":
      return enHeaderData;
    case "de":
      return deHeaderData;
    case "nl":
      return nlHeaderData;
    case "en-gb":
      return engbHeaderData;
    default:
      return enHeaderData;
  }
}
export async function getFooterData() {
  const langCode = await getLangCodeServer();
  switch (langCode) {
    case "en":
      return enFooterData;
    case "de":
      return deFooterData;
    case "nl":
      return nlFooterData;
    case "en-gb":
      return engbFooterData;
    default:
      return enFooterData;
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
  let langCode = await getLangCodeServer();
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
  const lang = await getLangCodeServer();
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
    if (lang == "en-gb") {
      return response;
    }
    if (lang == "en") {
      let temp = {};

      temp.data = response.data.map((i) => {
        let i2 = {
          ...i,
          ...i.translations.filter((i) => i.language == "US")[0],
        };
        i2.location.name = i2.location.translations.US.name;
        i2.location.slug = i2.location.translations.US.slug;
        return i2;
      });

      return temp;
    }
    if (lang == "nl") {
      let temp = {};

      temp.data = response.data.map((i) => {
        let i2 = {
          ...i,
          ...i.translations.filter((i) => i.language == "NL")[0],
        };
        i2.location.name = i2.location.translations.NL.name;
        i2.location.slug = i2.location.translations.NL.slug;
        return i2;
      });

      return temp;
    }
    if (lang == "de") {
      let temp = {};

      temp.data = response.data.map((i) => {
        const { translations, location, ...i1 } = i;

        const DE = translations.filter((t) => t.language === "DE")[0];

        Object.keys(DE).map((k) => {
          if (deApiJobsdata[k]) {
            t[k] = deApiJobsdata[k][t[k]];
          }
        });
        const { name, slug } = location.translations.DE;

        return { ...i1, ...DE, location: { ...location, name, slug } };
      });

      return temp;
    }
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
