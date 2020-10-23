import React, { useEffect, useState } from 'react';
import { PageSummary } from '../../model/PageSummary';
import { NavButton } from '../NavButton';
import { PaginationBarContainer } from './styles';

export const PaginationBar:
  React.FC<{ pageSummary?: PageSummary, changeCurrentPage: any }> =
  ({ pageSummary, changeCurrentPage, children }) => {

    const [hasPrevious, setHasPrevious] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
      setCurrentPage(pageSummary!.number)

      if (currentPage + 1 < pageSummary!.totalPages) {
        setHasNext(true);
      } else {
        setHasNext(false);
      }

      if (currentPage > 0) {
        setHasPrevious(true);
      } else {
        setHasPrevious(false);
      }
    }, [pageSummary, currentPage]);

    return (
      <PaginationBarContainer>
        <NavButton disabled={!hasPrevious} action={() => changeCurrentPage(currentPage - 1)}>Prev</NavButton>
        <div className="nav-field">
          Page {(pageSummary?.number as number) + 1} of {pageSummary?.totalPages}
        </div>
        <NavButton disabled={!hasNext} action={() => changeCurrentPage(currentPage + 1)}>Next</NavButton>
      </PaginationBarContainer>
    )
  }