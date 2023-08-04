// хочу, чтобы на странице с карточками стран над ними был селекшн, где можно было выбрать из списка и, чтобы они регировал на ввод и подсказывал. Если нужно странице не будет, нужно уведомление. Искать эл-т, видимо, надо будет по id
// еще хочу лоадер рядом, который будет имитировать ожидания загрузки данных

import React from 'react';
import { Select } from 'antd';
import { counties } from '../../../data/countries'

function Selection(props) {
    const handleChange = (value) => {
    console.log(`selected ${value}`);
};
    return (
        <div className='selection'>
            <Select
                mode="tags"
                style={{
                width: '100%',
                }}
                placeholder="Поиск страны"
                onChange={handleChange}
                options={counties.map((el) => {
                    return {
                        value: el.title,
                        label: el.title
                    }
                })}
  />
        </div>
    );
}

export default Selection;