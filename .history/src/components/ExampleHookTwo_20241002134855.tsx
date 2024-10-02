import { useState } from "react";
import Button from "./Button";

function ExampleHookTwo(){
    const [isVisible, setIsVisible] = useState()
    return (
        <>
        <Button>Mostrar datos</Button>
        </>
    )
    
}

export default ExampleHookTwo;