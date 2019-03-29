import React from 'react';

export default class Form extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        const  {
            name,
            age,
            onChange
        }  = this.props;

        return (
            <form>
                <input type="text" value={name} placeholder="请输入你的名称" onChange={event => onChange(event, 'name')} />
                <input type="text" value={age} placeholder="请输入你的年龄" onChange={event => onChange(event, 'age')} />
            </form>
        );
    }
}