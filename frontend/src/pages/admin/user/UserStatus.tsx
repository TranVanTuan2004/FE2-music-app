import { Switch } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { updateStatus } from '../../../services/UserService';
import { toast } from 'react-toastify';

const UserStatus = ({ params }: any) => {
    const { row } = params;
    const [status, setStatus] = useState(row.publish);
    const mutation = useMutation({
        mutationFn: (newStatus: number) => updateStatus(row.id, newStatus),
    });
    const handleChangeStatus = () => {
        const newStatus = status === 1 ? 0 : 1;
        setStatus(newStatus);
        mutation.mutate(newStatus);
    }
    return (< Switch
        checked={status}
        onClick={handleChangeStatus}
    />)
}

export default UserStatus
