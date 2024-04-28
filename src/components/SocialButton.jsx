/* eslint-disable react/prop-types */
import React from "react";

function SocialButton({ icon, url }) {
  return (
    <>
      <a href={url} target="_blank">
        <button
          className="border-black rounded-circle m-1"
          style={{ width: "70px", height: "70px" }}
          type="button"
        >
          <i className={icon}></i>
        </button>
      </a>
    </>
  );
}

export default SocialButton;
