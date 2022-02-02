import React from 'react';

import SocialIcon from './SocialIcon';

class SocialBar extends React.Component {
    render() {
        var iconSize = this.props.iconSize ? this.props.iconSize + "-icons" : "small-icons";
        return (
            <div className={"social-bar " + iconSize}>
                <SocialIcon iconNum={0} icon="facebook-f" linkUrl="https://www.facebook.com/andrewcgraber" iconSize={iconSize} />
                <SocialIcon iconNum={1} icon="twitter" linkUrl="https://twitter.com/AndrewCGraber" iconSize={iconSize} />
                <SocialIcon iconNum={2} icon="instagram" linkUrl="https://www.instagram.com/networkoverflow/" iconSize={iconSize} />
                <SocialIcon iconNum={3} icon="youtube" linkUrl="https://www.youtube.com/channel/UCtvCF8k2AUECaHsYgrNKJ1A" iconSize={iconSize} />
                <SocialIcon iconNum={4} icon="github" linkUrl="https://github.com/AndrewGraber/" iconSize={iconSize} />
            </div>
        );
    }
}

export default SocialBar;