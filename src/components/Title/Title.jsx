import React from 'react';
import styles from './title.module.scss'

export function Title(props) {
    return React.createElement(`h${props.level}`, {
        className: styles.title,
        children: props.children
    })
}


export default Title;
