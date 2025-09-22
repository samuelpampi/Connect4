import "./app.css"
import { Game } from "./components/Game";

export function App(){
    return(
        <main>
            <img src="/img/conect4_logo.png" alt="Logo de Connect4" style={{height:"80px"}}/>
            <Game />
            <p className="turn-info turn-yellow" >Yellow Player's turn</p>
        </main>
    );
}