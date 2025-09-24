import "./components.css"
import { Table } from "./Table";
import { Player } from "./Player";
import { TurnInfo } from "./TurnInfo";
import { Button } from "./Button";
import { Winner } from "./Winner";
import { useUpdateBoard } from "../services/useUpdateBoard";
import { TURNS } from "../lib/turns";

export function Game(){

    const { board, turn, lastMove, winner, play, resetGame} = useUpdateBoard();

    return(
        <div className="game-container">
            <Button resetGame={resetGame}/>
            <section className="game">
                <Player color={"red"} selected={turn == TURNS.RED}/>
                <Table board={board} updateBoard={play} lastMove={lastMove}/>
                <Player color={"yellow"} selected={turn == TURNS.YELLOW}/>
            </section>
            <TurnInfo turn={turn}/>
            <Winner winner={winner} resetGame={resetGame}/>
        </div>
    );
}