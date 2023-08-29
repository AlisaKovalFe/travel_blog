import React from 'react';
import styles from './helper.module.scss'
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';



function Helper({src, text, link}) {
    return (
        <div className={styles.wrapper}>
                <img src={src} alt='girl' className={styles.image}></img>   
                <div className={styles.bubble}>
                    <div className={styles.bubble__text}>
                        {text}
                    </div>

                    <div className={styles.tooltip}>
                        <Tooltip title="переход на сайт" className={styles.tooltip__title} >
                            <Button>
                                <ArrowRightOutlined></ArrowRightOutlined>
                                <a href={link} target="_blank" rel="noopener noreferrer">тут</a>
                            </Button>
                        </Tooltip>                      
                    </div>
                </div>        
        </div>
    );
}

export default Helper;