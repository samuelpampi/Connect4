import "./components.css"
import { Table } from "./Table";
import { Player } from "./Player";

export function Game(){
    return(
        <section className="game">
            <Player color="red" />
            <Table />
            <Player color="yellow" />
        </section>
    );
}