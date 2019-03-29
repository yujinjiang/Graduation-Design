import React from 'react';

export default class TestList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        )
    }
}