import recipedata from "./recipe.json";

function AuthorInfo() {
 
  const recipeAuthor = recipedata.map((recipe) => {
    return ( 
    <div key={recipe.name}>{recipe.author}</div>
  )
  })

 const recipeAuthorImage = recipedata.map((recipe) => {
 return (
  <div key={recipe.name}>
    <img src={recipe.authorImage} alt={recipe.author} className="authorImage" />
  </div>
)
})

 const recipeWebsite = recipedata.map((recipe) => {
 return <a key = {recipe.website} href= {recipe.website} View Recipe on Website></a>
 })

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
  }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 