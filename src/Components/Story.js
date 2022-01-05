import React from "react";
import "./Story.css";

function Story() {
  return (
    <>
      <div className="story-container" id="story">
      <h1 className="hStory">OUR STORY</h1>
      <p className="story-para">
      Learn more about how we built a technology-driven recycling business that
      is rooting out inefficiencies in the waste value chain in India.
      </p>
      <iframe
        title="myFrame"
        height="596px"
        src="https://www.youtube.com/embed/JtCpf32x3Vs?feature=oembed"
        frameBorder="0"
        allowFullScreen
      >
        #document
      </iframe>
      </div>
    </>
  );
}

export default Story;
