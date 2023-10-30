import {Text, TouchableOpacity, View} from 'react-native';
import OTPLogin from '../../../../commons/components/OTPLogin';
import styles from './styles';
import useVerifyOtp from '../hooks/useVerifyOtp';
import {InputController} from '../../../../commons/Forms/Controllers';

const OtpForm = ({
    otp = null,
    setOtp = () => {},
    data = null,
    setData = () => {},
    resendOtp = () => {},
}) => {
    const {
        loading = false,
        handleVerify,
        control,
    } = useVerifyOtp({userData: data, otp});

    const active = !loading && otp && otp.length === 6;

    return (
        <View style={styles.otp_container}>
            <OTPLogin
                data={data}
                setOtp={setOtp}
                resendOtp={resendOtp}
                resendOtpTimerDuration={15}
            />

            {!data?.user_already_exists ? (
                <View style={styles.referral_div}>
                    <Text style={styles.referral_text}>Referral Code</Text>
                    <InputController control={control} name="referral_code" />
                </View>
            ) : null}
            <View style={styles.button_div}>
                <TouchableOpacity
                    onPress={() => {
                        setData(null);
                        // setOtp(null);
                    }}
                    style={styles.button_item}>
                    <View style={styles.buttonContainerGhost}>
                        <Text style={styles.buttonTextGhost}>Back</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button_item, {opacity: !active ? 0.5 : 1}]}
                    onPress={handleVerify}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Verify Otp</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OtpForm;
