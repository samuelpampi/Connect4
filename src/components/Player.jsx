import "./components.css"

export function Player({color, selected}){
    return(
        <div className="player">
            <div className={`player-cirle-${color}`}></div> 
            <p className={`player-name ${selected ? ' selected' : ''}`}>
                {color === "red" ? "Red Player" : "Yellow Player"}
            </p>
        </div>
    );
}