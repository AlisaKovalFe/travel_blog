import React from 'react';
import { Button, Space } from 'antd';
import styles from './buttonLink.module.scss'

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