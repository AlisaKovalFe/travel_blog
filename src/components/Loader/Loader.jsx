import React from 'react';
import { Alert, Space, Spin } from 'antd';

function Loader(props) {
    return (
        <div>
            <Space
                direction="vertical"
                style={{
                width: '100%',
                }}
            >
                <Space>
                
                    <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin>
                </Space>

                <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
                </Spin>
            </Space>
        </div>
    );
}

export default Loader;