import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;
  const id = uri?.split('#')[1];

  const [fill, setFill] = useState(false);
  return (
    <Link to={`${id}`} className="w-full md:w-[220px]">
      <div className="bg-_gradient shadow w-full rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg w-full h-[200px] md:h-[150px]"
        />
      </div>
      <div className="p-3">
        <p className="text-white font-semibold   ">{label.slice(0, 20)}...</p>
      </div>
      <div className="mt-2 flex flex-row ">
        <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
          {cuisineType}
        </span>
        <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
          {mealType}
        </span>
        <span className="px-2 py-1 text-[12px]  capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
          <MdFavorite fontSize={'20px'} fill={fill ? 'red' : 'black'} />
        </span>
      </div>
    </Link>
  );
};

export default RecipeCard;
