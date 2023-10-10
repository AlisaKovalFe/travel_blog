import React from 'react';
import { Tooltip } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';

function RequiredToolTip({title, color}) {
    return (
        <Tooltip title={title} color={color} >
            <span><InfoCircleTwoTone /></span>    
        </Tooltip>
    );
}

export default RequiredToolTip;


