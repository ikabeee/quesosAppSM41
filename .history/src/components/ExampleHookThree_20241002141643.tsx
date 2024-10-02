import { useEffect, useState } from "react";

function ExampleHookThree(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const listData=async()=>{
            try{
                const response=await fetch("https://swapi.dev/api/people/?"); //Cada vez que se realizan peticiones asincronas necesitas un await
            }catch(error){
                console.log("Error");
            }
        } //Funciones sincronas = van por turnos. Funciones asincronas = Permite que que se ejecuten otras tareas en segundo plano 
    })
    return(
        <>
        </>
    )

}

export default ExampleHookThree;