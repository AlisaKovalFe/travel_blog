import React from 'react';
import About from './About/About'
import Video from './Video/Video'
import PageThree from './PageThree/PageThree'


function Main(props) {
    return (
        <div className='main_container'>
            {/* <About/> */}
            <Video />
            {/* <PageThree /> */}

        </div>
    );
}

export default Main;