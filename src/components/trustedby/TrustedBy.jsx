import './TrustedBy.scss'
import { trustedby } from '../../data/trustedByData';
import Marquee from "react-fast-marquee";
import { FadeAnimation } from '../animations/animations';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import Loading from '../loading/Loading';


const TrustedBy = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['trustby'],
    queryFn: () => axiosReq.get('/trustby/getAll').then(res => res.data)
  });
  return (
    <div className="trustedby">
      <h1>Trusted <span><FadeAnimation cascade='cascade' damping={.1}>By</FadeAnimation> </span></h1>
      <Marquee autoFill gradient gradientColor={[0, 0, 0]}>
        {
          isLoading ? <Loading /> : error ? 'Something went wrong!' :
            data.map((d) => (
              <img style={{ marginRight: '30px' }} key={d._id} src={d.imgUrl} alt="" />
            ))
        }
      </Marquee>
    </div>
  )
}

export default TrustedBy