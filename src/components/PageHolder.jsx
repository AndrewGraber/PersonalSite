import React from 'react';

import PageHome from './PageHome';
import PageAbout from './PageAbout';
import PagePortfolio from './PagePortfolio';
import PageContact from './PageContact';

class PageHolder extends React.Component {
    scrollHandler(event) {
        console.log(event);
    }

    render() {
        return (
            <div className="page-holder" onScroll={this.scrollHandler}>
                <PageHome />
                <PageAbout />
                <PagePortfolio />
                <PageContact />
            </div>
        );
    }
}

export default PageHolder;