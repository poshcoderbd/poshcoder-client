import React from 'react'
import './TeamPage.scss'
import { Stack } from '@mui/material'
import TeamCard from '../../components/teamCard/TeamCard'
import LoadingBar from '../../components/loadingBar/LoadingBar'
import Loading from '../../components/loading/Loading'
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq'


const TeamPage = () => {
  const { isLoading, error, data: teams } = useQuery({
    queryKey: ['team'],
    queryFn: () => axiosReq.get('/team/allTeams').then(res => res.data)
  });
  return (
    <div className="teams">
      <div className="top">
        <span className='top-title'>OUR TEAMS</span>
      </div>
      <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} className="middle">
        {
          isLoading ? <><LoadingBar /> <Loading /></> : error ? 'Something went wrong!' :
            teams.map((data, i) => (
              <TeamCard data={data} key={data._id} />
            ))
        }
      </Stack>
    </div>
  )
}

export default TeamPage