import React from 'react';
import styles from './tomap.module.scss'
import Helper from '../../components/Helper/Helper'
import { destinations } from '../../data/destinations'
import { placesOnMap } from '../../data/placesOnMap'
import { YMaps, Map, ObjectManager, GeolocationControl} from '@pbe/react-yandex-maps';
import { Typography } from 'antd';
const { Title } = Typography;


function ToMap(props) {

let features = []
let copy = [...destinations]

copy.map((el) => {
    el.countries.map((item) => {
        item.info.visits.recomendations.map((elem) => {
            
            features.fill({
                type: "Feature",
                id: Date.now(),               
                geometry: {
                    type: "Point",
                    coordinates: elem.coordinates
                },
                properties: {
                    balloonContentHeader: elem.destination,         
                    balloonContentBody: `
                                        <div > 
                                            <img class="map-image" src=${elem.image.src} alt=${elem.image.alt} />
                                        </div>
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

    return (
        <section className={styles.wrapper}>
            <Helper src='/images/girl-with-red-tails.svg' text='тут еще больще мест на карте, ' link='https://www.youtube.com/playlist?list=PL3l-shLZkbojBldu9iHqyIl8TLNK65N8Phttps://geo.koltyrin.ru/map_user_visit.php'/>
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
        </section>
    );
}

export default ToMap;