import React from 'react';
import { Collapse} from 'antd';
import Player from '../Player/Player';

function CollapseVideos({ country }) {
    return (
        <Collapse
            accordion
            items={country.records?.map((item) => {
                return {
                    key: item.key,
                    label: item.city,
                    children: <Player url={item.videoUrl} width='100%' height='100%'/>
                }
            })}
        />
    );
}

export default CollapseVideos;