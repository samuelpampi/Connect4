import "./components.css"
import { Button } from "./Button";

export function Winner( { winner, resetGame }){
    
    return( 
        currentWinner && (
            <section className="modal-overlay">
                <div className="modal-winner">
                    <div className={`player-cirle-${currentWinner}`}></div> 
                    <p className="player-win-text">{winnerText} Wins!!</p>
                    <Button className="resetButton" resetGame={resetGame}></Button>
                </div>
            </section>
        )
        
    )
}