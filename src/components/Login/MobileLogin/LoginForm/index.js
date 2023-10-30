import React from 'react';
import controls from '../configurations/get-login-controls';
import styles from './styles';
import {InputController} from '../../../../commons/Forms/Controllers';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const LoginForm = ({
    loading = false,
    control = {},
    handleSubmit = () => {},
    handleClick = () => {},
}) => {
    return (
        <View>
            {(controls || []).map(item => {
                return (
                    <View key={item?.name} style={styles.form_field_div}>
                        <Text style={styles.mobile_label}>
                            {item?.displayName}
                        </Text>
                        <View style={styles.input_mobile}>
                            <InputController
                                control={control}
                                style={styles.input_mobile}
                                {...item}
                            />
                        </View>
                    </View>
                );
            })}
            <TouchableOpacity
                onPress={handleSubmit(handleClick)}
                disabled={loading}
                loading={loading}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;
