import React from "react";
import iconUrl from "../assets/Icontime_icon.png";

function Activity() {
  return (
    <div
      className='d-flex align-items-center justify-between'
      style={{ marginTop: "20px" }}
    >
      <img src={iconUrl} width='30px' height='30px'></img>
      <p className='pl-2' style={{ maxWidth: "200px" }}>
        {"Upcoming <Activity>"}
        <br /> {"Thu, 25th May "}
        <br />
        {"12:00 PM - 12:00 PM"}
      </p>
      <button className='btn btn-outline'>View</button>
    </div>
  );
}

export default Activity;
