import React from 'react';
import styles from './main.module.scss'
import Greeting from '../Greeting/Greeting';
import About from '../About/About'
import Videos from '../Videos/Videos'
import WorldRegions from '../WorldRegions/WorldRegions';
import Selection from '../../components/Selection/Selection';
import ResultOfSearch from '../ResultOfSearch/ResultOfSearch'
import Countries from '../Countries/Countries';
import Loader from '../../components/Loader/Loader';

import CountryInformation from '../CountryInformation/CountryInformation'

function Main(props) {
    return (
        <div className={styles.wrapper}>
            <Greeting />
            <About/>
            <Videos /> 
            <WorldRegions/>
            <Selection/>
            <Loader/>
            <ResultOfSearch/>
            <Countries/>

            <CountryInformation/>
        </div>
    );
}

export default Main;