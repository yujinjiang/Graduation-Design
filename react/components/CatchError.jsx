import React from 'react';

export default class extends React.PureComponent {

    state = {
        hasError: false
    };

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error, 'getDerivedStateFromError');
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}