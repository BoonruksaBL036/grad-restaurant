import React from 'react'
import Card from './Card';
import db from '../db.json'

const Restaurants = () => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {db.restaurants.map((item)=>(
            <Card title={item.title} type={item.type} image={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants