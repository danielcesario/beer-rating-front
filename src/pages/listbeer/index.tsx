import React, { useEffect, useState } from 'react';
import { BeerCard } from '../../components/BeerCard';
import { NavButton } from '../../components/NavButton';
import { BeerPage } from '../../model/BeerPage';
import { listBeers } from '../../service/BeerService';
import { PageContainer } from '../stiles';

const ListBeer: React.FC = () => {

  const [page, setPage] = useState<BeerPage>();
  const [isLoad, setIsLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchBeers = async () => {
      const result = await listBeers(currentPage);
      setPage(result);
      setIsLoad(false);
    }
    fetchBeers();
  }, [currentPage]);

  const back = () => {
    setCurrentPage(currentPage - 1);
  }

  const next = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <PageContainer>
      {isLoad ? (
        <div className="loading">Loading</div>
      ) : (
          page?._embedded?.beers.map(beer => {
            return <BeerCard beer={beer} />
          })
        )}

      <div>
        <NavButton func={back}>Back</NavButton>
        <NavButton func={next}>Next</NavButton>
      </div>

    </PageContainer>)
}

export default ListBeer;