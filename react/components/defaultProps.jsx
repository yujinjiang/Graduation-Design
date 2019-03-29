import propTypes from 'prop-types';

import React from 'react';
export default class DefaultProps extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        message: 'hello world'
    };

    static propTypes = {
        message: propTypes.string
    };

    render() {
        return (
            <div onClick={() => alert(123123)}>
                {this.props.message}
            </div>
        );
    }
}