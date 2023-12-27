import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import fetchRecipes from '../utiles';
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('Vegan');
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipe();
  };
  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      setRecipes(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const showMore = () => {
    setLimit((prev) => prev + 30);
    fetchRecipe();
  };
  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full justify-center ">
      <div className=" w-full   flex items-center justify-center pt-10 pb-5 px-0 md:p-10 ">
        <form onSubmit={handleSearch} className=" w-full  ">
          <Searchbar
            placeholder={'eg. Cake,Vegan,Chicken'}
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-600" />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full justify-between  flex  flex-wrap  gap-10 px-0  lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="flex justify-center items-center py-10 w-full">
            <button
              className="bg-green-800 px-3 py-1 text-sm text-white rounded-full "
              onClick={showMore}
            >
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className="text-white   ">No Resipes Founded</div>
      )}
    </div>
  );
};

export default Recipes;
