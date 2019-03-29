import React from 'react';

export default class GreetIng extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        test: 1123
    };

    handleClick = e => {
        console.log(e);
    };

    render() {
        return (
            <div onClick={e =>  this.handleClick(e)}>
                {this.props.children}
                {this.state.test}
            </div>
        );
    }
}