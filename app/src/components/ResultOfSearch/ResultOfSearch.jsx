import React from 'react';
import { Result } from 'antd';
import { MehTwoTone  } from '@ant-design/icons';
import styles from './resultOfSearch.module.scss'

// данное компонент - уведомление будет показан на экране в случае, если в компоненте selection не будет страны из моей базы данных
function ResultOfSearch({ title }) {
    return (
        <div className={styles.wrapper}>
            <Result
                icon={<MehTwoTone twoToneColor="#ffa39e" />}
                title={title}
            />
        </div>
    );
}

export default ResultOfSearch;