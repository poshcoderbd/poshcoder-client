import React from 'react'
import './TeamCard.scss'
import { Box } from '@mui/material'

const TeamCard = ({ data }) => {
  return (
    <div className="team-card">
      <Box className='team-img' sx={{
        width: { xs: '100%', md: '350px' }
      }} >
        <img style={{ width: '100%', height: '100%' }} src={data?.imgUrl} alt={data?.name} />
      </Box>
      <div className="card-bottom">
        <span>{data?.title}</span>
        <div className='card-name'>{data?.name}</div>
      </div>
    </div>
  )
}

export default TeamCard