import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { axiosReq } from '../../../utils/axiosReq';
import { Stack, Typography } from '@mui/material';
import LoadingBar from '../../../components/loadingBar/LoadingBar';
import Loading from '../../../components/loading/Loading';
import PackageCard from '../../../components/packageCard/PackageCard';

const WebDev = () => {
    const { isLoading: webPackageLoading, error: webpackageErr, data: allWebpackage } = useQuery({
        queryKey: ['webpackage'],
        queryFn: () => axiosReq.get('/webpackage/getall').then(res => res.data)
    });

    return (
        <Stack maxWidth='xl' sx={{
            bgcolor: '#fff',
            p: 3, borderRadius: '16px',
            minHeight: '100vh'
        }} className='middle2'>
            <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} variant='h3'>Our Web Development Packages</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={{ xs: 5, md: 10 }} mt={10}>
                {
                    webPackageLoading ? <><LoadingBar /> <Loading /></> : webpackageErr ? 'Something went wrong!' : (
                        allWebpackage.map((data, i) => (
                            <PackageCard dashboard key={i} data={data} />
                        ))
                    )
                }
            </Stack>
        </Stack>
    )
}

export default WebDev