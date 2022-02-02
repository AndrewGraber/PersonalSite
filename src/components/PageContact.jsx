import React from 'react';

import { Parallax } from 'react-scroll-parallax';

class PageContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {copied: false};
    }

    static xOffset = (window.innerWidth / 3.0);

    render() {

        return (
            <div className="page-container content-page contact">
                <Parallax y={["0px", "0px"]} x={[`${PageContact.xOffset}px`, `-30px`]}>
                    <h1>
                        Contact
                    </h1>
                </Parallax>
                <div className="content-container">
                    <p>
                        The best way to reach me is by email. I'd love to chat about potential projects or opportunities!
                    </p>
                    <p>
                        Email: <a id="email" href="mailto:andrewcgraber@gmail.com" target="_blank" rel="noreferrer">andrewcgraber@gmail.com</a>
                    </p>
                    <div style={{height: '50vh'}}></div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        
    }
}

export default PageContact;