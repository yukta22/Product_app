import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Filter from "./Filter";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(`https://fakestoreapi.com/products`)
        .then((e) => setData(e.data));
    };
    getData();
  }, []);
  //   console.log(data);
  return (
    <>
      <div
        className="bg-secondary d-flex"
        style={{ paddingTop: "9px", color: "white", paddingLeft: "20px" }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Filter: </p>
        <Filter />
      </div>
      <div
        data={data}
        style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}
      >
        {data?.map((ele, ind) => {
          return <ProductItem key={ind} data={ele} />;
        })}
      </div>
    </>
  );
};

export default Home;
