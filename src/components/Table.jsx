import "./components.css"
import { Hole } from "./Hole";

export function Table( {board, updateBoard} ){
    return(
        <div className="table">
            {
                board.map((_, index) => (
                    <Hole key={index} index={index} updateBoard={updateBoard} value={board[index]}/>
                ))
            }
        </div>
    );
}