import React from 'react';
import ReactPlayer from 'react-player/youtube'

function Player({ url, width, height }) {
    return (
        <ReactPlayer
            url={url}
            width={width}
            height={height}
            controls
            
        />
    );
}

export default Player;