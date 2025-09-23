import "./components.css"


export function Hole({ updateBoard, value, index}){
    const className = `hole ${value === null ? '' : value === 'red' ? 'selected-red' : 'selected-yellow'}`;
    
    const handleClick = () =>{ 
        updateBoard(index);
    }

    return(
        <div className={className} onClick={handleClick}/>
    );
}