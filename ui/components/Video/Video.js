import React from "react";

const Video = () => {
  return (
    <div
      id="video"
      className="bg-parallax"
      data-parallax="scroll"
      data-speed="0.2"
      data-natural-width="1920"
      data-natural-height="1080"
      data-image-src="images/content/bg/2.jpg"
    >
      <div className="bg-overlay70 wrap-container120">
        <div className="container text-center">
          <h2 className="margin-bottom40">
            <strong>"What We Do" ?</strong>
          </h2>
          <a
            href="https://www.youtube.com/"
            className="btn-play fancybox-media"
          >
            Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
