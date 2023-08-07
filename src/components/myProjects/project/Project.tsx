import React from 'react';
import styles from './Project.module.scss'

type ProjectStyleType = {
    backgroundImage: string
}

type SkillPropsType = {
    title: string
    description: string
    style?: ProjectStyleType
    img: string
    href: string
}

export function Project(props: SkillPropsType) {
    return (
        <a href={props.href} className={styles.project} target="_blank">
            <div className={styles.block}>
                <img className={styles.icon} alt={'iconProject'} src={props.img}/>
                <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        </a>

    );
}
