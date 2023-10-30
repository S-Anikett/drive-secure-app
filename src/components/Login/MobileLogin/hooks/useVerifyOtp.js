import {useDispatch} from 'react-redux';
import useRequest from '../../../../commons/request/useRequest';
import {loginSuccess} from '../../../../../store/Auth';
import {ToastAndroid} from 'react-native';
import {useForm} from 'react-hook-form';
import {setProfileStore} from '../../../../../store/Profile';

const useVerifyOtp = ({otp = null, userData = null}) => {
    const dispatch = useDispatch();

    const {control, getValues} = useForm();

    const [{loading}, trigger] = useRequest(
        {
            url: '/verify_otp',
            method: 'post',
        },
        {manual: true},
    );

    const [{}, sessionTrigger] = useRequest({
        url: '/get_user_session',
        method: 'get',
    });

    const onSuccess = ({response = {}, profileData = {}}) => {
        const {token = '', expire_at} = response;

        dispatch(loginSuccess({token, expire_at}));

        dispatch(
            setProfileStore({
                ...profileData,
            }),
        );
    };

    const handleVerify = async () => {
        const {referral_code} = getValues();
        try {
            const payload = {
                verify_otp: {
                    otp_code: otp,
                    authentication_id: userData?.authentication_id,
                    referral_code: referral_code || undefined,
                },
                user_session: {
                    ip_address: 'abcd',
                    user_agent: 'efgh',
                },
            };

            const res = await trigger({data: payload});

            const sessionPayload = {
                session_id: res?.data?.id,
                require_user_details: true,
            };

            const sessionRes = await sessionTrigger({
                params: sessionPayload,
            });

            if (res) {
                ToastAndroid.showWithGravity(
                    'OTP verified',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }

            const response = {
                token: res?.data?.id,
                expiry_at: res?.data?.session_expires_at,
            };

            onSuccess({response, profileData: sessionRes?.data});
        } catch (error) {
            const error_message =
                JSON.stringify(error?.response?.data?.detail) ||
                'invalid_request';

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
        trigger,
        handleVerify,
    };
};

export default useVerifyOtp;
