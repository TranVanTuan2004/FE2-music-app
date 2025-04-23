import axios from 'axios'
import React, { useEffect } from 'react'
import Breadcrumb from '../../components/admin/Breadcrumb/Breadcrumb'

const Dashboard = () => {
    const breadcrum = {
        title: 'Thống Kê Chung',
        route: '/admin/dashboard'
    }
    return (
        <div>
            <Breadcrumb breadcrumb={breadcrum} />
        </div>
    )
}

export default Dashboard
