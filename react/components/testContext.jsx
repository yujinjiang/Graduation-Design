import React from 'react';

import {
    inject
} from './provide';


@inject
export default class extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.injectProps.month
                }
            </div>
        );
    }
}