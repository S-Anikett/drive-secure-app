import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import MobileLogin from './MobileLogin';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Drive Secure </Text>
            <MobileLogin />
        </View>
    );
};

export default Login;
