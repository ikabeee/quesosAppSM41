import { useState } from "react";
import Button from "./Button";

function ExampleHookTwo(){
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
        <Button>Mostrar datos</Button>
        {
            //Abrir un js en un HTML se ocupan llaves
            isVisible ? (
                <h1>Listado de datos</h1>
            ):(
                <h1>Cargando datos</h1>
            )
        }
        </>
    )
    
}

export default ExampleHookTwo;