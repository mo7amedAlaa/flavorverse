import React from 'react';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images/index';
const Header = ({ title, image, type }) => {
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  return (
    <div className="  w-100 h-[100vh]  ">
      <div className="relative bg-slate-600 w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="background Recipe"
          className="w-full  h-full object-cover "
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-10 px-4 flex justify-center flex-col items-center pt-40 2xl:pt-20  ">
        <h1 className="text-white text-xl md:text-5xl font-bold text-center ">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500  bg-[#00000090] px-6  py-4 rounded-full  ">
            Welcome to FlavorVerse,Your passport to culinary adventures!{' '}
            <br className=" hidden md:block" />
            Discover a tearsure trove of delectable recipes from around the
            globe
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
