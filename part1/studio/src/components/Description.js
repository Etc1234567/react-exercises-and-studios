import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Hanger Steak</h1>
                    <p>Hanger Steak with jalapenos and fresh limes. </p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

function RecipeAuthor() {
   let authorLink = "https://www.antoniporowski.com/";
   let authorPhoto = "https://www.you.co.uk/wp-content/uploads/2019/09/queer-eye-antoni-recipes-.jpg";
   let authorName = "Antoni Porowski";

   return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Antoni Porowski in the kitchen" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Antoni's website</a> 
       </div>
    </div>
 );
}

export default RecipeDescription; 