import React from 'react';
import About from './About/About'
import Video from './Video/Video'
import Destinations from './Destinations/Destinations'
import Greeting from './About/Greeting/Greeting';

function Main(props) {
    return (
        <div className='main_container'>
            {/* <Greeting /> */}
            <About/>
            {/* <Video /> */}
            {/* <Destinations /> */}
            

        </div>
    );
}

export default Main;