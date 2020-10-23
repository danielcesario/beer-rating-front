import React, { useEffect, useState } from 'react';
import { BeerCard } from '../../components/BeerCard';
import { PaginationBar } from '../../components/PaginationBar';
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

  const changeCurrentPage = (change: number) => {
    setIsLoad(true);
    setCurrentPage(change);    
  }

  return (
    <PageContainer>
      {isLoad ? (
        <div className="loading">Loading</div>
      ) : (
          <>
            {page?._embedded?.beers.map(beer => <BeerCard beer={beer} />)}
            <PaginationBar pageSummary={page?.page} changeCurrentPage={(cp: number) => changeCurrentPage(cp)} />
          </>
        )}

    </PageContainer>)
}

export default ListBeer;