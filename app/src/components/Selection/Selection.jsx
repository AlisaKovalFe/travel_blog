import React from 'react';
import styles from './selection.module.scss'
import { Select } from 'antd';

function Selection({countries, onChange, status}) {
    return (
            <Select
                // defaultValue='' //не работает
                // defaultActiveFirstOption='false' //не работает
                notFoundContent='такой страны нет в списке'
                status={status}
                showSearch
                className={styles.wrapper}
                placeholder="Выберите страну"
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