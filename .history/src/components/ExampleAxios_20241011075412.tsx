import axios from "axios";
import { useEffect, useState } from "react";

function ExampleAxios() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => { //useEffect siempre espera una respuesta

        const dataList = async () => {
            try {
                const response = await axios.get('https://pokeap.co/api/v2/pokemon?limit=100000&offset=0')
                setData(response.data) //.data trae el formato
                console.log(data);
            } catch (errors: any) { //CAcha el error
                setError(errors)
            } finally { //Desaparece el spinner
                setLoading(false)
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
    if (error) {
        return (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
                <div>
                    Oops! Ocurrió un error : {error.mesagge}
                </div>
            </div>
        )
    }
    return (
        <h1>Lista de datos</h1>
    );
}

export default ExampleAxios;