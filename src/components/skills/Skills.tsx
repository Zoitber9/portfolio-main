import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from "../../common/title/Title";
import {SkillsComponentsType} from "../../app/state";
import {JackInTheBox} from "react-awesome-reveal";

type SkillsPropsType = {
    skillsComponent: SkillsComponentsType
}

export function Skills(props: SkillsPropsType) {

    const {skillsComponent} = props

    return (
        <div className={styles.skillsBlock} id={'skills'}>
            <div className={styles.skillsContainer}>
                <JackInTheBox>
                    <Title
                        span={skillsComponent.span}
                        h2={skillsComponent.title}
                    />
                </JackInTheBox>
                <div className={styles.skills}>
                    {skillsComponent.skills.map((el, index) => {
                        return (
                            <Skill
                                key={index}
                                svgName={el.svgName}
                                description={el.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
