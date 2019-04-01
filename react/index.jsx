import React from 'react';
import GreetIng from './components/greeting';
import TestList from './components/list';
import Form from './components/form';
import Confirm  from './components/conform';
import SayName from './components/SayName';
import DefaultProps from './components/defaultProps';
import TestRefs from './components/TestRef';
import TestContext from './components/testContext';
import Alert from './components/Portals';
import CatahError from './components/CatchError';
import EmitError from './components/EmitError';
import WebComponent from './components/webComponent';
import SayYes from './components/High';
import TestFordwords from './components/fordwords';
import RenderProps from './components/renderProps';

import {
    GetText,
    ComputedGetText
} from './components/memo';

import {
    Provider
} from './components/provide';

export default class Text extends React.Component {

    state = {
        mes: 'hello world',
        num: 1,
        age: '',
        name: '',

        text: 'hello memo'
    };

    onChange = (e, type) => {
        console.log(e, type);
        const changeStates = {};
        changeStates[type] = e.target.value;
        this.setState(changeStates);
    };

    changeText = () => {
        console.log(12312);
        this.setState({
            text: 'hello memo'
        });
    };

    componentDidMount() {
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

        const confirmProps = {
            title: 'hello confirm',
            content: 'hello content',
            cancelText: 'hello cancel',
            ensureText: 'ensure'
        };

        const provideData = {
            month: 3,
            year: 2019
        };

        const alertProps = {
            title: 'title',
            content: 'content'
        };

        const renderProps = {
            list: [1, 2, 3, 4],
            render() {
                return (
                    <ul>
                        {
                            this.list.map(item => <li key={item}>{item}</li>)
                        }
                    </ul>
                );
            }
        };

        const testMemoProps = {
            text: this.state.text
        };

        return (
            <Provider value={provideData}>
                {this.state.mes}
                {this.state.num}
                <GreetIng {...greetingProps}>
                    <div>
                        hello text
                    </div>
                </GreetIng>
                <TestList {...listProps} />
                <Form {...formProps} />
                <Confirm {...confirmProps} />
                <SayName />
                <DefaultProps />
                <TestRefs />
                <TestContext />
                <Alert {...alertProps} />
                <CatahError>
                    <EmitError />
                </CatahError>
                <WebComponent />
                <SayYes />
                <TestFordwords />
                <RenderProps {...renderProps} />
                <GetText {...testMemoProps} />
                <ComputedGetText {...testMemoProps} />
                <div onClick={this.changeText}>change mome</div>
            </Provider>
        );
    }
}