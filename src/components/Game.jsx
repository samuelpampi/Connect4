import "./components.css"
import { Table } from "./Table";
import { Player } from "./Player";
import { TurnInfo } from "./TurnInfo";
import { useEffect, useState } from "react";
import { TURNS } from "../lib/turns";


export function Game(){

    const [turn, setTurn] = useState(TURNS.RED); 
    const [board, setBoard] = useState(Array(7).fill(null).map(() => Array(6).fill(null))); //Array de 42 posiciones (7 columnas x 6 filas)
    const [lastMove, setLastMove] = useState({col: null, row: null}); //Permite saber el ultimo movimiento para una animacion de caida de ficha
    const [winner, setWinner] = useState(null); //null -> no hay ganador, false -> empate, 'red' o 'yellow' -> color del ganador


    function updateBoard(colIndex){
        if(board[colIndex].lastIndexOf(null) === -1 || winner) return; //Si devuelve -1 es que no encuentra ningun null, es decir, la columna está llena -> NO HACEMOS NADA   

        //Actualizamos el tablero
        const newBoard = [...board];
        const column = newBoard[colIndex]; //Recuperamos la columna seleccionada
        const availableRow = column.lastIndexOf(null); //Recuperamos la ultima fila vacia de la columna

        newBoard[colIndex][availableRow] = turn; //Asignamos el color del jugador actual a la posicion disponible
        setBoard(newBoard);
        setLastMove({col: colIndex, row: availableRow}); //Guardamos la ultima jugada

        //Comprobar si hay un ganador despues de colocar la ultima jugada
        const newWinner = checkWinner(newBoard, colIndex, availableRow);
        if(newWinner){
            setWinner(newWinner);
        }

        //Cambiamos el turno
        const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
        setTurn(newTurn);
    }



    //Comprueba en todas las direcciones si hay 4 en raya
    function checkWinner(board, col, row){
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

    useEffect(() => {
        winner ? console.log(`GANADOR: ${winner}!!`): console.log("EMPATE");
    }, [winner])


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

    return(
        <div className="game-container">
            <section className="game">
                <Player color={"red"} selected={turn == TURNS.RED}/>
                <Table board={board} updateBoard={updateBoard} lastMove={lastMove}/>
                <Player color={"yellow"} selected={turn == TURNS.YELLOW}/>
            </section>
            <TurnInfo turn={turn}/>
        </div>
    );
}