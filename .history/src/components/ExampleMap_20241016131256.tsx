import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import <mapbox-gl />

function ExampleMap() {
    const [coordinates, setCordinates] = useState<{ lng: number, lat: number } | null>(null)
    const mapContainer = useRef<HTMLDivElement | null>(null)
    const myMap = useRef<Map | null>(null)

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
            const locations =[{
                lng:
            }]
            //utMarker
            new mapboxgl.Marker({
                color: '#FF0000',
            })
                .setLngLat([-86.84683796931176, 21.049777035290912])
                .addTo(myMap.current);
            //uqroo
            new mapboxgl.Marker({
                color: '#FF0000',
            })
                .setLngLat([-86.92874437705687, 21.165510972355246])
                .addTo(myMap.current);
            //upqroo
            new mapboxgl.Marker({
                color: '#FF0000',
            })
                .setLngLat([-86.90644198617, 21.181196065120016])
                .addTo(myMap.current);
            //Tecnologico de Cancun
            new mapboxgl.Marker({
                color: '#FF0000'
            })
                .setLngLat([ -86.83569087672059, 21.139175592642935,])
                .addTo(myMap.current);

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