import React, {FC} from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {LinksType} from "../../../app/state";
import {LanguageType} from "../../../app/App";

type LinksPropsType = {
    links: LinksType[]
    callback?: (language: LanguageType) => void
}

export const Links: FC<LinksPropsType> = ({links, callback}) => {


    return (
        <div className={styles.links}>
            {links.map((el, index) => {
                return (
                    <a key={index} href={el.href} target="_blank">
                        <SvgSelector svgName={el.svgName}/>
                    </a>
                )
            })}

        </div>
    );
}
