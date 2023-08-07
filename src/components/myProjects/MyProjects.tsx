import React from 'react';
import styles from './MyProjects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/title/Title';
import {ProjectsComponentsType} from "../../app/state";
import {Zoom} from "react-awesome-reveal";

type ProjectsPropsType = {
    projectsComponent: ProjectsComponentsType
}

export function MyProjects(props: ProjectsPropsType) {

    const {projectsComponent} = props

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Zoom>
                    <Title
                        span={projectsComponent.span}
                        h2={projectsComponent.title}
                    />
                </Zoom>
                <div className={styles.projects}>
                    {projectsComponent.projects.map((el, index) => {
                        return (
                            <Project
                                key={index}
                                title={el.title}
                                img={el.img}
                                description={el.description}
                                href={el.href}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
