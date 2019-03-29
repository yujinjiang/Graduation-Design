import React from 'react';
import GreetIng from './components/greeting';
import TestList from './components/list';
import Form from './components/form';

export default class Text extends React.PureComponent {

    state = {
        mes: 'hello world',
        num: 1,
        age: '',
        name: ''
    };

    onChange = (e, type) => {
        console.log(e, type);
        const changeStates = {};
        changeStates[type] = e.target.value;
        this.setState(changeStates);
    };

    componentDidMount() {
        console.log('mount');
    }

    render() {

        const greetingProps = {
            text: 1123,
            age: 23,
            say: 'hello world'
        };

        const listProps = {
            items: [1, 2, 3, 4, 5, 6]
        };

        const formProps = {
            age: this.age,
            name: this.name,
            onChange: this.onChange
        };

        return (
            <div>
                {this.state.mes}
                {this.state.num}
                <GreetIng {...greetingProps}>
                    <div>
                        hello text
                    </div>
                </GreetIng>
                <TestList {...listProps} />
                <Form {...formProps} />
            </div>
        );
    }
}