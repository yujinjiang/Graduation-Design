import React from 'react';


export function GetText(props) {

    console.log(props);

    return (
        <h1>
            {props.text}
        </h1>
    );
}

export const ComputedGetText = React.memo(GetText);