import { useEffect, useState } from "react";

function ExampleHookThree(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const listData=async()=>{
            try{
                const response=await fetch("https://swapi.dev/api/people/?format=json");//Cada vez que se realizan peticiones asincronas necesitas un await
                const characterList=await response.json();
                setData(characterList);
                console.log(characterList.results); 
            }catch(error){
                console.log(error);
            }
        } //Funciones sincronas = van por turnos. Funciones asincronas = Permite que que se ejecuten otras tareas en segundo plano 
    })
    return(

    )

}

export default ExampleHookThree;