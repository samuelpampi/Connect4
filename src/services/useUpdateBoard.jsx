import { useState, useEffect } from "react";
import { TURNS } from "../lib/turns";
import { checkWinner } from "../lib/checkWinner";

export function useUpdateBoard(){

    const [turn, setTurn] = useState(TURNS.RED); 
    const [board, setBoard] = useState(Array(7).fill(null).map(() => Array(6).fill(null))); //Array de 42 posiciones (7 columnas x 6 filas)
    const [lastMove, setLastMove] = useState({col: null, row: null}); //Permite saber el ultimo movimiento para una animacion de caida de ficha
    const [winner, setWinner] = useState(null); //null -> no hay ganador, false -> empate, 'red' o 'yellow' -> color del ganador

    function play(colIndex){
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

    function resetGame(){
        setBoard(Array(7).fill(null).map(() => Array(6).fill(null)));
        setWinner(null);
        setLastMove({col: null, row: null});
    }

    return {board, turn, lastMove, winner, play, resetGame}

}
