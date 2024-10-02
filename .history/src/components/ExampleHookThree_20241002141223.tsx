import { useEffect, useState } from "react";

function ExampleHookThree(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const listData=async()=>{
            try{
                const response=await fetch(""); //Cada vez que se realizan peticiones 
            }
        } //Funciones sincronas = van por turnos. Funciones asincronas = Permite que que se ejecuten otras tareas en segundo plano 
    })
    return(
        <>
        </>
    )

}

export default ExampleHookThree;