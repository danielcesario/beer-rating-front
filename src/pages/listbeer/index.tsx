import React, { useEffect, useState } from 'react';
import { BeerCard } from '../../components/BeerCard';
import { PaginationBar } from '../../components/PaginationBar';
import { BeerPage } from '../../model/BeerPage';
import { listBeers } from '../../service/BeerService';
import { PageContainer, Row } from '../stiles';

const ListBeer: React.FC = () => {

  const [page, setPage] = useState<BeerPage>();
  const [isLoad, setIsLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    load(currentPage);
  }, [currentPage]);

  const load = async (currentPage?: number) => {
    const result = await listBeers(currentPage||null);
    await setPage(result);
    await setIsLoad(false);
  }

  const changeCurrentPage = (change: number) => {
    setIsLoad(true);
    setCurrentPage(change);
  }

  return (
    <PageContainer>
      {isLoad ? (
        <div className="loading" data-testid="loading-div">Loading</div>
      ) : (
          <>
            <Row data-testid="beer-row-div">
              {page?._embedded?.beers.map(beer => {
                return <BeerCard key={beer.id} beer={beer} />
              })}
            </Row>
            <Row data-testid="pagination-row-div">
              <PaginationBar pageSummary={page?.page} changeCurrentPage={(cp: number) => changeCurrentPage(cp)} />
            </Row>
          </>
        )
      }

    </PageContainer>)
}

export default ListBeer;