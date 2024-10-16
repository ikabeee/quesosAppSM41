import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css"

function ExampleMap() {
    const [coordinates, setCordinates] = useState<{ lng: number, lat: number } | null>(null)
    const mapContainer = useRef<HTMLDivElement | null>(null)
    const myMap = useRef<Map | null>(null)
    const universities=[
        {name: "UTC", coordinates:[-86.84683796931176, 21.049777035290912], color:"green"},
        {name: "UPQROO", coordinates:[-86.84683796931176, 21.181196065120016], color: "red"}]
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                //Attributes or properties
                //Focus point
                //Altitud, latitud
                container: mapContainer.current,
                style: "mapbox://style/mapbox/streets-v12",
                center: [-86.84683796931176, 21.049777035290912],
                zoom: 15
            });

            universities.forEach(university=>{
                new mapboxgl.Marker({color: university.color})
                    .setLngLat(university.coordinates)
                    .addTo(myMap.current)
                    .setPopup(new mapboxgl.Popup().setHTML(`<h6>${university.name}</h6>`))

            })

            //Metodo para obtener las coordenas de una ubicacion
            myMap.current.on("click", (e) => {
                const { lng, lat } = e.lngLat
                setCordinates({ lng, lat })
                console.log(coordinates)
            })
            
        }
        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        }
    }, [coordinates])


    return (

        <div ref={mapContainer} style={{  width: "100vw", height: "100vh", top: 0, left: 0, position: "fixed" }}></div>


    )
}

export default ExampleMap;