import React from 'react';
import styles from './Title.module.scss'

type TitlePropsType = {
    h2: string
    span?: string
}

export const Title = (props: TitlePropsType) => {

    return (
        <div className={styles.title}>
            {props.span && <p><span>{props.span}</span></p>}
            <h2>{props.h2}</h2>
        </div>
    )
}