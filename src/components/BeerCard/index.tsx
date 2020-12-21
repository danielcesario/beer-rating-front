import React from 'react';
import { Beer } from '../../model/Beer';
import { Tag } from '../Tag';
import { BeerCardContainer } from './styles';

export const BeerCard: React.FC<{beer: Beer}> = ({children, beer}) => {
  return (
  <BeerCardContainer data-testid="beer-card">
    <div className="header">
      <h1 className="title" data-testid="beer-card-title">{beer.name}</h1>
    </div>
    <div className="body">
      <div className="image"><img src={beer.imageUrl} alt={beer.name} data-testid="beer-card-img" /></div>
      <div className="description" data-testid="beer-card-description">{beer.description}</div>
    </div>
    <div className="footer">
      <Tag className="tag type" color="darkOrange">{beer.type}</Tag>
      <Tag className="tag country">{beer.country}</Tag>
      <Tag className="tag alcohol-volume" color="darkRed">{beer.alcoholVolume}</Tag>     
      <div className="rating"></div>
    </div>
  </BeerCardContainer>
  );
}