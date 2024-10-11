import { useState } from "react";

function ExampleAxios() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (loading) return (
        <div className="d-flex align-items-center"> <!--W
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
    )
    return (
        <h1>Lista de datos</h1>
    );
}

export default ExampleAxios;