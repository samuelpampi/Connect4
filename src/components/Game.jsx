import "./components.css"
import { Table } from "./Table";
import { Player } from "./Player";
import { TurnInfo } from "./TurnInfo";
import { useEffect, useState } from "react";
import { TURNS } from "../lib/turns";


export function Game(){

    const [turn, setTurn] = useState(TURNS.RED); 
    const [board, setBoard] = useState(Array(7).fill(null).map(() => Array(6).fill(null))); //Array de 42 posiciones (7 columnas x 6 filas)
    const [lastMove, setLastMove] = useState({col: null, row: null});


    function updateBoard(colIndex){
        if(board[colIndex].lastIndexOf(null) === -1) return; //Si devuelve -1 es que no encuentra ningun null, es decir, la columna está llena -> NO HACEMOS NADA   

        //Actualizamos el tablero
        const newBoard = [...board];
        const column = newBoard[colIndex]; //Recuperamos la columna seleccionada
        const availableRow = column.lastIndexOf(null); //Recuperamos la ultima fila vacia de la columna

        newBoard[colIndex][availableRow] = turn; //Asignamos el color del jugador actual a la posicion disponible
        setBoard(newBoard);
        setLastMove({col: colIndex, row: availableRow}); //Guardamos la ultima jugada

        //Cambiamos el turno
        const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
        setTurn(newTurn);
    }

    console.log(lastMove);

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