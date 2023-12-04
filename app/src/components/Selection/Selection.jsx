import React from 'react';
import { Select } from 'antd';
import styles from './selection.module.scss'

function Selection({countries, onChange, status, value, disabled, placeholder}) {
    return (
            <Select
                disabled={disabled}
                value={value}
                notFoundContent='такой страны нет в списке'
                status={status}
                showSearch
                className={styles.wrapper}
                placeholder={placeholder}
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