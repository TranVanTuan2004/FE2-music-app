import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/admin/Breadcrumb/Breadcrumb';
import { DataGrid } from '@mui/x-data-grid';
import { pagination } from '../../../services/UserService'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import CustomErrorOverlay from '../../../components/admin/ErrorOverlay/ErrorOverlay';
import columns from './UserColumn';
import { Paper } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import UserColumn from './UserColumn';


const User = () => {
    const breadcrumb = {
        title: 'Quản lý thành viên',
        route: '/admin/user/index'
    }
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 0
    const [paginationModel, setPaginationModel] = useState({ page: currentPage, pageSize: 10 });
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['users', paginationModel.page, paginationModel.pageSize],
        queryFn: () => pagination(paginationModel.page + 1, paginationModel.pageSize),
    });

    // useEffect(() => {
    //     setSearchParams({ page: paginationModel.page.toString() });
    // }, [searchParams])

    useEffect(() => {
        // navigate(`?page=${paginationModel.page}`)
        refetch();
    }, [paginationModel, refetch]);


    const rowCount = data?.meta.total

    return (
        <div>
            <Breadcrumb breadcrumb={breadcrumb} />
            <Paper sx={{ height: 'auto', width: '100%', mt: 4 }}>
                <DataGrid
                    rows={data ? data.users : []}
                    columns={columns}
                    rowCount={rowCount}
                    paginationMode='server'
                    pageSizeOptions={[10, 20, 50, 100]}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    loading={isLoading}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{ border: 0 }}
                    slots={{
                        noRowsOverlay: error ? CustomErrorOverlay : undefined,
                    }}
                />
            </Paper>
        </div>
    )
}

export default User;