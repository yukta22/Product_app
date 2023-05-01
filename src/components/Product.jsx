import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Filter from "./Filter";

function Product(props) {
  const category = props.category;
  const [data, setData] = useState();
  const [filterdata, setFilterdata] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((e) => setData(e.data));
    };
    getData();
  }, [props]);
  return (
    <>
      <div
        className="bg-secondary d-flex"
        style={{ paddingTop: "9px", color: "white", paddingLeft: "20px" }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Filter: </p>
        <Filter
          category={category}
          fData={data}
          filterdata={filterdata}
          setFilterdata={setFilterdata}
        />
      </div>
      {filterdata && (
        <div
          data={data}
          style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}
        >
          {data?.map((ele, ind) => {
            return <ProductItem key={ind} data={ele} />;
          })}
        </div>
      )}
    </>
  );
}

export default Product;
