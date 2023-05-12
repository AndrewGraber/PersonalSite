import React from 'react';

class TechListItem extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="item-text">
                    <i className={this.props.iconclass}></i> {this.props.itemtext}
                </div>
            </div>
        );
    }
}

export default TechListItem;