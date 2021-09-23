import './MyPagination.css'
import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const MyPagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePagination(totalPages)

    return (
        <div className={'page-wrapper'}>
            {pagesArray.map(p =>
                <span
                    className={page === p ? 'page-current' : 'page'}
                    key={p}
                    onClick={() => changePage(p)}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default MyPagination;