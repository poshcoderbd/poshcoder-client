import React from 'react'
import './BlogPage.scss'
import BlogCard from '../../components/blogCard/BlogCard'
import { Container, Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import LoadingBar from '../../components/loadingBar/LoadingBar';
import Loading from '../../components/loading/Loading';


const BlogPage = () => {
  const { isLoading, error, data: allBlog } = useQuery({
    queryKey: ['blog'],
    queryFn: () => axiosReq.get('/blog/getAll').then(res => res.data)
  });

  return (
    <div className="blog">
      <div className="top">
        <span className='top-title'>OUR BLOG</span>
      </div>
      <Container>
        <Stack gap={6} className="middle">
          {
            isLoading ? <><LoadingBar /> <Loading /></> : error ? 'Something went wrong!' :
              allBlog.map(item => (
                <BlogCard key={item._id} data={item} />
              ))
          }
        </Stack>
      </Container>
    </div>
  )
}

export default BlogPage