import React from 'react';
import styles from './selection.module.scss'
import { Select } from 'antd';
import { counties } from '../../data/countries'

function Selection(props) {
    return (
            <Select
                showSearch
                className={styles.wrapper}
                placeholder="Поиск страны"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={counties.map((el) => {
                        return {
                            value: el.title,
                            label: el.title
                        }
                })}
            />
    );
}

export default Selection;