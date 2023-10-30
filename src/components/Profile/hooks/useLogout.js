import {useDispatch, useSelector} from 'react-redux';
import {resetProfileStore} from '../../../../store/Profile';
import {logOutSucess} from '../../../../store/Auth';
import useRequest from '../../../commons/request/useRequest';
import {ToastAndroid} from 'react-native';

const useLogout = () => {
    const dispatch = useDispatch();

    const {token} = useSelector(({auth}) => auth);

    const [{loading}, trigger] = useRequest({
        url: '/logout',
        method: 'post',
    });

    const handleClick = async () => {
        try {
            const payload = {
                session_id: token,
            };

            const {data} = await trigger({data: payload});

            if (data) {
                ToastAndroid.showWithGravity(
                    'Logout successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }

            dispatch(resetProfileStore());

            dispatch(logOutSucess());
        } catch (error) {
            const error_message =
                JSON.stringify(error?.response?.data?.detail) ||
                'Invalid Request';

            ToastAndroid.showWithGravity(
                error_message,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        }
    };

    return {
        loading,
        handleClick,
        trigger,
    };
};

export default useLogout;
