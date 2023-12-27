import React from 'react';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <main className="w-full flex flex-col ">
      <Header
        title={
          <p>
            Taste the world with <br /> flavorVerse!
          </p>
        }
        type={'home'}
      />
      <section id="recipes" className=" md:max-w-[1440px]  mx-auto px-4 ">
        <Recipes />
      </section>
    </main>
  );
};

export default Home;
