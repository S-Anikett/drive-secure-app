import {useForm} from 'react-hook-form';
import useRequest from '../../../commons/request/useRequest';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileStore} from '../../../../store/Profile';
import moment from 'moment';

const useUpdateProfile = ({setMode = () => {}}) => {
    const {token} = useSelector(({auth}) => auth);

    const profileData = useSelector(({profile}) => profile);

    const dispatch = useDispatch();

    const {control, handleSubmit} = useForm({
        defaultValues: {
            name: profileData?.user?.name,
            gender: profileData?.user?.gender,
            country: profileData?.user?.country,
            birth_date: new Date(profileData?.user?.birth_date),
            email: profileData?.user?.email,
        },
    });

    const [{loading}, trigger] = useRequest({
        url: '/update_profile',
        method: 'post',
    });

    const handleClick = async formValues => {
        const {name, country, email, gender, birth_date} = formValues;

        try {
            const payload = {
                session: {
                    session_id: token,
                },
                profile: {
                    name: name || undefined,
                    email: email || undefined,
                    country: country || undefined,
                    gender: gender || undefined,
                    birth_date:
                        (birth_date &&
                            moment(birth_date).format('yyyy-MM-DD')) ||
                        undefined,
                },
            };

            const {data} = await trigger({data: payload});

            if (data) {
                ToastAndroid.showWithGravity(
                    'Profile updated successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }

            dispatch(
                setProfileStore({
                    ...data,
                }),
            );
            setMode('view');
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
        control,
        handleSubmit,
        handleClick,
        trigger,
    };
};

export default useUpdateProfile;
