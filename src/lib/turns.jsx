export const TURNS = {
    RED: 'red',
    YELLOW: 'yellow'
}

//Cambia el contenido y estilo del texto que informa de quien es el turno
export function getTurnInfo(turn){
    let turnClass = turn === "red" ? "turn-red" : "turn-yellow";
    let turnText = turn === "red" ? "Red Player's turn" : "Yellow Player's turn";

    return {turnClass, turnText}
}