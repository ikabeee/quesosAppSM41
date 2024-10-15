import mapbox{ Map } from "mapbox-gl";
import { useEffect } from "react";

function ExampleMap(){
    const mapContainer=useRef<HTMLDivElement | null>(null)
    const myMap=useRef<Map | null> (null)
    useEffect(()=>{
        mapboxgl.accessToken=""
    })
    return (

    )
}

export default ExampleMap;