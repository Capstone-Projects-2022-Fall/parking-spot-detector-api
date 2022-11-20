import React from 'react';
import {
    TextFieldContainer
} from './textfield.styles';

const TextField = ({
    placeholder, type, name, onChange, formProps
}) => {
    return (
        <TextFieldContainer>
            <input 
                type={type ? type : 'text'}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete='off'
                {...formProps}
            />
        </TextFieldContainer>
    );
};

export default TextField;