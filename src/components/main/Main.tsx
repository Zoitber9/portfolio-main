import React from 'react';
import styles from './Main.module.scss'
import {MainComponentType} from "../../app/state";
import {SkillsInfo} from "./skillsInfo/SkillsInfo";

type MainPropsType = {
    mainComponent: MainComponentType
}

export function Main(props: MainPropsType) {

    const {mainComponent} = props

    return (
        <div className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <h1>{mainComponent.h1}</h1>
                    <h2>Andrey Abramchik</h2>
                    <SkillsInfo arrSkills={mainComponent.arrSkills}/>
                    <p>{mainComponent.location}</p>
                    <a className={styles.myWorks}
                       href={'#projects'}>{mainComponent.a1}</a>
                    <a className={styles.contactMe}
                       href={'#contacts'}><span>{mainComponent.a2}</span> &#9660;</a>
                </div>
                <div className={styles.photo}>
                    <div>
                        <img src={mainComponent.photo} alt={'photo'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
