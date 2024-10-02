import { useState } from "react";
import Button from "./Button";

function ExampleHookTwo(){
    //El estado contendrá variables de tipo boolean
    const [isVisible, setIsVisible] = useState(true)

    return (
        <>
        <button> Cambiar estado </button>
        {
            //Abrir un js/ts en un HTML se ocupan llaves
            //Condiciones ternarios
            isVisible ? (
                <h1>Listado de datos</h1>
            ):( //Else ":""
                <h1>Cargando datos...</h1>
            )
        }
        </>
    )
    
}

export default ExampleHookTwo;