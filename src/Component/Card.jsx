import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="overflow-hidden h-50">
          <img className="w-full object-cover" src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Delete</button>
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
