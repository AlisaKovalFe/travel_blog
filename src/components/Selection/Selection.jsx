// здесь надо понять как хранить counties, чтобы коорректно прокинуть данные

import React from 'react';
import styles from './selection.module.scss'
import { Select } from 'antd';
import { counties } from '../../data/countries'

function Selection(props) {
    return (
        <div className={styles.wrapper}>
            <h2>Выбери страну</h2>
            <Select
                showSearch
                className={styles.selection}
                placeholder="Поиск страны"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={counties.map((el) => {
                    return el.map((el) => {
                        return {
                            value: el.title,
                            label: el.title
                        }
                    })
                }).flat()}
  />
        </div>
    );
}

export default Selection;