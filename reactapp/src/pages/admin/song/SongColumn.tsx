import { IconButton, Stack, Switch } from "@mui/material";
import { GridColDef, GridVisibilityOffIcon } from "@mui/x-data-grid";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteIcon, EditIcon } from "lucide-react";
import { updateStatus } from "../../../services/UserService";



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'title', headerName: 'Bài hát', width: 200 },
    { field: 'genre', headerName: 'Thể loại', width: 200 },
    { field: 'duration', headerName: 'Thời lượng', width: 200, },
    { field: 'release_date', headerName: 'Ngày ra mắt', width: 200, },
    { field: 'image', headerName: 'Hình ảnh', width: 200, },
    { field: 'path', headerName: 'Audio', width: 200, },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
        renderCell: (params) => (
            <Stack direction="row" spacing={1}>
                <IconButton
                    color="primary"
                    onClick={() => console.log('View song', params.row)}
                >
                    <GridVisibilityOffIcon />
                </IconButton>
                <IconButton
                    color="success"
                    onClick={() => console.log('Edit song', params.row)}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    color="error"
                    onClick={() => console.log('Delete song', params.row)}
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