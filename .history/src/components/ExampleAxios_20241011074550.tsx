import axios from "axios";
import { useEffect, useState } from "react";

function ExampleAxios() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect( () => {

        const dataList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            setData(response.data) //.data trae el formato
            console.log(data);
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