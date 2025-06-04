import { Avatar, IconButton, Menu, MenuItem, Stack, TextField, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SignOutButton } from '@toolpad/core/Account';
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { LogOut, LogOutIcon, SearchIcon, UserRoundPenIcon } from 'lucide-react';
import React from 'react';
const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        // Điều hướng đến trang profile hoặc xử lý gì đó
        console.log('Xem profile');
        handleClose();
    };

    const handleLogout = () => {
        // Gọi API logout hoặc xóa token ở đây
        console.log('Đăng xuất');
        handleClose();
    };
    return (
        <div className='d-flex relative'>
            <Stack direction="row">
                <Tooltip title="Search" enterDelay={1000}>
                    <div>
                        <IconButton
                            type="button"
                            aria-label="search"
                            sx={{
                                display: { xs: 'inline', md: 'none' },
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Tooltip>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <IconButton type="button" aria-label="search" size="small">
                                    <SearchIcon />
                                </IconButton>
                            ),
                            sx: { pr: 0.5 },
                        },
                    }}
                    sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
                />
                <Box sx={{ ml: 2 }}>
                    <ThemeSwitcher />
                </Box>

                <>
                    <Box
                        onClick={handleClick}
                        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2 }}
                    >
                        <Avatar
                            sx={{ ml: 2 }}
                            alt="Remy Sharp"
                            src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-5.jpg"
                        />
                        <Box sx={{ ml: 1 }}>
                            <Typography className="font-semibold text-sm">Trần Văn Tuấn</Typography>
                            <Typography className="text-[11px]">Administrator</Typography>
                        </Box>
                    </Box>

                    <Menu
                        sx={{ mt: 1 }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ px: 4, py: 2, fontWeight: 'bold', fontSize: '18px' }}>Cài đặt tài khoản</Typography>
                        <MenuItem onClick={handleProfile} >
                            <UserRoundPenIcon />
                            <Typography sx={{ ml: 2, fontSize: '15px', fontWeight: 'light' }} >Thay đổi thông tin</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <LogOutIcon />
                            <Typography sx={{ ml: 2, fontSize: '15px', fontWeight: 'light' }}>Đăng xuất</Typography>
                        </MenuItem>
                    </Menu>
                </>
            </Stack>
        </div >
    );
}

export default Header;