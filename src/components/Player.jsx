import "./components.css"

export function Player({color}){
    return(
        <div className={`player`}>
            <div className={`player-cirle-${color}`}></div> 
            {color === "red" ? "Red Player" : "Yellow Player"}
        </div>
    );
}