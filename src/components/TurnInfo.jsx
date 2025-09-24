import { getTurnInfo } from "../lib/turns"

export function TurnInfo({turn}) {

    const { turnClass, turnText} = getTurnInfo(turn);

    return(
        <p className={"turn-info " + turnClass} >{turnText}</p>
    );
}