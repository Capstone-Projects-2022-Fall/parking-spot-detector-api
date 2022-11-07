import React from 'react';
import {
    TextFieldContainer
} from './textfield.styles';

const TextField = ({placeholder, special}) => {
    return (
        <TextFieldContainer>
            <input 
                type={special ? special : 'text'}
                placeholder={placeholder}
            />
        </TextFieldContainer>
    );
};

export default TextField;