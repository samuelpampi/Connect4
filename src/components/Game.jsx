import "./components.css"
import { Table } from "./Table";
import { Player } from "./Player";
import { TurnInfo } from "./TurnInfo";
import { useEffect, useState } from "react";
import { TURNS } from "../lib/turns";


export function Game(){

    const [turn, setTurn] = useState(TURNS.RED); 
    const [board, setBoard] = useState(Array(42).fill(null));

    function updateBoard(index){
        if(board[index]) return; //Si la posición ya está ocupada, no hacer nada

        //Actualizamos el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //Cambiamos el turno
        const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
        setTurn(newTurn);
    }

    useEffect(() => {
        console.log(board);
        console.log(`It's ${turn} player's turn`);
    }, [turn, board]);

    return(
        <div className="game-container">
            <section className="game">
                <Player color={"red"} selected={turn == TURNS.RED}/>
                <Table board={board} updateBoard={updateBoard}/>
                <Player color={"yellow"} selected={turn == TURNS.YELLOW}/>
            </section>
            <TurnInfo turn={turn}/>
        </div>
    );
}