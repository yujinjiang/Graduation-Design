import React from 'react';
export default class Text extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mes: 'hello world'
        };
    }

    render() {
        return (
            <div>
                {this.state.mes}
            </div>
        );
    }
}