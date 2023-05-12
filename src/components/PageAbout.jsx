import React from 'react';

import { Parallax } from 'react-scroll-parallax';

class PageAbout extends React.Component {
    static xOffset = (window.innerWidth / 3.0);

    render() {

        return (
            <div className="page-container content-page about">
                <Parallax translateY={["0px", "0px"]} translateX={[`${PageAbout.xOffset}px`, `-30px`]}>
                    <h1>
                        About Me
                    </h1>
                </Parallax>
                <div className="content-container">
                    <p>
                        Hi, I'm Andrew!
                    </p>
                    <p>
                        I'm a problem solver and programmer with a B.S. Computer Science from Purdue University, and I'm passionate about using every tool at my disposal to improve
                        the world however I can.
                    </p>
                    <p>
                        I have 3 years' experience gathering requirements, designing, planning, and building web apps for internal use by hundreds of employees. I built web apps
                        in basic JavaScript/PHP (since our department could not get approval to install new software on our servers), a fully functional and secure RESTful API
                        (again from scratch, because we could not make use of frameworks like Laravel), and many other tools with little-to-no oversight. That doesn't include the
                        hundreds of hours I've spent learning new technologies for random side projects that are either private or not under source control.
                    </p>
                    <p>
                        Although a majority of my professional experience is related to web development, I am able to apply my skills to a broad range of roles. I have a strong
                        understanding of the principles of Computer Science, and can use that knowledge to adapt to pretty much any environment and thrive.
                    </p>
                    <p>
                        When it comes to labels, I generally don't consider myself a programmer, web developer, security analyst, etc. I view myself primarily as a problem solver&semi;
                        I always start a project by evaluating the problem and determining what technologies will provide the best solution. Because of this, although I am knowledgable
                        in a solid base of languages and frameworks, I often find myself learning a whole new technology to solve a novel problem.
                    </p>
                    <p>
                        Outside of work, I hold an eclectic variety of hobbies, including spending time with friends, hiking, camping, video games, 3D printing, baking, sewing, and crochet.
                    </p>
                    <p>
                        Keep on scrolling to have a look at some of the technologies I've used and projects I've worked on!
                    </p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        
    }
}

export default PageAbout;