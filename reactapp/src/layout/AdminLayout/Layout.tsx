import React, { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { UserCircle, UserSquare2Icon } from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Title from '../../components/admin/Title/Title';
import Header from '../../components/admin/Header/Header';

const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'admin/dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    // {
    //     segment: 'user',
    //     title: 'users',
    //     icon: <UserIcon />,
    // },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Manager',
    },
    {
        segment: 'admin/user',
        title: 'QL Thành Viên',
        icon: <UserSquare2Icon />,
        children: [
            {
                segment: 'index1',
                title: 'QL Nhóm Thành Viên',
                icon: <UserCircle />,
            },
            {
                segment: 'index',
                title: 'QL Thành Viên',
                icon: <UserCircle />,
            },
        ],
    },
    // {
    //     segment: 'reports',
    //     title: 'QL Sản phẩm',
    //     icon: <UserSquare2Icon />,
    //     children: [
    //         {
    //             segment: 'sales',
    //             title: 'Sales',
    //             icon: <DescriptionIcon />,
    //         },
    //         {
    //             segment: 'traffic',
    //             title: 'Traffic',
    //             icon: <DescriptionIcon />,
    //         },
    //     ],
    // },

];


const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});



interface DemoProps {
    window?: () => Window;
}

const Layout = (props: DemoProps) => {
    const { window } = props;
    const demoWindow = window !== undefined ? window() : undefined;
    const location = useLocation();

    // dùng navigate để customize
    const router = useDemoRouter(location.pathname);
    const navigate = useNavigate()


    useEffect(() => {
        navigate(router.pathname);
    }, [router])



    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout
                slots={{
                    appTitle: Title,
                    toolbarActions: Header,
                }}>
                <div className='p-8'>
                    <Outlet />
                </div>
            </DashboardLayout >
        </AppProvider>
    );
}


export default Layout
