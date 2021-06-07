import React from "react";

function Avatar({ imgUrl, name }) {
  return (
    <div>
      <div
        className='d-flex align-items-center avatar'
        style={{ marginTop: "20px" }}
      >
        {" "}
        <img src={imgUrl} width='30px' alt='user-profile' />{" "}
        <p className='pl-2'> {name} </p>
      </div>
    </div>
  );
}

export default Avatar;
