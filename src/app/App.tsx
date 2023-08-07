import React, {useState} from 'react';
import './App.scss';
import {Header} from "../components/header/Header";
import {Main} from "../components/main/Main";
import {Skills} from "../components/skills/Skills";
import {MyProjects} from "../components/myProjects/MyProjects";
import {DistantWork} from "../components/distantWork/DistantWork";
import {Contacts} from "../components/contacts/Contacts";
import {Footer} from "../components/footer/Footer";
import {state} from "./state"
import {AboutMe} from "../components/aboutMe/AboutMe";

function App() {

    const [language, setLanguage] = useState<LanguageType>('en')
    const {
        headerComponent,
        mainComponent,
        aboutMeComponent,
        skillsComponent,
        contactsComponent,
        projectsComponent,
        footerComponent,
        distantWorkComponent
    } = state[language]

    return (
        <div className="App">
            <Header
                headerComponent={headerComponent}
                callback={setLanguage}
            />
            <Main mainComponent={mainComponent}/>
            <AboutMe aboutMeComponent={aboutMeComponent}/>
            <Skills skillsComponent={skillsComponent}/>
            <div id={'projects'}>
                <MyProjects projectsComponent={projectsComponent}/>
                <DistantWork distantWorkComponent={distantWorkComponent}/>
            </div>
            <Contacts contactsComponent={contactsComponent}/>
            <Footer footerComponent={footerComponent} contactsComponent={contactsComponent}/>
        </div>
    );
}

export default App;

//type
export type LanguageType = 'en' | 'ru'