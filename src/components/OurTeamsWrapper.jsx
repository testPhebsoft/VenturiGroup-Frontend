import {
  getTeamMembersByLocations,
  getTeamMembersGlobal,
} from "@/actions/Getdata";
import OurTeam from "./OurTeam";

export default async function OurTeamsWrapper({ isGlobal, heading }) {
  let res;
  let location = null;
  try {
    if (!isGlobal) {
      res = await getTeamMembersByLocations();
    }
    if (isGlobal) {
      res = await getTeamMembersGlobal();
    }
    res = res.data;
    if (!isGlobal) {
      location = res[0].location;
    }
  } catch (error) {}

  return (
    res &&
    res.length !== 0 && (
      <OurTeam
        heading={
          (heading && !location && heading) ||
          (location && (
            <>
              {" "}
              Meet <br className=" max-sm:hidden" />
              Our
              <br className=" sm:hidden" />
              <span className=" text-input"> {location.name || ""} </span> Team
            </>
          ))
        }
        data={res}
      />
    )
  );
}
