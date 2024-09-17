import React from 'react'
import './BlogSingle.scss'
import { Container, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import LoadingBar from '../../components/loadingBar/LoadingBar';
import Loading from '../../components/loading/Loading';
import parse from 'html-react-parser'
import { Person2 } from '@mui/icons-material';


const BlogSingle = () => {
  const { id } = useParams();
  const { isLoading, error, data: blog } = useQuery({
    queryKey: ['singleblog'],
    queryFn: () => axiosReq.get(`/blog/single/${id}`).then(res => res.data)
  });
  return (
    <Container sx={{ mt: 10 }}>
      {
        isLoading ? <><LoadingBar /> <Loading /></> : error ? 'Something went wrong!' :
          <Stack gap={1.5} sx={{
            bgcolor: '#17181a',
            py: 3, px: { xs: 2.5, md: 5 }, borderRadius: '10px'
          }}>

            <Typography variant='h5' sx={{ fontSize: '22px' }}>{blog?.title}</Typography>
            <Stack direction='row' gap={2} mb={6}>
              <Stack direction='row' gap={1} alignItems='center'>
                <Person2 />
                <Typography>Admin</Typography>
              </Stack>
              <Typography sx={{
                fontSize: '12px',
                bgcolor: 'gray',
                p: '3px 10px',
                borderRadius: '5px'
              }}>{blog?.category}</Typography>
            </Stack>
            <Typography variant='body2'>{blog && parse(blog.body)}</Typography>
          </Stack>
      }
    </Container>
  )
}

export default BlogSingle