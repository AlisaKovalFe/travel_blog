import React from 'react';
import Greeting from '../Greeting/Greeting';
import About from '../About/About'
import Videos from '../Videos/Videos'
import WorldRegions from '../WorldRegions/WorldRegions';
import Selection from '../../components/Selection/Selection';
import Countries from '../Countries/Countries';
import Loader from '../../components/Loader/Loader';

import CountryInformation from '../CountryInformation/CountryInformation'

function Main(props) {
    return (
        <div className='main_container'>
            <Greeting />
            <About/>
            <Videos /> 
            <WorldRegions/>
            <Selection/>
            <Loader/>
            <Countries/>

            <CountryInformation/>
        </div>
    );
}

export default Main;