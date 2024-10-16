import mapboxgl, { Map } from "mapbox-gl";
import ReactMapGl from "react-map-gl"
import { useEffect, useRef, useState } from "react";

function ExampleMap(){
    const 
    const [coordinates, setCordinates]=useState<{lng:number, lat:number} | null> (null)
    const mapContainer=useRef<HTMLDivElement | null>(null)
    const myMap=useRef<Map | null> (null)
    useEffect(()=>{
        mapboxgl.accessToken="pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
        if(mapContainer.current){
            myMap.current=new mapboxgl.Map({
                //Attributes or properties
                //Focus point
                //Altitud, latitud
                container: mapContainer.current,
                style:"mapbox://style/mapbox/streets-v12",
                center: [-86.84683796931176, 21.049777035290912,],
                zoom: 15
            })
            //Metodo para obtener las coordenas de una ubicacion
            myMap.current.on("click",(e)=>{
                const {lng, lat}=e.lngLat
                setCordinates({lng, lat})
                console.log(coordinates)
            })

            //hacer un marker
            //upqroo
            //poli
            //ut

        }
        return()=>{
            if(myMap.current){
                myMap.current.remove();
            }
        }
    },[])
    return (
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
            <div ref={mapContainer} style={{ width: "100%", height: "100%"}}></div>
        </div>

    )
}

export default ExampleMap;