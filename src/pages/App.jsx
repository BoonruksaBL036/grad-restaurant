import React,{useState} from "react";
import Navbar from "../Component/Navbar";

const App = () => {
    const [restaurant, setRestaurant] = useState({
      title: "",
      type: "",
      img: ""
    });
    const handlechange = (e) =>{
      const{name, value} = e.target;
      setRestaurant({...restaurant,[name]:value});
    };
    const handleSubmit = async () =>{
      try {
        const response = await fetch("http://localhost:5000/restaurants",{
          method:"POST",
          body: JSON.stringify(restaurant)
        });
        if(response.ok){
          alert("Restaurant added successfully!!");
          setRestaurant({
            title: "",
            type: "",
            img: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="container mx-auto">
      <Navbar />
      <div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Add New Restaurant</legend>

          <label className="label">
            Restaurant Title :
            <input
              type="text"
              name="title"
              value={restaurant.title}
              className="input"
              placeholder="Restaurant Title"
              onChange={handlechange}
            />
          </label>

          <label className="label">
            Restaurant Type
            <input 
              type="text"  
              className="input"
              placeholder="Restaurant Type"
               onChange={handlechange}
            />
          </label>

          <label className="label">
            Restaurant Img :
            <input
              type="text"
               className="input"
              onChange={handlechange}
              placeholder="Restaurant Img"
              name="img"
            />
          </label>
          {restaurant.img && (
            <div className="flex items-center gap-2">
              <img className="h-32 " src={restaurant.img} />
            </div>
          )}

          <button className="btn btn-success" onClick={handleSubmit}>
            Success
          </button>
          <button className="btn btn-error">Error</button>
        </fieldset>
      </div>
    </div>
  );
};

export default App;
