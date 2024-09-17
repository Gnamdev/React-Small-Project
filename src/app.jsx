import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { category, apiUrl } from "./component/Data";
import React, { useEffect, useState } from "react";
import "./app.css";
import { Spinner } from "./component/Spinner";

export function App() {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const [categoryData, setCategoryData] = useState(category[0].title);

  useEffect(async () => {
    const res = await fetch(apiUrl);
    const output = await res.json();
    console.log("data -->", output);

    setSpinner(false);
    setData(output.data);
  }, []);

  console.log("data all -->", data);

  return (
    <div className="border w-[100vw] h-[2200px] box-content  flex bg-gray-800   flex-col">
      <Navbar />

      <Filter
        data={category}
        categoryData={categoryData}
        setCategoryData={setCategoryData}
      />

      {spinner ? (
        <Spinner />
      ) : (
        <Cards course={data} currentCategory={categoryData} />
      )}
    </div>
  );
}
