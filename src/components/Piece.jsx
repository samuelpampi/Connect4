import "./components.css"


export function Piece({value, isNew}){

    const className = `piece ${value === null ? '' : value === 'red' ? 'selected-red' : 'selected-yellow'}${isNew ? ' drop-animation' : ''}`;

    return(
        <div className={className}/>
    );
}