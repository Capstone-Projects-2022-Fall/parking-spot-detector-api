import React from 'react';

import { 
    CatalogMain,
    CatalogButton
} from './catalog.styles';

const Catalog = () => {
    return (
        <CatalogMain>
            <b>Hello, test user</b>
            <br/><br/>
            <CatalogButton>
                <input
                    value='Check cameras'
                    type='button' 
                    onClick={() => {
                        window.open('/profile/cameras', '_self');
                    }}
                />
            </CatalogButton>
        </CatalogMain>
    );
};

export default Catalog;
