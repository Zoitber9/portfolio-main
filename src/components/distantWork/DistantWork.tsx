import React from 'react';
import styles from './DistantWork.module.scss'
import {Title} from "../../common/title/Title";
import {DistantWorkComponentType} from "../../app/state";

type DistantWorkPropsType = {
    distantWorkComponent: DistantWorkComponentType
}

export function DistantWork(props: DistantWorkPropsType) {

    const {distantWorkComponent} = props

    return (
        <div className={styles.mainDistantWork}>
            <div className={styles.div1}></div>
            <div className={styles.div2} style={{backgroundImage: `url(${distantWorkComponent.bgImg})`}}></div>
            <div className={styles.distantWorkContainer}>
                <Title h2={distantWorkComponent.title}/>
                <a href={'#contacts'}>{distantWorkComponent.a}</a>
            </div>
        </div>
    );
}