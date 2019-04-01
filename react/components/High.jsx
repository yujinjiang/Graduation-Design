import React from 'react';

@registerLanguage
export default class SayYes extends React.PureComponent {
    render() {
        const word = this.props.language  === 'en' ? 'hello' : '你好';
        return (
            <div onClick={this.props.toggleLanguage}>
                {word}
            </div>
        );
    }
}

function registerLanguage(component) {

    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                language: 'en'
            };
        }

        toggleLanguage = () => {
            this.setState(({language}) => {
                return {
                    language: language === 'en' ? 'cn' : 'en'
                };
            });
        };

        render() {
            const Component = component;
            return <Component {...this.state} toggleLanguage={this.toggleLanguage} />;
        }
    }
}