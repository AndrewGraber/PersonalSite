import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import PageHolder from './PageHolder';

class MainComponent extends React.Component {
    render() {
        return (
            <ParallaxProvider>
                <div className="App">
                    <PageHolder />
                </div>
			</ParallaxProvider>
        );
    }
}

export default MainComponent;