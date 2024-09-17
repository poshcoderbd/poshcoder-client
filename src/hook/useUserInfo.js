import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../context/AuthProvider';
import { axiosReq } from '../utils/axiosReq';

export const useUserInfo = () => {
    const {setToken} = useAuth()
    const {token} = useAuth()
    const { data, error,refetch } = useQuery({
        queryKey: ['me'],
        queryFn: () => axiosReq.get('/auth/me',{headers:{Authorization: token}}).then(res => res.data),
        // retry: false,
        // refetchOnWindowFocus: false,
    });
    if(error?.response?.data === 'unauthenticated'){
        setToken(null)
    }
    const userData = {
        userInfo: data,
        error: error?.response?.data
    }
    
    return userData
};
