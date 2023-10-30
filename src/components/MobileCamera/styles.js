import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cameraContainer: {
        height: Dimensions.get('screen').height,
    },
    no_device: {
        textAlign: 'center',
        color: '#000',
    },
});

export default styles;
