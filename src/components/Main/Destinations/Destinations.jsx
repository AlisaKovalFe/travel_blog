import React from 'react';
import WorldRegions from '../worldRegions/WorldRegions'
import Countries from '../Countries/Countries'
import Italy from '../Italy/Italy'
import Selection from '../Selection/Selection'

function Destinations(props) {
    return (
        // здесь при клике на регион будет переходят на станицу со карточками стран, об компанента (регионы и страны тут, но может по-другому стоит их расположить)
        <div className='destinations'>
            <WorldRegions/>   
            <Selection/>
            <Countries/> 
            <Italy/>
        </div>
    );
}

export default Destinations;