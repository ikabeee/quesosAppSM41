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
                
            )
        }
        </>
    )
    
}

export default ExampleHookTwo;