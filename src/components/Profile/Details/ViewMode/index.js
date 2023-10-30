import {
    View,
    Text,
    TouchableOpacity,
    Clipboard,
    ToastAndroid,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useLogout from '../../hooks/useLogout';

const DISPLAY_KEYS = {
    mobile_number: 'phone',
    email: 'email-outline',
    gender: 'gender-male-female',
    birth_date: 'calendar-month',
    country: 'map-marker-radius',
    referral_code: 'transit-connection-variant',
};

const ViewMode = ({setMode = () => {}, data = {}}) => {
    const {handleClick} = useLogout();

    const user_keys = Object.keys(data?.user || {});

    const copyToClipboard = code => {
        Clipboard.setString(code);

        ToastAndroid.showWithGravity(
            'Copied to clipboard!',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
        );
    };

    return (
        <View style={styles.container}>
            {Object.keys(DISPLAY_KEYS || {}).map(key => {
                if (user_keys.includes(key)) {
                    return (
                        <View key={key} style={styles.item_div}>
                            <View style={styles.item_div_content}>
                                <Icon
                                    name={DISPLAY_KEYS[key] || ''}
                                    size={28}
                                    color="#000"
                                />
                                <Text style={styles.value}>
                                    {data?.user[key] || '--'}
                                </Text>
                            </View>
                            {key === 'referral_code' ? (
                                <TouchableOpacity
                                    onPress={() =>
                                        copyToClipboard(data?.user[key])
                                    }>
                                    <Icon
                                        name="content-copy"
                                        color="#000"
                                        size={20}
                                    />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    );
                }
            })}

            <View style={styles.button_div}>
                <TouchableOpacity
                    style={styles.button_item}
                    onPress={() => setMode('edit')}>
                    <View style={styles.buttonContainerGhost}>
                        <Icon name="pen-plus" size={16} color="#000" />
                        <Text style={styles.buttonTextGhost}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_item}
                    onPress={handleClick}>
                    <View style={styles.buttonContainer}>
                        <Icon name="logout" size={16} color="#000" />
                        <Text style={styles.buttonText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ViewMode;
