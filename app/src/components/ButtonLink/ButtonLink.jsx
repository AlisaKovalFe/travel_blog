import React from 'react';
import styles from './buttonLink.module.scss'
import { Button, Space } from 'antd';

function ButtonLink( {text} ) {
    return (
        <div>
            <Space>
                <Button 
                    type="link"
                    className={styles.button}
                    >
                        {text}
                </Button>
            </Space>
        </div>
    );
}

export default ButtonLink;