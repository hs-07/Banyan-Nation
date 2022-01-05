import React from "react";
import "./Image.css";

function Image() {
  return (
    <>
      <div className="image-main">
        <img
          src="https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          alt="farming"
          className="main"
        />
      </div>
    </>
  );
}

export default Image;
