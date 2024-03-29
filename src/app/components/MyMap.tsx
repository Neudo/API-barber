'use client'

import React, {useEffect, useRef} from 'react';
import {Loader} from "@googlemaps/js-api-loader";

function MyMap() {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const initMap  = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly",
            })

            const { Map } = await loader.importLibrary('maps')
            const position = { lat: 48.8772204, lng: 2.3501225 }

            const mapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

        }

        initMap();
    }, []);

    return (
        <div style={{height: '600px'}}  ref={mapRef}></div>
    );
}

export default MyMap
