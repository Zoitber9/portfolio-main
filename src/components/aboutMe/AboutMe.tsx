import React from 'react';
import styles from './AboutMe.module.scss'
import {Title} from "../../common/title/Title";
import {AboutMeComponent} from "../../app/state";
import Fade, {Roll} from "react-awesome-reveal";


type AboutMePropsType = {
    aboutMeComponent: AboutMeComponent
}

export function AboutMe(props: AboutMePropsType) {
    const {aboutMeComponent} = props
    return (
        <div className={styles.aboutBlock} id={'about'}>
            <div className={styles.aboutContainer}>
                <Roll>
                    <Title
                        span={aboutMeComponent.span}
                        h2={aboutMeComponent.title}
                    />
                </Roll>
                <div className={styles.aboutMeInfo}>
                    <div className={styles.textInfo}>
                        <Fade>
                            {/*<h2>{aboutMeComponent.h2}<span>{aboutMeComponent.name}</span>*/}
                            {/*</h2>*/}
                    </Fade>
                        <p>{aboutMeComponent.aboutMe}</p>
                    </div>
                    <div className={styles.infoBlock}>
                        {aboutMeComponent.contacts.map((el, index) => {
                            return (
                                <div key={index} className={styles.block}>
                                    <p className={styles.title}>{el.title}</p>
                                    <p className={styles.info}>{
                                        el.info === aboutMeComponent.contacts[1].info
                                            ? <a href={`mailto:${aboutMeComponent.contacts[1].info}`}>{el.info}</a>
                                            : el.info
                                    }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
