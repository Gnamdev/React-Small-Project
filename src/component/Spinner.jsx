import React from "react";
import ClockLoader from "react-spinners/ClipLoader";

export const Spinner = () => {
  return (
    <div className="w-50% h-[20%] flex justify-center items-center ">
      <ClockLoader
        color="green"
        loading
        margin={6}
        size={50}
        className="h-28 w-28"
      />
    </div>
  );
};
