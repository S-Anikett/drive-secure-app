import {useDispatch, useSelector} from 'react-redux';
import useRequest from '../../../commons/request/useRequest';
import {setProfileStore} from '../../../../store/Profile';

const useGetuserSession = () => {
    const dispatch = useDispatch();

    const {token} = useSelector(({auth}) => auth);

    const [{loading, data}] = useRequest(
        {
            url: '/get_user_session',
            method: 'get',
            params: {
                session_id: token,
                require_user_details: true,
            },
        },
        {manual: false},
    );

    dispatch(
        setProfileStore({
            ...data,
        }),
    );

    return {
        loading,
        data,
    };
};

export default useGetuserSession;
