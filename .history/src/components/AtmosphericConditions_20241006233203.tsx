//Importacion de los hooks
import { useState, useEffect } from "react";
//Definicion del componente
function AtmosphericConditions() {
//URL de la API
    const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";
//Lista de los estados de MX
    const mxStates = [
        {
            "id": 1,
            "name": "Aguascalientes"
        },
        {
            "id": 2,
            "name": "Baja California"
        },
        {
            "id": 3,
            "name": "Baja California Sur"
        },
        {
            "id": 4,
            "name": "Campeche"
        },
        {
            "id": 5,
            "name": "Chiapas"
        },
        {
            "id": 6,
            "name": "Chihuahua"
        },
        {
            "id": 7,
            "name": "Ciudad de México"
        },
        {
            "id": 8,
            "name": "Coahuila"
        },
        {
            "id": 9,
            "name": "Colima"
        },
        {
            "id": 10,
            "name": "Durango"
        },
        {
            "id": 11,
            "name": "Estado de México"
        },
        {
            "id": 12,
            "name": "Guanajuato"
        },
        {
            "id": 13,
            "name": "Guerrero"
        },
        {
            "id": 14,
            "name": "Hidalgo"
        },
        {
            "id": 15,
            "name": "Jalisco"
        },
        {
            "id": 16,
            "name": "Michoacán"
        },
        {
            "id": 17,
            "name": "Morelos"
        },
        {
            "id": 18,
            "name": "Nayarit"
        },
        {
            "id": 19,
            "name": "Nuevo León"
        },
        {
            "id": 20,
            "name": "Oaxaca"
        },
        {
            "id": 21,
            "name": "Puebla"
        },
        {
            "id": 22,
            "name": "Querétaro"
        },
        {
            "id": 23,
            "name": "Quintana Roo"
        },
        {
            "id": 24,
            "name": "San Luis Potosí"
        },
        {
            "id": 25,
            "name": "Sinaloa"
        },
        {
            "id": 26,
            "name": "Sonora"
        },
        {
            "id": 27,
            "name": "Tabasco"
        },
        {
            "id": 28,
            "name": "Tamaulipas"
        },
        {
            "id": 29,
            "name": "Tlaxcala"
        },
        {
            "id": 30,
            "name": "Veracruz"
        },
        {
            "id": 31,
            "name": "Yucatán"
        },
        {
            "id": 32,
            "name": "Zacatecas"
        }
    ];
    //data: almacena 
    const [data, setData] = useState([]);
    const [actualState, setActualState] = useState();
    const seeData = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((atmCondition) => setData(atmCondition.results))
    }
    useEffect(() => {
        seeData();
        console.log(seeData)
    }, []);
    return (
        <>
            <select
                onChange={(e) => setActualState(e.target.value)}
            >
                <option value="">Selecciona una opción</option>
                {mxStates.map((option) => (
                    <option key={option.id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            {actualState}
            <h1>Estado del tiempo</h1>
            {data.map((city, index) => {
                return (
                    <div>
                        <p>{city.name} - <i>{city.skydescriptionlong}</i></p>
                    </div>
                );
            })}
        </>
    )
}

export default AtmosphericConditions;