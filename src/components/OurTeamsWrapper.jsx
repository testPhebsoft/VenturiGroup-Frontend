import {
  getTeamMembersByLocations,
  getTeamMembersGlobal,
} from "@/actions/Getdata";
import OurTeam from "./OurTeam";

export default async function OurTeamsWrapper({ isGlobal, heading }) {
  let res;

  try {
    if (!isGlobal) {
      res = await getTeamMembersByLocations();
    }
    if (isGlobal) {
      res = await getTeamMembersGlobal();
    }
    res = res.data;
  } catch (error) {}

  return (
    res &&
    res.length !== 0 && <OurTeam heading={heading && heading} data={res} />
  );
}
