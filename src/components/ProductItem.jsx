import React from "react";

function ProductItem(props) {
  //   console.log(props.data);
  const data = props.data;
  return (
    <>
      <div className="card" style={{ width: "22rem", margin: "30px" }}>
        <img
          src={data.image}
          className="card-img-top"
          alt="..."
          style={{ padding: "15px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {data.price}</li>
          <li className="list-group-item">Rating: {data.rating.rate} </li>
        </ul>
        <div className="d-flex justify-content-around p-3  ">
          <a href="#" className="btn btn-primary w-50 m-2">
            Add to cart
          </a>
          <a href="#" className="btn btn-secondary w-50 m-2">
            Buy
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
