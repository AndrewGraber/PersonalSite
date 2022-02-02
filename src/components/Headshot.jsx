import React from 'react';

class Headshot extends React.Component {
    render() {
        return (
            <div className="headshot"></div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
}

export default Headshot;