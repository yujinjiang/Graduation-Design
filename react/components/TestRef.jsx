import React from 'react';
export default class extends React.PureComponent {

    myRefs = React.createRef();

    componentDidMount() {
        console.log(this.myRefs);
    }

    render() {
        return (
            <div ref={this.myRefs}>
                hello refs
            </div>
        );
    }
}