export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/5/59/AWizardOfEarthsea%281stEd%29.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81KYCaPYhRS._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://target.scene7.com/is/image/Target/GUEST_13e367d5-3bc3-4dbf-82a5-2489f2f8f8c4?wid=488&hei=488&fmt=pjpeg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Wizard of Earthsea" />
         <img src={book2} alt="The Witcher" />
         <img src={book3} alt="Harry Potter and the Prisoner of Azkaban" />
      </div>      
   );
}