import React from 'react';
import {
    SettingsContainer,
    SettingsTitle
} from './settings.styles';
import {
    //FlexColumn,
    FlexRow
} from '../../app.styles';

export default function SettingsPage() {
    return (
        <SettingsContainer>
            <SettingsTitle>
                Settings
            </SettingsTitle>
            <FlexRow>
                <div>
                    A
                </div>
                <div>
                    B
                </div>
            </FlexRow>
        </SettingsContainer>
    );
}