'use client';

import React from 'react';
// import { createRoot } from 'react-dom/client';
import { APIProvider, Map, AdvancedMarker, Pin, Marker } from '@vis.gl/react-google-maps';

export default function GoogleMap() {

    const API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

    const position = { lat: 45.3637647, lng: -75.7384059 }

    return (
        <APIProvider apiKey={API_KEY}>
            <div style={{ width: '100%', height: '400px' }}>
                <Map
                    defaultCenter={position}
                    defaultZoom={17}
                    gestureHandling={'cooperative'}
                    disableDefaultUI={false}
                    streetViewControl={false}
                    mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID as string}
                >
                    {/* <Marker></Marker> */}
                    {/* <Marker
                        position={position}
                        title={'Walmart Supercentre'}></Marker> */}



                    {/* <AdvancedMarker
                    position={{ lat: 53.54992, lng: 10.00678 }}
                    title={'AdvancedMarker with custom html content.'}>
                    <div
                        style={{
                            width: 16,
                            height: 16,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            background: '#1dbe80',
                            border: '2px solid #0e6443',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}></div>
                </AdvancedMarker> */}

                    {/* <AdvancedMarker
                    position={{ lat: 15, lng: 20 }}
                    title={'AdvancedMarker with customized pin.'}>
                    <Pin background={'#22ccff'} borderColor={'#1e89a1'} scale={1.4}>
                       
                    
                    </Pin>
                </AdvancedMarker> */}
                </Map>
            </div>
        </APIProvider>
    )
}