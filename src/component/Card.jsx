import React from "react";

export const Card = ({ object }) => {
  return (
    <div className="w-[30%] border     ">
      <div className="relative">
        <img src={object.image.url} alt="gotu" />
        <div></div>
      </div>

      <div className="text-yellow-300 font-light">
        <h2>{object.title}</h2>
      </div>

      <div className="text-white p-2">
        <p>{object.description}</p>
      </div>
    </div>
  );
};
