import "./components.css"


export function Hole({value, isNew}){

    console.log(isNew);
    const className = `hole ${value === null ? '' : value === 'red' ? 'selected-red' : 'selected-yellow'}${isNew ? ' drop-animation' : ''}`;

    return(
        <div className={className}/>
    );
}