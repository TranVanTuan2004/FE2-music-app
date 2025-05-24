import React, { useState } from "react";
import {
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    ListItemIcon,
    Divider,
    Snackbar,
    Alert,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import HelpOutline from "@mui/icons-material/HelpOutline";
import FileDownload from "@mui/icons-material/FileDownload";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IUser } from "../../interfaces/IUser";
import { logout } from "../../services/AuthService";
import { toast } from "react-toastify";
import { localUser } from "../../utils/localUser";
import { setAuthLogout } from "../../redux/slice/authSlice";

export default function UserMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuClick = (label: any) => {
        setSnackbarMessage(`${label} - Tính năng đang phát triển`);
        setSnackbarOpen(true);
        handleClose();
    };

    const handleLogout = async () => {
        // Xử lý đăng xuất ở đây
        const data = await logout();
        if (data) {
            dispatch(setAuthLogout());
            toast.success('Đăng xuất thành công');
            navigate('/');
            handleClose();
        } else {
            toast.error('Token đã hết hạn');
        }
    };

    return (
        <>
            {/* Avatar Button */}
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>{user?.name?.slice(0, 1)}</Avatar>
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        mt: 1.5,
                        minWidth: 200,
                        backgroundColor: "#2a2a2a",
                        color: "white",
                        "& .MuiMenuItem-root": {
                            "&:hover": {
                                backgroundColor: "#3a3a3a",
                            },
                        },
                    },
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem onClick={() => handleMenuClick("Tài khoản")}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    Tài khoản
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link to={'/profile'}>Hồ sơ</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("Hỗ trợ")}>
                    <ListItemIcon>
                        <HelpOutline fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    Hỗ trợ
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("Tải xuống")}>
                    <ListItemIcon>
                        <FileDownload fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    Tải xuống
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("Cài đặt")}>
                    <ListItemIcon>
                        <Settings fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    Cài đặt
                </MenuItem>
                <Divider sx={{ backgroundColor: "#444" }} />
                {user ? <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <button>Đăng xuất</button>
                </MenuItem> : <MenuItem >
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Link to={'/auth/login'}>Đăng nhập</Link>
                </MenuItem>}

            </Menu>

            {/* Snackbar */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    severity="info"
                    variant="filled"
                    onClose={() => setSnackbarOpen(false)}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
