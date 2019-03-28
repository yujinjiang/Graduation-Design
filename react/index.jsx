import React from 'react';
import GreetIng from './components/greeting';

export default class Text extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mes: 'hello world',
            num: 1
        };

        // setInterval(() => {
        //     this.setState({
        //         num: this.state.num + 1
        //     });
        // }, 1000);
    }

    render() {

        const greetingProps = {
            text: 1123,
            age: 23,
            say: 'hello world'
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
            </div>
        );
    }
}