import React, { useEffect } from 'react';
import { YMaps, Map, ObjectManager, GeolocationControl} from '@pbe/react-yandex-maps';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getDestinationsThunk } from '../../store/actions/mainActions'
import { getHelpersThunk } from '../../store/actions/helpersActions'
import styles from './tomap.module.scss'
import Helper from '../../components/Helper/Helper'

const { Title } = Typography;

function ToMap() {
    const dispatch = useDispatch();
    const destinations = useSelector((store) => store.mainStore);
    const helpers = useSelector((store) => store.helpersStore);

    useEffect(() => {   
        dispatch(getDestinationsThunk())
        dispatch(getHelpersThunk())
    }, [dispatch])


    let features = []

    destinations.map((el) => {
        el.countries.map((item) => {
            item.info.visits.recomendations.map((elem) => {    
                features.push({
                    type: "Feature",
                    id: elem.id,               
                    geometry: {
                        type: "Point",
                        coordinates: elem.coordinates
                    },
                    properties: {
                        balloonContentHeader: elem.destination,         
                        balloonContentBody: `
                                            <div > 
                                                <img class="map-image" src=${elem.image.src} alt=${elem.image.alt} />    
                                            </div>`,    
                        hintContent: elem.destination,  
                    },
                    options: {
                        preset: 'islands#yellowIcon'
                    },
                })
                return elem
            })
            return item
        })
        return el
    })

    const placesOnMap = {
        "type": "FeatureCollection",
        "features": features
    }

    return (
        <section className={styles.wrapper}>
            <Title level={2}>Мои любимые места на карте</Title>
            <YMaps>
                <Map
                    className={styles.map}
                    defaultState={{
                    center: [25.755246, 37.617779],
                    zoom: 2,
                    controls: ["zoomControl", "fullscreenControl"],
                    behaviors: ["drag", "dblClickZoom"]
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    options={{
                        maxZoom: 15
                    }}
                >
                    <ObjectManager
                        options={{
                            clusterize: true,
                            gridSize: 32,
                        }}
                        objects={{
                            openBalloonOnClick: true,
                            preset: "islands#greenDotIcon",
                        }}
                        clusters={{
                            preset: "islands#blueClusterIcons",
                        }}
                        defaultFeatures={placesOnMap}
                        modules={[
                            "objectManager.addon.objectsBalloon",
                            "objectManager.addon.objectsHint",
                        ]}
                    />
                    <GeolocationControl 
                        options={{ float: "left" }}
                        data={{title: 'это ты'}}
                    />
                </Map>
            </YMaps>

            <div className={styles.helper}>
                <Helper src={helpers.toMap?.src} text={helpers.toMap?.text} link={helpers.toMap?.link}/>
            </div>
        </section>
    );
}

export default ToMap;