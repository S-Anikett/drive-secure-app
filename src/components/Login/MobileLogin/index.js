import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';
import useCreateOtp from './hooks/useCreateOtp';
import LoginForm from './LoginForm';
import OtpForm from './OtpForm';

const MobileLogin = () => {
    const [data, setData] = useState(null);
    const [otp, setOtp] = useState('967673');
    const {loading, control, handleSubmit, handleClick, resendOtp} =
        useCreateOtp({
            setData,
        });

    return (
        <View style={styles.container}>
            <View style={styles.shadowProp}>
                <Text style={styles.heading}>Login </Text>
                {data && data.user_id ? (
                    <OtpForm
                        loading={loading}
                        data={data}
                        setData={setData}
                        otp={otp}
                        setOtp={setOtp}
                        resendOtp={resendOtp}
                    />
                ) : (
                    <LoginForm
                        loading={loading}
                        handleClick={handleClick}
                        handleSubmit={handleSubmit}
                        control={control}
                    />
                )}
            </View>
        </View>
    );
};

export default MobileLogin;
