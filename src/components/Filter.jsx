import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Product from "./Product";

const Filter = (props) => {
  // console.log("props", props);
  const category = props.category;
  // const [fdata, setFData] = useState(props.fdata);
  const filterData = props.filterData;
  const [data, setData] = useState([]);

  // console.log(data);
  const sortbyRating = () => {
    const abc = [];
    setData(abc);

    console.log("fdata", abc);
    if (
      category === "electronics" ||
      category === "jewelery" ||
      category === "men's clothing" ||
      category === "women's clothing"
    ) {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => {
          const data1 = res.data.sort((a, b) =>
            a.rating.rate < b.rating.rate
              ? 1
              : a.rating.rate > b.rating.rate
              ? -1
              : 0
          );
          setData(data1);
        });
    } else {
      axios.get(`https://fakestoreapi.com/products/`).then((res) => {
        //console.log(res.data);

        const data1 = res.data.sort((a, b) =>
          a.rating.rate < b.rating.rate
            ? 1
            : a.rating.rate > b.rating.rate
            ? -1
            : 0
        );
        setData(data1);
        //   });
      });
    }
  };

  const sortbyPrice = () => {
    const abc = [];
    setData(abc);

    console.log("fdata", abc);
    if (
      category === "electronics" ||
      category === "jewelery" ||
      category === "men's clothing" ||
      category === "women's clothing"
    ) {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => {
          const data1 = res.data.sort((a, b) =>
            a.price < b.price ? 1 : a.price > b.price ? -1 : 0
          );
          setData(data1);
        });
    } else {
      axios.get(`https://fakestoreapi.com/products/`).then((res) => {
        //console.log(res.data);

        const data1 = res.data.sort((a, b) =>
          a.rating.rate > b.rating.rate
            ? -1
            : a.rating.rate < b.rating.rate
            ? 1
            : 0
        );
        setData(data1);
        //   });
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "rating") {
      props.setFilterdata(false);
      return sortbyRating();
    }
    if (value === "price") {
      props.setFilterdata(false);
      return sortbyPrice();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        color: "black",
        height: "20px",
        paddingBottom: "5px",
        paddingTop: "5px",
      }}
    >
      {/* <p>Filter</p> */}
      <select
        name="sort"
        onChange={handleChange}
        style={{ marginLeft: "12px" }}
      >
        <option value="select" defaultValue>
          Select
        </option>
        <option value="rating">Sort by Rating</option>
        <option value="price">Sort by Price</option>
      </select>
      {!filterData && (
        <div
          data={data}
          style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}
        >
          {data?.map((ele, ind) => {
            return <ProductItem key={ind} data={ele} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
