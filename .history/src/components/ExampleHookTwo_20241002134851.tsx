import { useState } from "react";
import Button from "./Button";

function ExampleHookTwo(){
    const [isVisible, set] = useState()
    return (
        <>
        <Button>Mostrar datos</Button>
        </>
    )
    
}

export default ExampleHookTwo;