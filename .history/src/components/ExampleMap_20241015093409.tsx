import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

function ExampleMap(){
    const [coordinates, setCordinates]=useState<{lon:number, lat:number} | null> (null)
    const mapContainer=useRef<HTMLDivElement | null>(null)
    const myMap=useRef<Map | null> (null)
    useEffect(()=>{
        mapboxgl.accessToken="pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
        if(mapContainer.current){
            myMap.current=new mapboxgl.Map({
                //Attributes or properties
                container: mapContainer.current,
                style:"mapbox://style/mapbox/streets-v12",
                //Focus point
                //Altitud, latitud
                center: [2.3375796240956, 48.86079106091023 ],
                zoom: 10
            })
            //Metodo para obtener las coordenas de una ubicacion
            myMap.current.on("click",(e)=>{
                const {lon, lat}=e.lngLat
                setCordinates(lon, lat)
            })

        }
        return()=>{
            if(myMap.current){
                myMap.current.remove();
            }
        }
    },[])
    return (

        <div ref={mapContainer} style={{position: "absolute", top: 0, bottom:0, width: "100%"}}></div>
    )
}

export default ExampleMap;