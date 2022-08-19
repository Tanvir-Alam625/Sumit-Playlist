import React from 'react';
import {useLoadScript,GoogleMap, Marker}from "@react-google-maps/api"
const GoogleMap1 = () => {
    const {iseLoaded}=useLoadScript({
        googleMapsApiKey:'AIzaSyBuLc81IR7M1vWzPZc8eNL1VzxEgPugN40'
    })
    // if(!iseLoaded) return <p>Loaing Map....</p>
    return(
        <div className='h-[100*%] w-[100%] flex justify-center'>
            <GoogleMap zoom={10} center={{lat:23.760553125947684,lng:90.38927467742258}} mapContainerStyle={{width:'500px', height:'600px'}} >
                <Marker position={{lat:23.760553125947684,lng:90.38927467742258}} ></Marker>
            </GoogleMap>
        </div>
    );
};

export default GoogleMap1;