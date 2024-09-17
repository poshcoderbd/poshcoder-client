import {Stack,Box,Typography} from '@mui/material'

const ServiceCatCard = ({data}) => {
  return (
    <Stack alignItems='center' sx={{
      textAlign: 'center',
      width: { xs: '160px', md: '220px' },
      height: { xs: '160px', md: '220px' },
      borderRadius: '50%',
      border: '1px solid gray',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: '.5s',
      ":hover": {
        bgcolor: 'gray',
        transform: 'scale(1.1)'
      }
    }}>
      <Box sx={{ mb: 1, opacity: '.8' }}>{data.icon}</Box>
      <Typography variant='h5' sx={{ lineHeight: '30px', fontSize: { xs: '22px', md: '28px' }, fontWeight: '200' }}>{data.subTitle}</Typography>
      <Typography variant='h5' sx={{ fontSize: { xs: '22px', md: '28px' }, }}>{data.title}</Typography>
    </Stack>
  )
}

export default ServiceCatCard