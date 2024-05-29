"use server";

import { cookies } from "next/headers";
import { fetchDataFromApi } from "./apiCaller";
import { serverUrl } from "./config";
const revalidate = 4;

export async function Name() {
  let config = {
    url: `${serverUrl}/Name`,
    next: { revalidate: revalidate, tags: ["all"] },
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
export async function getDates(enquiry_id, month) {
  console.log(
    JSON.stringify({
      enquiry_id,
      month,
    })
  );
  let config = {
    url: `${serverUrl}/bookings/dates`,
    next: { revalidate: revalidate, tags: ["all"] },
    method: "POST",

    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      enquiry_id,
      month,
    }),
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getDates", e);
  }
}
export async function getSettings() {
  let config = {
    url: `${serverUrl}/settings`,
    next: { revalidate: revalidate, tags: ["all"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at settings", e);
  }
}
export async function getAnnouncements() {
  let config = {
    url: `${serverUrl}/announcements`,
    next: { revalidate: revalidate, tags: ["all"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at announcements", e);
  }
}
export async function bookingdetail({ id }) {
  let config = {
    url: `${serverUrl}/bookingdetail/${id}`,
    next: { revalidate: revalidate, tags: ["all", "bookingdetail"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at bookingdetail", e);
  }
}
export async function getPageData({ name }) {
  let config = {
    url: `${serverUrl}/pages?name=${name}`,
    next: { revalidate: revalidate, tags: ["all"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getPageData", e);
  }
}

export async function getServices() {
  let config = {
    method: "GET",
    url: `${serverUrl}/services`,
    next: { revalidate: revalidate, tags: ["all", "services"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getServices", e);
  }
}

export async function getTestimonials() {
  let config = {
    url: `${serverUrl}/testimonials`,
    next: { revalidate: revalidate, tags: ["all", "testimonials"] },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getTestimonials", e);
  }
}

export async function getFaqs() {
  let config = {
    url: `${serverUrl}/faqs`,
    next: { revalidate: revalidate, tags: ["all", "faqs"] },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getFaqs", e);
  }
}
export async function getPaymentIntent(enquiry_id, booking_id) {
  ~console.log("enquiry_id", enquiry_id, booking_id);
  let config = {
    url: `${serverUrl}/payments/intent`,
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: 0, tags: ["all"] },
    body: JSON.stringify({
      enquiry_id: enquiry_id,
      booking_id: booking_id,
    }),
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getPaymentIntent", e);
  }
}

export async function submitBooking(values) {
  let config = {
    url: `${serverUrl}/bookings`,
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: { revalidate: 0, tags: ["all"] },
    body: JSON.stringify(values),
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at submitBooking", e);
  }
}

export async function getSchedules(date, enquiry_id) {
  console.log(date, enquiry_id);
  let config = {
    url: `${serverUrl}/bookings/schedules`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      date: date,
      enquiry_id,
    }),
    method: "POST",
  };
  try {
    let response = await fetchDataFromApi(config);

    return response;
  } catch (e) {
    console.log("error at getSchedules", e);
  }
}

export async function submitEnquiry(values) {
  let data = JSON.stringify(values);

  let config = {
    next: { revalidate: 0, tags: ["all"] },
    url: `${serverUrl}/enquiries`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
    redirect: "follow",
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at submitEnquiry", e);
  }
}

export async function getClinics(location) {
  let config = {
    url: `${serverUrl}/clinics?location=${location ? location : ""}`,
    method: "GET",
    redirect: "follow",
    next: { revalidate: revalidate, tags: ["all", "clinics"] },
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getClinics", e);
  }
}
export async function setCookies(cookiesName, value, numberOfDays = 1) {
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(Date.now() - Number(oneDay * numberOfDays));
  cookies().set({
    name: cookiesName,
    value,
    maxAge: Date.now() - Number(oneDay * numberOfDays),
    httpOnly: true,
  });
}
export async function getLocations() {
  let config = {
    url: `${serverUrl}/locations`,
    method: "GET",
    next: { revalidate: revalidate, tags: ["all"] },
    redirect: "follow",
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getLocations", e);
  }
}

export async function getAssesmentQuestions() {
  let config = {
    url: `${serverUrl}/questions`,
    method: "GET",
    next: { revalidate: revalidate, tags: ["all"] },
    redirect: "follow",
  };
  try {
    let response = await fetchDataFromApi(config);
    return response;
  } catch (e) {
    console.log("error at getAssesmentQuestions", e);
  }
  return;
}
