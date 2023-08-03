import React from 'react';
import VideoCardList from '../VideoCardList/VideoCardList'

function Video(props) {
    return (
        <div className="video_information">
            <h2 className='video_information_heading'>Видео из моих любимых мест</h2>
            <p className='video_information_text'>Здесь я собрала видео из моих любимых регионов Европы, чтобы воспоминания были всегда рядом.</p>
            
            <div className="video_videoList">
                <VideoCardList />
            </div>
            
        </div>
    );
}

export default Video;