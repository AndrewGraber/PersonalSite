import React from 'react';

class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        var initialState = {
            writerIndex: 0,
            typeIntervalRef: null,
        };

        initialState.typeSpeed = props.typeSpeed ? props.typeSpeed : 300;

        this.state = initialState;
    }

    // Increments value of this.state.writerIndex by 1, causing a re-render which will reveal one more letter
    addLetter() {
        this.setState({ writerIndex: this.state.writerIndex + 1 }, () => {
            if(this.state.writerIndex >= this.props.content.length) {
                clearInterval(this.state.typeIntervalRef);
                this.setState({ typeIntervalRef: null });
            }
        });
    }

    start() {
        var typeRef = setInterval((self) => self.addLetter(), this.state.typeSpeed, this);
        this.setState({ typeIntervalRef: typeRef });
    }
    
    render() {
        var classes = "typewriter";
        if(this.props.size && this.props.size === "large") {
            classes += " large";
        }

        var contentToPrint = this.props.content.substring(0, this.state.writerIndex);
        var letters = contentToPrint.split("");

        return (
            <div className={classes}>
                { letters.map((letter, index) => {
                    var safeLetter = letter === " " ? '\u00A0' : letter;
                    return <span key={index}>{safeLetter}</span>;
                } )}
            </div>
        );
    }
}

export default Typewriter;