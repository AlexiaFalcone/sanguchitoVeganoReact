import React from 'react';
import { hourglass } from 'ldrs';
import './LoaderComponent.css'

const LoaderComponent = ({loading}) => {
    hourglass.register()
    if(loading){
        return (
            <div className='loaderStyle'>
                   <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="black"
            ></l-hourglass>
        
            </div>
            );
         
    };
  
}
export default LoaderComponent;


