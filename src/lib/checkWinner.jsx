//Comprueba en todas las direcciones si hay 4 en raya
export function checkWinner(board, col, row){
    const colorToCheck = board[col][row];

    if(!colorToCheck) return; //Si no hay color, no hay ganador

    //Comprobamos en todas las direcciones
    const directions = ["horizontal", "vertical", "diagonal1", "diagonal2"]; 
    let numPieces = 0; //Numero de piezas encontradas consecutivas en una direccion

    for (const direction of directions) {
        numPieces = 0;
        switch(direction){
            case "horizontal": 
                numPieces = countInDirection(board, col, row, 1, 0) + countInDirection(board, col, row, -1, 0) - 1; //Restamos 1 porque la posicion inicial se cuenta dos veces
                if(numPieces >= 4) return colorToCheck;
                break;

            case "vertical":
                numPieces = countInDirection(board, col, row, 0, 1) + countInDirection(board, col, row, 0, -1) - 1; //Restamos 1 porque la posicion inicial se cuenta dos veces
                if(numPieces >= 4) return colorToCheck;
                break;

            case "diagonal1": //Diagonal abajo izquierda a arriba derecha
                numPieces = countInDirection(board, col, row, 1, 1) + countInDirection(board, col, row, -1, -1) - 1; //Restamos 1 porque la posicion inicial se cuenta dos veces
                if(numPieces >= 4) return colorToCheck;
                break;
            
            case "diagonal2": //Diagonal de arriba izquierda a abajo derecha
                numPieces = countInDirection(board, col, row, 1, -1) + countInDirection(board, col, row, -1, 1) - 1; //Restamos 1 porque la posicion inicial se cuenta dos veces
                if(numPieces >= 4) return colorToCheck;
                break;
            
            default: break;
        }
    }

    return null;
}

//Contará las fichas que hay (igual a las de la [col][row]) en la dirección indicada por dCol y dRow
//dCol= 1 -> derecha, -1 -> izquierda, 0 -> misma columna
//dRow= 1 -> abajo, -1 -> arriba, 0 -> misma fila
function countInDirection(board, col, row, dCol, dRow){
    const colorToCheck = board[col][row];

    //Iniciamos las variables
    let count = 0;
    let c = col; //Columna que iremos comprobando, iniciamos en la columna de la ultima jugada
    let r = row; //Fila que iremos comprobando, iniciamos en la fila de la ultima jugada

    while(c >= 0 && c < board.length && r >= 0 && r < board[0].length && board[c][r] === colorToCheck){
        //Mientras estemos dentro del tablero y la posicion sea del mismo color, seguimos contando
        count++;
        c += dCol; //Avanzamos en la direccion indicada
        r += dRow; //Avanzamos en la direccion indicada
    }

    //Devolvemos el numero de fichas (consecutivas) contadas en esa direccion
    return count;
}