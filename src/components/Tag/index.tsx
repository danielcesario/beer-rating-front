import React from 'react';
import { TagContainer } from './styles';

export const Tag: React.FC<{className?: string, color?: string}> = 
({children, className="tag-component", color="Grey"}) => {
    return <TagContainer className={className} color={color} data-testid="tag">{children}</TagContainer>
}
