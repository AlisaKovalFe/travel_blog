import React from 'react';
import styles from './buttonLink.module.scss'
import { Button, Space } from 'antd';

function ButtonLink({ text, type, onClick } ) {
    return (
        <div>
            <Space>
                <Button 
                    type={type}
                    className={styles.button}
                    onClick={onClick}
                >
                    {text}
                </Button>
            </Space>
        </div>
    );
}

export default ButtonLink;