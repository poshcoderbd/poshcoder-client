import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { axiosReq } from '../../../utils/axiosReq';
import { Stack, Typography } from '@mui/material';
import LoadingBar from '../../../components/loadingBar/LoadingBar';
import Loading from '../../../components/loading/Loading';
import PackageCard from '../../../components/packageCard/PackageCard';

const GraphicDesign = () => {
	const { isLoading: graphicPackageLoading, error: graphicpackageErr, data: allGraphicpackage } = useQuery({
		queryKey: ['graphicpackage'],
		queryFn: () => axiosReq.get('/graphicpackage/getall').then(res => res.data)
	});
	return (
		<Stack maxWidth='xl' sx={{
			bgcolor: '#fff',
			p: 3, borderRadius: '16px',
			minHeight: '100vh'
		}} mb='10rem'>
			<Typography sx={{ fontSize: { xs: '2.5rem', md: '3.2rem' }, textAlign: 'center' }} mb={2} variant='h3'>Our Graphic Design Packages</Typography>
			<Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={{ xs: 5, md: 10 }} mt={10}>
				{
					graphicPackageLoading ? <><LoadingBar /> <Loading /></> : graphicpackageErr ? 'Something went wrong!' :
						allGraphicpackage.map((data, i) => (
							<PackageCard dashboard key={i} data={data} />
						))
				}
			</Stack>
		</Stack>
	)
}

export default GraphicDesign