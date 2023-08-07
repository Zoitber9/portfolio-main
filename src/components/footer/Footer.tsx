import React, {FC} from 'react';
import styles from './Footer.module.scss'
import {ContactsComponentType, FooterComponentType} from "../../app/state";
import {Links} from "../header/links/Links";

type FooterPropsType = {
    footerComponent: FooterComponentType
    contactsComponent: ContactsComponentType
}

export const Footer: FC<FooterPropsType> = ({footerComponent, contactsComponent}) => {
    return (
        <footer className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <Links links={contactsComponent.contactsLinks}/>
                <p>{footerComponent.copyright}</p>
            </div>
        </footer>
    );
}
