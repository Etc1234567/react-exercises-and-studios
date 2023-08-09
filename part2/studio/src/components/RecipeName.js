import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((data) => (
    <h1 key={data.name}>
    {data.name}</h1>
  ));
  return <h1>{recipeName}</h1>
}

export default RecipeName;

//import return the name of the recipe as a level 1 header