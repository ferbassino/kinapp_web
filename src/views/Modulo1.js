import React from "react";

const DataForm = () => {
  return (
    <div>
      <div className="container">
        <h1>modulo 1</h1>
        <h2>A ver si se ve el cambio</h2>
        <div className="row">
          <div className="col">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/IL9ajeW0uUw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></iframe>
          </div>
          <div className="col">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/IL9ajeW0uUw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
