import { useState } from "react";

function ExampleHookOne(){
    //useState Hook
    //name es nuestra variable y setName cambiará el estado del hook
    const [name, setName]=useState('');
    return(
        <h1>Bienvenidos</h1>
    )
}

export default ExampleHookOne;