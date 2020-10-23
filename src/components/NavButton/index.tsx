import React from 'react';
import { NavButtonContainer } from './style';

export const NavButton: React.FC<{ action: any, disabled: boolean }> = ({ action, disabled, children }) => {
    return(
    <NavButtonContainer>
        <button disabled={disabled} className="button" onClick={action}>{children}</button>
    </NavButtonContainer>);
}
