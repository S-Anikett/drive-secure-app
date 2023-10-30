import React, {useEffect, useRef} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import styles from './styles';
import useTimer from './useTimer';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const OTPLogin = ({
    data = null,
    setOtp = () => {},
    resendOtp = () => {},
    resendOtpTimerDuration = 10,
}) => {
    const useOtpRef = useRef({});

    const timer = useTimer({durationInSeconds: resendOtpTimerDuration});

    useEffect(() => timer.start(), []);

    const timerClass = () => {
        if (timer.seconds <= 10) {
            return 'redText';
        }
        if (timer.seconds <= 20) {
            return 'yellowText';
        }
        return 'defaultText';
    };

    const colorStyle = styles[timerClass()];

    return (
        <>
            <OTPTextInput
                ref={useOtpRef}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                tintColor="#fde74d"
                handleTextChange={setOtp}
                inputCount={6}
                defaultValue="967673"
            />

            <View style={styles.resend_otp_container}>
                {timer.seconds >= 1 ? (
                    <View style={styles.timer_text}>
                        <Text style={colorStyle}>
                            {timer.minutes}:{timer.seconds}
                        </Text>
                    </View>
                ) : (
                    <Button
                        style={styles.resend_text}
                        onPress={() => {
                            resendOtp({timer, authId: data?.authentication_id});
                            useOtpRef.current.clear();
                        }}>
                        Resend OTP?
                    </Button>
                )}
            </View>
        </>
    );
};
export default OTPLogin;
