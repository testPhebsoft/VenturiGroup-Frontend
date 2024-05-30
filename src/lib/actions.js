"use server";

import { cookies } from "next/headers";
const revalidate = 4;
export async function setCookies(cookiesName, value, numberOfDays = 1) {
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(value);
  cookies().set({
    name: cookiesName,
    value,
    maxAge: Date.now() - Number(oneDay * numberOfDays),
    httpOnly: true,
  });
}

export async function getCooKies(name) {
  return await cookies().get(name);
}

export async function getLocation() {
  let selectedLocationCodeCokkie = await getCooKies("selectedLocationCode");
  let selectedLocationCode = selectedLocationCodeCokkie.value;

  if (!selectedLocationCode) {
    setCookies("selectedLocationCode", "GB");
    return "GB";
  } else {
    return await getCooKies("selectedLocationCode");
  }
}

export async function setLocation(code) {}
