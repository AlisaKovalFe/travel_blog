import React from 'react';
import { Collapse} from 'antd';
import Player from '../Player/Player';

function CollapseVideos({ records }) {
    return (
        <Collapse
            accordion
            items={records?.map((item) => {
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