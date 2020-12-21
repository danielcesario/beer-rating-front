import React from 'react';
import ListBeer from './index';

import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const mockBeerResult: any = {
  page: {
    size: 1,
    totalElements: 1,
    totalPages: 1,
    number: 1
  },
  _embedded: {
    beers: [
      {
        id: 1,
        name: "Beer Test 1",
        type: "Lager",
        imageUrl: "test1.jpg",
        alcoholVolume: "5.5",
        description: "Beer Test 1 Description",
        country: "Brasil"
      }, 
      {
        id: 2,
        name: "Beer Test 2",
        type: "Lager",
        imageUrl: "test2.jpg",
        alcoholVolume: "2.5",
        description: "Beer Test 2 Description",
        country: "Brasil"
      }
    ]
  }
};

describe('<ListBeer /> Render', () => {

  it('Render correctly with loading div', () => {
    act(() => {
      render(<ListBeer />);
    });

    expect(screen.queryAllByTestId('beer-row-div')).toHaveLength(0);
    expect(screen.queryAllByTestId('pagination-row-div')).toHaveLength(0);

    expect(screen.getByTestId('loading-div')).toBeInTheDocument();
    expect(screen.getByTestId('loading-div')).toHaveTextContent('Loading')
  });


  it('Render correctly with mock service result', async () => {    
    const spyListBeers = jest.spyOn(require('../../service/BeerService'), 'listBeers');
    spyListBeers.mockReturnValue(mockBeerResult);

    await act(async () => {
      render(<ListBeer />);
    });

    expect(screen.queryAllByTestId('loading-div')).toHaveLength(0);

    expect(screen.getByTestId('beer-row-div')).toBeInTheDocument();
    expect(screen.getAllByTestId('beer-card')).toHaveLength(2);
    expect(screen.getByTestId('pagination-row-div')).toBeInTheDocument();
  });

});