import { useState, useEffect } from "react";

//Nos devuelve si debemos mostrar ya la modal
export function useShowModal(winner){
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if(winner){
            //Esperamos un segundo antes de renderizar la modal
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 400);

            return () => clearTimeout(timer); //Limpiamos timeout
        } else {
            setShowModal(false);
        }

    }, [winner])

    return {showModal};
}