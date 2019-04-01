import React from 'react';

export default class extends React.PureComponent {
    render() {
        return (
            <section>
                <h1>hello world</h1>
                <main>
                    {
                        this.props.render()
                    }
                </main>
            </section>
        )
    }
}