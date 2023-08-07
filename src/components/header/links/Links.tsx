import React, {FC} from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {LinksType} from "../../../app/state";
import {LanguageType} from "../../../app/App";

type LinksPropsType = {
    links: LinksType[]
    callback?: (language: LanguageType) => void
    // language?: LanguageType
}

export const Links: FC<LinksPropsType> = ({links, callback}) => {

    // const onClickHandler = (language: LanguageType) => {
    //     callback && callback(language)
    // }

    return (
        <div className={styles.links}>
            {links.map((el, index) => {
                return (
                    <a  key={index} href={el.href} target="_blank">
                        <SvgSelector svgName={el.svgName} />
                    </a>
                )
            })}
            {/*{callback &&*/}
            {/*    <div className={styles.language}>*/}
            {/*    <span*/}
            {/*        onClick={() => onClickHandler("en")}*/}
            {/*        className={language === "en" ? styles.active : ''}*/}
            {/*    >en </span>*/}
            {/*        |*/}
            {/*        <span onClick={() => onClickHandler("ru")}*/}
            {/*              className={language === "ru" ? styles.active : ''}*/}
            {/*        > ua</span>*/}
            {/*    </div>*/}
            {/*}*/}

        </div>
    );
}
