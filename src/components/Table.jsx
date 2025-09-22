import "./components.css"
import { Hole } from "./Hole";

export function Table(){
    return(
        <div className="table">
            {
                Array(42).fill().map((_, index) => (
                    <Hole key={index} />
                ))
            }
        </div>
    );
}