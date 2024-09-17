import React from 'react'
import './SomeBlog.scss'
import { Button, Container, Stack } from '@mui/material'
import BlogCard from '../blogCard/BlogCard'
import { Link } from 'react-router-dom'
import { FadeAnimation } from '../animations/animations'
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading'
import { axiosReq } from '../../utils/axiosReq'

const SomeBlog = () => {
  const { isLoading, error, data: allBlog } = useQuery({
    queryKey: ['blog'],
    queryFn: () => axiosReq.get('/blog/getAll').then(res => res.data)
  });
  return (
    <Container className="some-blog">
      <h1 className='h1'>Some From <span><FadeAnimation cascade={'cascade'} damping={.1}>Blogs</FadeAnimation> </span></h1>
      <Stack mb={7} gap={{ xs: 3, md: 6 }} justifyContent={'center'} >
        {
          isLoading ? <Loading /> : error ? 'Something went wrong!' :
            allBlog.slice(0, 3).map(item => (
              <BlogCard key={item._id} data={item} />
            ))
        }
      </Stack>
      <Link to='/blog' className='link' style={{
        marginTop: '15rem',
        textAlign: 'center',
        border: '1px solid gray',
        width: '200px',
        padding: '5px 60px',
        alignSelf: 'center'
      }}>All Blogs</Link>
    </Container>
  )
}

export default SomeBlog