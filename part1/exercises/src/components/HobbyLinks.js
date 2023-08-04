export default function HobbyLinks() {
    let hobbyLinks= ["https://www.google.com/travel/flights","https://www.playstation.com/en-us/"];

    return (
        <div>
            <h3> My Hobbies </h3>
            <a href={hobbyLinks[0]}>Google Flights </a>
            
            <a href={hobbyLinks[1]}> PlayStation Store</a>
        </div>
    );
}