import React from 'react'
import Pagination from '@mui/material/Pagination';

import * as S from './styles'

const CustomPagination = ({ setPage }) => {
    const handlePageChange = (page) => {
        setPage(page)      
        window.scrollTo(0, 0)
    }
    
    return (
        <S.PaginationNave >
            <Pagination 
                count={100}
                onChange={(e) => handlePageChange(e?.target?.innerText)}
            />

        </S.PaginationNave>
    )
}

export default CustomPagination
