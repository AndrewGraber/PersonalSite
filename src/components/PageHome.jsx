import React from 'react';

import Headshot from './Headshot';
import SocialBar from './SocialBar';
import ScrollIndicator from './ScrollIndicator';
import Typewriter from './Typewriter';

import { withController } from 'react-scroll-parallax';

class PageHome extends React.Component {
    constructor(props) {
        super(props);

        this.topTypewriter = React.createRef();
        this.bottomTypewriter = React.createRef();
    }

    render() {
        return (
            <div className="page-container home">
                <Headshot />
                    <Typewriter ref={this.topTypewriter} size="large" content="Andrew Graber" typeSpeed={40} />
                    <Typewriter ref={this.bottomTypewriter} content="Problem Solver &amp; Programmer" typeSpeed={30} />
                <SocialBar iconSize="large" />
                <ScrollIndicator />
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => document.querySelector('div.loading-veil').classList.add('loaded'), 250);
        setTimeout((self) => { self.topTypewriter.current.start() }, 500, this);
        setTimeout((self) => { self.bottomTypewriter.current.start() }, 1500, this);

        setTimeout((self) => { self.props.parallaxController.update() }, 50, this);
    }
}

export default withController(PageHome);