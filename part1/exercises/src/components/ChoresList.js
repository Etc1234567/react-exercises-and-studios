import classes from './ChoresList.module.css';

export default function ChoresList() {
   return (
      <div>
         <h1 className = {classes.choresHeading}> Chores for the Week </h1>
         <ol>
            <li className = {classes.choresText}> Wash the dishes </li>
            <li className = {classes.choresText}> Water the plants </li>
            <li className = {classes.choresText}> Make dinner </li>
         </ol>
      </div>
   );
}