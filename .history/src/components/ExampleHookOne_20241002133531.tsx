import { useState } from "react";

function ExampleHookOne(){
    //useState Hook
    //name es nuestra variable y setName cambiará el estado del hook
    const [name, setName]=useState('Pedro');
    //Logica del componente

    function getName(event:any){ //
        //Metodo que actualiza la variable
        setName(event.target.value) // Obtiene el valor del input
    }

    const getName=(event:any)=>{
        setName(event.target.value); 
    }
    return(
        //{} con llaves imprimes en react
        <>
        <h1>Bienvenidos {name}</h1>
        
        <input type="text" value={name} onChange={getName}/>
        </>
    )
}

export default ExampleHookOne;