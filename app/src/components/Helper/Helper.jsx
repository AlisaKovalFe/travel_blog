import React from 'react';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './helper.module.scss'

function Helper({src, text, link, alt}) {
    return (
        <div className={styles.wrapper}>
                <img src={src} alt={alt} className={styles.image}/>   
                <div className={styles.bubble}>
                    <div className={styles.bubble__text}>
                        {text}
                    </div>

                    <div className={styles.tooltip}>
                        <Tooltip title="переход на сайт" className={styles.tooltip__title} >
                            <Button>
                                <ArrowRightOutlined/>
                                <a href={link} target="_blank" rel="noopener noreferrer">тут</a>
                            </Button>
                        </Tooltip>                      
                    </div>
                </div>        
        </div>
    );
}

export default Helper;