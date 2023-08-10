import React from 'react';
import styles from './loader.module.scss'
import { Space, Spin } from 'antd';


// при выборе страны в компоненте selection будет имитироваться задержка в 5 секунд, в это время на экране будет показан Loader, после окончания паузы на экран будет выводиться инфо о выбранной стране

// пыталсь поменять цвет этого лоадера, никак не получается
function Loader(props) {
    return (
        <div className={styles.wrapper}>
            <Space size="middle">
                <Spin size="large"
                />
            </Space>
        </div>
    );
}

export default Loader;