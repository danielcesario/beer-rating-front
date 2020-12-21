import React from 'react';
import { BeerCard } from './';
import { render, screen } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import { Beer } from '../../model/Beer';

describe('<BeerCard /> Render', () => {

  const beer: Beer = {
    id: 1,
    name: "Beer Test 1",
    type: "Lager",
    imageUrl: "test1.jpg",
    alcoholVolume: "5.5",
    description: "Beer Test 1 Description",
    country: "Brasil"
  }

  it('Render with complete object', () => {
    act(() => {
      render(<BeerCard beer={beer} />)
    });

    expect(screen.getByTestId('beer-card-title').innerHTML).toBe(beer.name);
    expect(screen.getByTestId('beer-card-description').innerHTML).toBe(beer.description);
    expect(screen.getAllByTestId('tag')).toHaveLength(3);
    expect(screen.getAllByTestId('tag')[0].innerHTML).toBe(beer.type);
    expect(screen.getAllByTestId('tag')[1].innerHTML).toBe(beer.country);
    expect(screen.getAllByTestId('tag')[2].innerHTML).toBe(beer.alcoholVolume);
  });
})
