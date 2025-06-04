import { IconButton, Stack, Switch } from "@mui/material";
import { GridColDef, GridVisibilityOffIcon } from "@mui/x-data-grid";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteIcon, EditIcon } from "lucide-react";
import { updateStatus } from "../../../services/UserService";
import UserStatus from "./UserStatus";



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'name', headerName: 'Họ Tên', width: 200 },
    { field: 'phone', headerName: 'Số điện thoại', width: 200 },
    { field: 'email', headerName: 'Email', width: 200, },
    { field: 'address', headerName: 'Địa chỉ', width: 200, },
    { field: 'abc', headerName: 'Nhóm thành viên', width: 200, },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
            return <UserStatus params={params} />
        },
        sortable: false,
        filterable: false,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <Stack direction="row" spacing={1}>
                <IconButton
                    color="primary"
                    onClick={() => console.log('View user', params.row)}
                >
                    <GridVisibilityOffIcon />
                </IconButton>
                <IconButton
                    color="success"
                    onClick={() => console.log('Edit user', params.row)}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => console.log('Delete user', params.row)}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        ),
        sortable: false,
        filterable: false,
    },
];

export default columns