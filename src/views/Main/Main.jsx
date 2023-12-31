import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styles from './main.module.scss'
import Greeting from '../Greeting/Greeting';
import About from '../About/About'
import Videos from '../Videos/Videos'
import WorldRegions from '../WorldRegions/WorldRegions';
import Countries from '../Countries/Countries';
import CountryInformation from '../CountryInformation/CountryInformation'
import ToMap from '../ToMap/ToMap';

function Main(props) {
    return (
        <div className={styles.wrapper}>
            <Routes>
                <Route path='/' element={<Greeting />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/video' element={<Videos />}></Route>
                <Route path='/tomap' element={<ToMap />}></Route>
                <Route path='/world-regions' element={<WorldRegions />}></Route>
                <Route path='/world-regions/countries/:id' element={<Countries />}></Route>
                <Route path='/world-regions/countries/:id/country-information/:id' element={<CountryInformation />}></Route>
            </Routes>
            
        </div>
    );
}

export default Main;