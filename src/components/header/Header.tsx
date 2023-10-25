import React, {FC} from 'react';
import {Nav} from './nav/Nav';
import styles from './Header.module.scss'
import {Links} from "./links/Links";
import {HeaderComponentType} from "../../app/state";
import {LanguageType} from "../../app/App";

type HeaderPropsType = {
    headerComponent: HeaderComponentType
    callback: (language: LanguageType) => void
    // language: LanguageType
}

export const Header: FC<HeaderPropsType> = ({headerComponent, callback}) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>

                <Nav nav={headerComponent.nav} menuName={headerComponent.menuName}/>
                <Links
                    links={headerComponent.headerLinks}
                    callback={callback}

                />
            </div>
        </header>
    );
}
