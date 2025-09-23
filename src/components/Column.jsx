import "./components.css"
import { Hole } from "./Hole";


export function Column({ updateBoard, rows, colIndex, lastMove }){    

    const handleClick = () =>{ 
        updateBoard(colIndex);
    }


    return(
        <div className="table-column" onClick={handleClick}>
            {
                rows.map((_, index) => ( //Pintamos las filas de la columna
                    <Hole 
                        key={index} 
                        colIndex={colIndex} 
                        rowIndex={index} 
                        value={rows[index]}
                        isNew={lastMove && lastMove.col === colIndex && lastMove.row === index}
                    />
                ))
            }
        </div>
    );
}