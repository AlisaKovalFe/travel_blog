import React from 'react';
import { Button, Space } from 'antd';

function ButtonOpenDetailes(props) {
    return (
        <div>
            <Space wrap>
                <Button 
                type="link"
                className='button_detailed'
                href='#About'
                >
                    Подробнее
                </Button>
            </Space>
        </div>
    );
}

export default ButtonOpenDetailes;