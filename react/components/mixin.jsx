import React from 'react';
import superagent from 'superagent';

export default class extends React.PureComponent {
    state = {
        lang: 'en',
        loginStatus: false
    };

    componentDidMount() {
        console.log(this.login);
        this.login()
            .then(res => {
                this.setState({
                    loginStatus: false
                });
            })
    }

    login = () => {
        return Promise.resolve();
    };

    getName() {
        console.log('name is yujinjiang');
    }
}