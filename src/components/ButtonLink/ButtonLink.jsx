import React from 'react';
import styles from './buttonLink.module.scss'
import { Button, Space } from 'antd';

function ButtonLink(props) {
    return (
        <div>
            <Space>
                <Button 
                    type="link"
                    className={styles.buttonLink}
                    href='#About'
                    >
                        Подробнее
                </Button>
            </Space>
        </div>
    );
}

export default ButtonLink;