import { useState } from "react";

function ExampleAxios(){

    const[data, setData] = useState();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    if(loading) return (
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      )
    return(
        <h1>Lista de datos</h1>
    );
}

export default ExampleAxios;