import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {
    Camera,
    useCameraDevice,
    useCameraPermission,
} from 'react-native-vision-camera';
import styles from './styles';
import {useRef, useState} from 'react';
import useTrip from '../hooks/useTrip';

const Capture = () => {
    const ref = useRef();

    const {hasPermission, requestPermission} = useCameraPermission();

    const device = useCameraDevice('front');

    const [tripId, setTripId] = useState(null);

    const {loading, handleClick} = useTrip({ref, tripId, setTripId});

    const handleButtonClick = async () => {
        if (hasPermission === false) {
            const res = await requestPermission();

            if (res === true) {
                handleClick();
            } else {
                ToastAndroid.showWithGravity(
                    'Please give Camera Permissions from settings to proceed',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }
            return;
        }

        handleClick();
    };

    return (
        <View style={[!hasPermission && styles.container]}>
            {hasPermission ? (
                <Camera
                    style={styles.cameraContainer}
                    device={device}
                    ref={ref}
                    isActive={true}
                    photo={true}
                    compressImageQuality={0.99}
                />
            ) : null}

            <TouchableOpacity
                disabled={loading}
                style={styles.button_item}
                onPress={() => handleButtonClick()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        {tripId ? 'End Trip' : 'Start Trip'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Capture;
