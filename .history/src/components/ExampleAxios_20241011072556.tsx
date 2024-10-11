import { useState } from "react";

function ExampleAxios(){

    const[data, setData] = useState();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    if(loading) return 
    return(
        <h1>Lista de datos</h1>
    );
}

export default ExampleAxios;