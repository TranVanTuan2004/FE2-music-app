import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/admin/Breadcrumb/Breadcrumb';
import { DataGrid } from '@mui/x-data-grid';
import { pagination } from '../../../services/UserService'
import CustomErrorOverlay from '../../../components/admin/ErrorOverlay/ErrorOverlay';
import { Box, Button, FilledInput, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useQuery } from '@tanstack/react-query';
import columns from './SongColumn';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Song = () => {
    const breadcrumb = {
        title: 'Quản lý thành viên',
        route: '/admin/song/index'
    }
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 0
    const [paginationModel, setPaginationModel] = useState({ page: currentPage, pageSize: 10 });
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['songs', paginationModel.page, paginationModel.pageSize],
        queryFn: () => pagination(paginationModel.page + 1, paginationModel.pageSize),
    });


    useEffect(() => {
        refetch();
    }, [paginationModel, refetch]);


    const rowCount = data?.meta.total

    return (
        <div>
            <Breadcrumb breadcrumb={breadcrumb} />
            <Paper sx={{ height: 'auto', width: '100%', mt: 2 }}>
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
        </div >
    )
}

export default Song;