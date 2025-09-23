import { Column } from "./Column";
import "./components.css"

export function Table( {board, updateBoard, lastMove} ){
    return(
        <div className="table">
            {
                board.map((_, index) => ( //Pintamos las columnas
                    <Column 
                        key={index} 
                        colIndex={index} 
                        updateBoard={updateBoard} 
                        rows={board[index]} 
                        lastMove={lastMove}
                    /> 
                ))
            }
        </div>
    );
}