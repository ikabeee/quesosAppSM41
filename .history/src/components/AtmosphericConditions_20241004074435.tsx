import { useState, useEffect } from "react";

function AtmosphericConditions() {
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
    const mxStates = [
        {
        "id": 1,
        "name": "Aguascalientes"
        }
    ];
    const[data, setData] = useState([]);
    const [actualState, setActualState]= useState("Quintana Roo");
    const seeData = () => {
        return fetch(url)
        .then((res) => res.json ())
        .then((atmCondition)=>setData(atmCondition.results))
    }
    useEffect(()=>{
        seeData();
    }, []);
    return(
        <>
        <select
            onChange{(e)=}
        </>
    )
} 

export default AtmosphericConditions;