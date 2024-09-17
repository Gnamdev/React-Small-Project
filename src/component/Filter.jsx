import React from "react";

function Filter({ data, categoryData, setCategoryData }) {
  function btnHandler(title) {
    console.log("button click -->", title);
    setCategoryData(title);
  }

  return (
    <div className=" ">
      <div
        className="h-15 w-[100%] justify-center
       flex  m-auto mt-2  font-sans  gap-5 text-white  text-xl "
      >
        {data.map((btn) => {
          return (
            <button
              className={`rounded-xl border px-2 py-2 transition-all duration-200 ${
                categoryData === btn.title
                  ? "border-blue-700 shadow-xl bg-gray-950" // Apply hover style when selected
                  : "border bg-gray-800 hover:bg-gray-950 hover:shadow-xl hover:border-blue-700" // Default style with hover
              }`}
              key={btn.id}
              onClick={() => btnHandler(btn.title)}
            >
              {btn.title}
            </button>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Filter;
