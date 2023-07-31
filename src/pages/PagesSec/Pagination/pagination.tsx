import { usePagination, DOTS } from './usePagination';
import React from 'react';
import classnames from 'classnames';
import '../Pagination/pag.css' ;


const Pagination = (props: any) => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
      } = props;

      const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      }) as [];

      if (currentPage === 0 || paginationRange.length < 2) {
        return null;
      }

      const onNext = () => {
        onPageChange(currentPage + 1);
      };

      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };

      let lastPage = paginationRange[paginationRange.length - 1];

      return(

            <ul 
            className={classnames('pagination-container flex justify-center', 
            { [className]: className })}
            >
            <li
        className={classnames('pagination-item relative flex block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white', {
        disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item flex relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white dots">&#8230;</li>;
        }
        return (
          <li
            className={classnames('pagination-item flex relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item flex relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
    
}
export default Pagination ;