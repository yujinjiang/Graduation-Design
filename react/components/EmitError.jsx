import React from 'react';

export default class extends React.PureComponent {

    state = {
        age: 12312
    };

    error() {
        console.log(unResolved);
    }

    render() {
        return <div onClick={this.error}>
            hello error
        </div>
    }
}