import React from 'react';
import styles from './helper.module.scss'
import { Button} from 'antd';

function Helper({src, text, link}) {
    return (
        <div className={styles.wrapper}>
            <img src={src} alt='girl' className={styles.image}></img>
            
                <Button className={styles.button}><a href={link} target="_blank" rel="noopener noreferrer">{`${text} с тебя клик`}</a></Button>                
            
        </div>
    );
}

export default Helper;