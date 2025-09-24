import "./components.css"
import { Button } from "./Button";
import { useShowModal } from "../services/useShowModal";

export function Winner( { winner, resetGame }){
    const {showModal} = useShowModal(winner);
    const winnerText = winner === "red" ? "Red" : "Yellow";
    
    return( 
        showModal && (
            <section className="modal-overlay">
                <div className="modal-winner">
                    <div className={`player-cirle-${winner}`}></div> 
                    <p className="player-win-text">{winnerText} Wins!!</p>
                    <Button className="resetButton" resetGame={resetGame}></Button>
                </div>
            </section>
        )
        
    )
}