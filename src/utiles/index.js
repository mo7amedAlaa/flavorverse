export const fetchRecipes = async (filter) => {
  const { query, limit } = filter;
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${process.evn.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=052d5890&app_key=
  8eb35f863b7fedd8e156f27b4e98c22c&from=0&to=${limit}`;

  const response = await fetch(url);
  const data = await response.json();
  return data?.hits;
};
export const fetchRecipe = async (id) => {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=052d5890&app_key=8eb35f863b7fedd8e156f27b4e98c22c `;

  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};
export default fetchRecipes;
