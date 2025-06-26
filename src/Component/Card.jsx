import React from "react";
import { Link } from "react-router";

const Card = (props) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/"+ id, {
        method: "Delete"
      });
      if (response.ok) {
        alert("Restaurant Delete successfully!!");
        window,location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
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
            <button onClick={() => handleDelete(props.id)} className="btn btn-error">
              Delete
            </button>
            <Link to={`/update/${props.id}`} className="btn btn-warning">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
