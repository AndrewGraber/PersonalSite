import React from 'react';

import { Parallax } from 'react-scroll-parallax';

import TechList from './TechList';
import TechListItem from './TechListItem';

class PagePortfolio extends React.Component {
    static xOffset = (window.innerWidth / 3.0);

    render() {
        return (
            <div className="page-container content-page portfolio">
                <Parallax translateY={["0px", "0px"]} translateX={[`${PagePortfolio.xOffset}px`, `-30px`]}>
                    <h1>
                        Portfolio
                    </h1>
                </Parallax>
                <div className="content-container">
                    <TechList listtitle="Some Languages I've Used">
                        <TechListItem iconclass="devicon-java-plain" itemtext="Java" />
                        <TechListItem iconclass="devicon-html5-plain" itemtext="HTML5" />
                        <TechListItem iconclass="devicon-css3-plain" itemtext="CSS3" />
                        <TechListItem iconclass="devicon-javascript-plain" itemtext="JS" />
                        <TechListItem iconclass="devicon-mysql-plain" itemtext="SQL" />
                        <TechListItem iconclass="devicon-php-plain" itemtext="PHP" />
                        <TechListItem iconclass="devicon-c-plain" itemtext="C" />
                        <TechListItem iconclass="devicon-cplusplus-plain" itemtext="C++" />
                        <TechListItem iconclass="devicon-python-plain" itemtext="Python" />
                        <TechListItem iconclass="devicon-csharp-plain" itemtext="C#" />
                        <TechListItem iconclass="devicon-ruby-plain" itemtext="Ruby" />
                    </TechList>
                    <TechList listtitle="Some Technologies I've Used">
                        <TechListItem iconclass="devicon-linux-plain" itemtext="Linux / UNIX" />
                        <TechListItem iconclass="devicon-nodejs-plain" itemtext="Node.js" />
                        <TechListItem iconclass="devicon-jquery-plain" itemtext="jQuery" />
                        <TechListItem iconclass="devicon-rails-plain" itemtext="Rails" />
                    </TechList>

                    <p style={{marginTop: '1em'}}>
                        Here are some of the projects I've worked on:
                    </p>
                    <ul className="portfolio-list">
                        <li>
                            <a href="sites/Restaurant/index.html" target="_blank" rel="noreferrer">Static Restaurant Site</a> - Built in a couple of hours as an example for a prospective client
                        </li>
                        <li>
                            <a href="https://github.com/AndrewGraber/LWJGL3D" target="_blank" rel="noreferrer">LWJGL3D</a> - A 3D Game/Rendering Framework I built with <a href="https://www.java.com/en/" target="_blank" rel="noreferrer">Java</a> and <a href="https://www.lwjgl.org/" target="_blank" rel="noreferrer">LWJGL</a>
                        </li>
                        <li>
                            <a href="https://github.com/BudasLounge/ModBot" target="_blank" rel="noreferrer">ModBot</a> - A fully modular, fully modifiable bot for Discord
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {

    }
}

export default PagePortfolio;