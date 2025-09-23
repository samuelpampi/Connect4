export function TurnInfo({turn}) {

    let turnClass = "turn-red"
    let turnText = "Red Player's turn"

    if(turn === "yellow"){
        turnClass = "turn-yellow"
        turnText = "Yellow Player's turn"
    }

    return(
        <p className={"turn-info " + turnClass} >{turnText}</p>
    );
}