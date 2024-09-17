import './Team.scss';
import TeamCard from '../teamCard/TeamCard';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { FadeAnimation, SlideAnimation } from '../animations/animations';
import { teams } from '../../data/teamData';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import Loading from '../loading/Loading';

const Team = () => {
  const { isLoading, error, data: teams } = useQuery({
    queryKey: ['team'],
    queryFn: () => axiosReq.get('/team/allTeams').then(res => res.data)
  });
  return (
    <Stack className="team">
      <span className='team-title'><FadeAnimation damping={0.1} cascade={'cascade'}>Our Teams</FadeAnimation> </span>
      <Stack direction={'row'} justifyContent={'center'} gap={4} mt={5} flexWrap={'wrap'}>
        <SlideAnimation direction='up' damping={0.1} cascade={'cascade'}>
          {
            isLoading ? <Loading /> : error ? 'Something went wrong!' :
              teams.slice(0, 3).map((data) => (
                <TeamCard key={data._id} data={data} />
              ))
          }
        </SlideAnimation>
      </Stack>
      <Link to='/teams' className='link' style={{
        marginTop: '2rem',
        textAlign: 'center',
        border: '1px solid gray',
        width: '200px',
        padding: '5px 10px',
        alignSelf: 'center'
      }}>All Teams</Link>
    </Stack>
  )
}

export default Team