import { useState } from "react";

function ExampleHookOne(){
    //useState Hook
    //name es nuestra variable y setName cambiará el estado del hook
    const [name, setName]=useState('Pedro');
    return(
        //{} con llaves 
        <h1>Bienvenidos {name}</h1>
    )
}

export default ExampleHookOne;