import { Suspense } from "react";
import { headers } from "next/headers";

function normalizeIPv6toIPv4(ipv6) {
  // Check if the address is in the IPv4-mapped IPv6 format
  const ipv4MappedPrefix = "::ffff:";
  if (ipv6.startsWith(ipv4MappedPrefix)) {
    // Extract the IPv4 part
    return ipv6.substring(ipv4MappedPrefix.length);
  } else {
    // Return the original address if it's not in the expected format
    return ipv6;
  }
}

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");
  console.log("forwardedFor", forwardedFor);
  if (forwardedFor) {
    return (
      normalizeIPv6toIPv4(forwardedFor.split(",")[0]) ?? FALLBACK_IP_ADDRESS
    );
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <IP />
    </Suspense>
  );
}
