import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height - 100,
        justifyContent: 'center',
    },
    cameraContainer: {
        height: Dimensions.get('screen').height / 1.5,
    },
    no_device: {
        textAlign: 'center',
        color: '#000',
    },
    buttonContainer: {
        paddingHorizontal: 24,
        backgroundColor: '#fde74d',
        borderWidth: 1,
        borderColor: '#fde74d',
        padding: 12,
        alignItems: 'center',
        alignSelf: 'center',
        width: '88%',
        marginVertical: 10,
        // marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    buttonText: {
        color: '#000',
    },
});

export default styles;
