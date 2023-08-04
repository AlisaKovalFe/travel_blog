import React from 'react';
import { worldRegionsData } from '../../../data/worldRegions'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function WorldRegions(props) {
    return (
        <div className='world_regions'>
            <h3 className='world_regions_heading'>Выбери регион для путешествия</h3>
            <div className='world_regions_content'>
                {
                    worldRegionsData.map((el) => (
                        <Card
                            hoverable
                            className='world_regions_region'
                            cover={<img className='world_regions_image' alt={el.cover.alt} src={el.cover.src} />}
                            key={el.id}
                        >
                            <Meta description={el.description} />
                        </Card>
                    ))
                }
                <Tabs
                    className="world_regions_tabs"
                    centered
                    tabPosition="left"
                    size='small'
                    items={worldRegionsData.map((el) => {
                        return {
                            label: el.title,
                            key: el.id,
                        };
                    })}
                />
            </div>  
        </div>
    );
}

export default WorldRegions;