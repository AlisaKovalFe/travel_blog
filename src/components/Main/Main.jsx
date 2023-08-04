import React from 'react';
import Greeting from './Greeting/Greeting';
import About from './About/About'
import Video from './Video/Video'
import Destinations from './Destinations/Destinations'

function Main(props) {
    return (
        <div className='main_container'>
            {/* <Greeting />
            <About/>
            <Video /> */}
            <Destinations />
            

        </div>
    );
}

export default Main;