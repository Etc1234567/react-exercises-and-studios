import styles from './Description.module.css';

export default function RecipeAuthor() {
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