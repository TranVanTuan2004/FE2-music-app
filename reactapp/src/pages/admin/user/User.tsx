import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/admin/Breadcrumb/Breadcrumb';
import { DataGrid } from '@mui/x-data-grid';
import { pagination } from '../../../services/UserService'
import CustomErrorOverlay from '../../../components/admin/ErrorOverlay/ErrorOverlay';
import columns from './UserColumn';
import { Box, Button, FilledInput, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useQuery } from '@tanstack/react-query';
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        refetch();
    }, [paginationModel, refetch]);


    const rowCount = data?.meta.total

    return (
        <div>
            <Breadcrumb breadcrumb={breadcrumb} />
            <Button onClick={handleOpen} variant="contained" sx={{ mt: '12px' }}>Thêm User</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <form>
                        <div>
                            <TextField
                                label="With normal TextField"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                    },
                                }}
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                label="With normal TextField"
                                id="filled-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                    },
                                }}
                                variant="filled"
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <FilledInput
                                    id="filled-adornment-weight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                label="With normal TextField"
                                id="standard-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                    },
                                }}
                                variant="standard"
                            />
                            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                                <Input
                                    id="standard-adornment-weight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="standard-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                        </div>
                    </form>
                </Box>
            </Modal>

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

export default User;