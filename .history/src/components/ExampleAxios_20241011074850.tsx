import axios from "axios";
import { useEffect, useState } from "react";

function ExampleAxios() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => { //useEffect siempre espera una respuesta

        const dataList = async () => {
            try{

            }
  
        }
        dataList() //Invocas al evento
    }, [])

    if (loading) return (
        <div className="d-flex align-items-center"> 
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
    )

    return (
        <h1>Lista de datos</h1>
    );
}

export default ExampleAxios;