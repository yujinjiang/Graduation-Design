import React from 'react';
const {
    Provider,
    Consumer
}  = React.createContext();

const inject = (Component) => {
    return function (props) {
        return (
            <Consumer>
                {value => <Component {...props} injectProps={value} />}
            </Consumer>
        );
    };
};


export {
    Provider,
    Consumer,
    inject
};