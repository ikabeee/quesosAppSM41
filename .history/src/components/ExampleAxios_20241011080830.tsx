import axios from "axios";
import { useEffect, useState } from "react";

function ExampleAxios() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => { //useEffect siempre espera una respuesta

        const dataList = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                setData(response.data.results) //Se asigna a data la lista de pokemones
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
                <div>
                    Oops! Ocurrió un error : <strong>{error.message}</strong>
                </div>
            </div>
        )
    }
    return (
        <>
            <h1>Lista de datos</h1>
            {
                data.map(item => (

                    <div className="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                            <div className="card-body">
                                <h5 className="card-title">{item.name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                ))
            }
        </>

    );
}

export default ExampleAxios;