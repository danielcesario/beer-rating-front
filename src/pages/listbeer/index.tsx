import React, { useEffect, useState } from 'react';
import { BeerCard } from '../../components/BeerCard';
import { BeerPage } from '../../model/BeerPage';
import { listBeers } from '../../service/BeerService';
import { PageContainer } from '../stiles';

const ListBeer: React.FC = () => {

  const [page, setPage] = useState<BeerPage>();
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const fetchBeers = async () => {
      const result = await listBeers();
      setPage(result);
      setIsLoad(false);
      console.log('---------')
    }
    fetchBeers();
  }, []);

  return (
    <PageContainer>
      {isLoad ? (
        <div className="loading">Loading</div>
      ) : (
          page?._embedded?.beers.map(beer => {
            return <BeerCard beer={beer} />
          })
        )}

    </PageContainer>)
}

export default ListBeer;