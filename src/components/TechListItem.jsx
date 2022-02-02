import React from 'react';

class TechListItem extends React.Component {
    render() {
        return (
            <div className="item">
                <div class="item-text">
                    <i class={this.props.iconclass}></i> {this.props.itemtext}
                </div>
            </div>
        );
    }
}

export default TechListItem;