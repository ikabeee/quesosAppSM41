import { useState } from "react";

function ExampleHookOne(){
    //useState Hook
    //name es nuestra variable y setName cambiará el estado del hook
    const [name, setName]=useState('Pedro');
    //Logica 
    return(
        //{} con llaves imprimes en react
        <>
        <h1>Bienvenidos {name}</h1>
        
        <input type="text" value={name} onChange={getName}/>
        </>
    )
}

export default ExampleHookOne;