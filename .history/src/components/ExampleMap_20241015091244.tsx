import mapboxgl, { Map } from "mapbox-gl";
import { useEffect } from "react";

function ExampleMap(){
    const mapContainer=useRef<HTMLDivElement | null>(null)
    const myMap=useRef<Map | null> (null)
    useEffect(()=>{
        mapboxgl.accessToken="pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
        if(mapContainer.current){
            myMap.current=new mapboxgl.Map({
                //Attributes or properties
                container:mapContainer,
                style:"mapbox://style/mapbox/street",
                center: 
            })
        }
    })
    return (

    )
}

export default ExampleMap;