import { Breadcrumbs, Typography } from '@mui/material'
import { Box } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
    breadcrumb: {
        title: string,
        route: string
    }

}


const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumb }) => {
    return (
        <div>
            <h2 className='text-2xl mb-2'>{breadcrumb.title}</h2>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='text-sm' to={'/admin/dashboard'}>
                    Dashboard
                </Link>
                <Link className='text-sm' to={breadcrumb.route}>
                    {breadcrumb.title}
                </Link>
            </Breadcrumbs>
        </div>

    )
}

export default Breadcrumb