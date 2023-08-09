import data from './../data.json';
import { useState } from 'react';

let games = data.json;

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let projects = games[index];

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return(
        <div>
        <button onClick= {handleClick}>Next</button>
        <h3> Games I Want to Play </h3>
        <ul>
            <li>Title: {projects.title}</li>
            <li>Studio: {projects.studio} </li>
            <li>Length of Game: {projects.length}</li>
            <li>Genres: {projects.genre} </li>
        </ul>
        </div>
    );
}