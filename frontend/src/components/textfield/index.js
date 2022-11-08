import React from 'react';
import {
    TextFieldContainer
} from './textfield.styles';

const TextField = ({placeholder, special, value, onChange}) => {
    return (
        <TextFieldContainer>
            <input 
                type={special ? special : 'text'}
                id={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </TextFieldContainer>
    );
};

export default TextField;