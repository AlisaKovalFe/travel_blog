import React from 'react';
import styles from './resultOfSearch.module.scss'
import { MehTwoTone  } from '@ant-design/icons';
import { Result } from 'antd';

// данное компонент - уведомление будет показан на экране в случае, если в компоненте selection не будет страны из моей базы данных
function ResultOfSearch(props) {
    return (
        <div className={styles.wrapper}>
            <Result
                icon={<MehTwoTone twoToneColor="#ffa39e" />}
                title="в такой стране я еще не была"
            />
        </div>
    );
}

export default ResultOfSearch;