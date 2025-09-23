import "./components.css"


export function Hole({value, isNew}){
    return (
        <div className="hole">
            {/* Si hay value, es decir que deberia haber una ficha, se renderiza un objeto piece */}
            {value && (
                <div
                    className={
                        `piece ${value === 'red' ? 'selected-red' : 'selected-yellow'}`
                        + (isNew ? ' drop-animation' : '')
                    }
                />
            )}
        </div>
    );
}