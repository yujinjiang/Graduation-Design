import React from 'react';

export default class GreetIng extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        test: 1123
    };

    handleClick = () => {
        console.log(this.props);
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.children}
                {this.state.test}
            </div>
        );
    }
}