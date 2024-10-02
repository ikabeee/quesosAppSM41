import { useState } from "react";
import Button from "./Button";

function ExampleHookTwo(){
    //El estado contendrá variables de tipo boolean
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
        <Button>Mostrar datos</Button>
        {
            //Abrir un js/ts en un HTML se ocupan llaves
            isVisible ? (
                <h1>Listado de datos</h1>
            ):(
                <h1>Cargando datos...</h1>
            )
        }
        </>
    )
    
}

export default ExampleHookTwo;