import styles from './SkillsInfo.module.scss'
import Typewriter from 'typewriter-effect';

type SkillsInfoPropsType = {
    arrSkills: string[]
}

export function SkillsInfo(props: SkillsInfoPropsType) {
    return (
        <h2 className={styles.skillsInfo}>
            <Typewriter
                options={{
                    strings: props.arrSkills,
                    autoStart: true,
                    loop: true,
                }}
            />
        </h2>
    )
}