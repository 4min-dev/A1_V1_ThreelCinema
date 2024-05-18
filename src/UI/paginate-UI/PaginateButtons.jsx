import React from 'react';
import { usePaginate } from '../../hooks/usePaginate';
import { PrevPagePaginateButton } from './PrevPagePaginateButton';
import { NextPagePaginateButton } from './NextPagePaginateButton';
import { EnterExectPage } from './EnterExectPage';

export const PaginateButtons = ({ globalPaginateFilters, setPaginateFilters, moviesData }) => {
    const totalArr = usePaginate(globalPaginateFilters.totalPages, globalPaginateFilters.currPage, moviesData);

    return (
        <div className='paginateButtonsContainer'>
            <PrevPagePaginateButton disabled={globalPaginateFilters.currPage < 2} setPaginateFilters={setPaginateFilters} globalPaginateFilters={globalPaginateFilters} />
            {totalArr.length > 0 && totalArr.map((n) => 
                <button
                    disabled={globalPaginateFilters.currPage === n}
                    key={n}
                    className={'paginateButton'}
                    type='button'
                    onClick={() => setPaginateFilters({ ...globalPaginateFilters, currPage: n })}>
                    {n}
                </button>
            )}
            <EnterExectPage setPaginateFilters={setPaginateFilters} globalPaginateFilters={globalPaginateFilters} />
            <NextPagePaginateButton disabled={globalPaginateFilters.currPage === globalPaginateFilters.totalPages} setPaginateFilters={setPaginateFilters} globalPaginateFilters={globalPaginateFilters} />
        </div>
    );
};
