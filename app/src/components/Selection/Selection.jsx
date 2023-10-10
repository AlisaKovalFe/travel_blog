import React from 'react';
import styles from './selection.module.scss'
import { Select } from 'antd';

function Selection({countries, onChange}) {
    return (
            <Select
                showSearch
                className={styles.wrapper}
                placeholder="Выберите страны"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={countries.map((el) => {
                        return {
                            value: el.title,
                            label: el.title
                        }
                })}
            />
    );
}

export default Selection;