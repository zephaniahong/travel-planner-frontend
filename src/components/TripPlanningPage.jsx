import React from "react";
import SideBar from "./SideBar.jsx";
import GoogleSearch from "./GoogleSearch.jsx";
import UserItems from "./UserItems.jsx";

export default function TripPlanningPage() {
  return (
    <React.Fragment>
      <SideBar>
        <GoogleSearch />
      </SideBar>
      <UserItems />
    </React.Fragment>
  );
}
