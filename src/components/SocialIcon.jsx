import React from 'react';

class SocialIcon extends React.Component {

    constructor(props) {
        super(props);

        var offsetGap = ((window.innerWidth - 100) / 5);
        var new_xOffset = ((props.iconNum - 2) * offsetGap);
        this.state = { xOffset: new_xOffset };
    }

    render() {
        var classes = "social-icon " + this.props.iconSize;
        var iconClass = "fab fa-" + this.props.icon;

        return (
                <a className={classes} href={this.props.linkUrl} target="_blank" rel="noreferrer">
                    <i className={iconClass}></i>
                </a>
        );
    }
}

export default SocialIcon;