import React from 'react';
import { ButtonNavContainer } from './style';

export const NavButton: React.FC<{ func: any }> = ({ func, children }) => {
    return(
    <ButtonNavContainer>
        <button className="button" onClick={func}>{children}</button>
    </ButtonNavContainer>);
}
