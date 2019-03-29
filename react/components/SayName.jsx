import React from 'react';
import Mixin from './mixin';

export default class extends Mixin {
    constructor(props) {
        super(props);

        // mixin state
        this.state = {
            ...this.state,
            text: 'hello mixin'
        };
    }

    componentDidMount() {
        // mixin hooks
        super.componentDidMount();
    }

    render() {
        return (
            <div onClick={this.getName}>
                {this.state.text}
            </div>
        );
    }
}