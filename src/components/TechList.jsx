import React from 'react';

class TechList extends React.Component {
    render() {
        return (
            <div className="tech-list container">
                <div className="h-line"></div>
                <div className="title-container">
                    <div className="title">
                        {this.props.listtitle}
                    </div>
                </div>
                <div className="h-line gray"></div>
                <div class="item-container">
                    {this.props.children}
                </div>
                <div className="h-line"></div>
            </div>
        );
    }
}

export default TechList;