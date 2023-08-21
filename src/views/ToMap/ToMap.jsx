import React from 'react';
import styles from './tomap.module.scss'
import { placesOnMap } from '../../data/placesOnMap'
import { YMaps, Map, ObjectManager, GeolocationControl, SearchControl, RouteButton} from '@pbe/react-yandex-maps';
import { Typography } from 'antd';
const { Title } = Typography;

function ToMap(props) {

    return (
        <section className={styles.wrapper}>
            <Title level={2}>Рестораны на карте</Title>
            <YMaps>
                <Map
                    className={styles.map}
                    defaultState={{
                    center: [55.755246, 37.617779],
                    zoom: 12,
                    controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
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
                    <RouteButton options={{ float: "right"}}/>
                </Map>
            </YMaps>
        </section>
    );
}

export default ToMap;