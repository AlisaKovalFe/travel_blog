import React from 'react';
import { videoCovers } from '../../../data/videoCovers'
import { Card } from 'antd';
import { videoOfRegions } from '../../../data/videoOfRegions'
import { Collapse } from 'antd';
const { Meta } = Card;

function VideoCardList(props) {
    const onChange = (key) => {
        console.log(key);
      };
    return (   
        <div className="videoCardList_container">
            {videoCovers.map((el, index) => (
                <Card
                    hoverable
                    className='videoCover'                  
                    cover={<img alt={el.cover.alt} src={el.cover.src} className="videoCover_image"/>}
                >
                    <Meta title={el.title} description={el.description} />
                    {
                        videoOfRegions.map((el, i) => (
                            index === i && <Collapse items={el} onChange={onChange} />    
                        ))
                    }
                </Card>
            )
            )}           
        </div>
    );
}

export default VideoCardList;