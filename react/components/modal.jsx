import React from 'react';
export default class Modal extends React.PureComponent {

    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}