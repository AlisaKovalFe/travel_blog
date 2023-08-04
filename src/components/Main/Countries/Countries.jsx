import React from 'react';
import { counties } from '../../../data/countries'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function Countries(props) {
    return (
        <div className='countries'>
            <div className='countries_country'>
                {
                    counties.map((el) => (
                        <Card
                            hoverable
                            className='countries_country_card'
                            cover={<img className='countries_country_image' alt={el.cover.alt} src={el.cover.src} />}
                            key={el.id}
                        >
                            <Meta description={el.description} />
                        </Card>
                    ))
                }   
            </div>
            <div className="countries_tabs">
                <Tabs
                    centered
                    tabPosition="left"
                    size='small'
                    items={counties.map((el) => {
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

export default Countries;