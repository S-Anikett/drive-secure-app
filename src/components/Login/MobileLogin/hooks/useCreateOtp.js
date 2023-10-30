import {useForm} from 'react-hook-form';
import useRequest from '../../../../commons/request/useRequest';
import {ToastAndroid} from 'react-native';

const useCreateOtp = ({setData = () => {}}) => {
    const {control, handleSubmit} = useForm();

    const [{loading: createLoading}, trigger] = useRequest({
        url: '/login',
        method: 'post',
    });

    const [{loading: resendLoading}, resendTrigger] = useRequest({
        url: '/resend_otp',
        method: 'get',
    });

    const handleClick = async formValues => {
        const {mobile_number} = formValues;

        try {
            const payload = {
                user: {
                    mobile_number: mobile_number,
                },
                authentication: {
                    ip_address: 'abcd',
                    user_agent: 'efgh',
                },
            };

            const {data} = await trigger({data: payload});

            if (data) {
                ToastAndroid.showWithGravity(
                    'OTP sent successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }

            setData(data);
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

    const callResendOtp = async ({authId = ''}) => {
        try {
            const params = {
                authentication_id: authId,
            };

            const {data} = await resendTrigger({params});

            if (data) {
                ToastAndroid.showWithGravity(
                    'OTP sent successfully',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }
        } catch (err) {
            ToastAndroid.showWithGravity(
                err,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        }
    };

    const resendOtp = ({timer = {}, authId = null}) => {
        callResendOtp({authId});
        timer?.restart?.();
    };

    return {
        loading: createLoading || resendLoading,
        control,
        handleSubmit,
        handleClick,
        resendOtp,
        trigger,
    };
};

export default useCreateOtp;
