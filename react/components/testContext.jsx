import React from 'react';

import {
    Consumer
} from './provide';

export default class extends React.Component {
    render() {
        return (
            <Consumer>
                {value => <div>{value.month}</div>}
            </Consumer>
        );
    }
}