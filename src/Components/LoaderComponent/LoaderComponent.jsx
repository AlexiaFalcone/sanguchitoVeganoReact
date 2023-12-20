import React from 'react';
import { hourglass } from 'ldrs';

const LoaderComponent = ({loading}) => {
    hourglass.register()
    if(loading){
        return (
            <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="black"
            ></l-hourglass>
        );
    };
  
}
export default LoaderComponent;


