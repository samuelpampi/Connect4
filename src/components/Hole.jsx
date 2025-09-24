import "./components.css"


export function Hole({value, isNew}){

    const holeClassName = `piece ${value === 'red' ? 'selected-red' : 'selected-yellow'}` + (isNew ? ' drop-animation' : '');
    
    return (
        <div className="hole">
            {/* Si hay value, es decir que deberia haber una ficha, se renderiza un objeto piece */}
            {value && (
                <div
                    className={holeClassName}
                />
            )}
        </div>
    );
}