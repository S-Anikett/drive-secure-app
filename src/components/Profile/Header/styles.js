import {Dimensions, StyleSheet} from 'react-native';

const ICON_SIDE = 100;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fde74d',
        opacity: 0.8,
        height: 280,
        width: Dimensions.get('screen').width + 200,
        position: 'absolute',
        left: -100,
        top: -120,
        borderBottomLeftRadius: Dimensions.get('screen').width + 200 / 2,
        borderBottomRightRadius: Dimensions.get('screen').width + 200 / 2,
    },
    icon_div: {
        backgroundColor: '#fff',
        height: ICON_SIDE,
        width: ICON_SIDE,
        borderRadius: ICON_SIDE / 2,
        position: 'absolute',
        left: Dimensions.get('screen').width / 2 - ICON_SIDE / 2,
        top: 160 - ICON_SIDE / 2,
        borderWidth: 2.5,
        borderColor: '#fde74d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        alignSelf: 'center',
        fontSize: 32,
        marginTop: 40,
        color: '#000',
    },
});

export default styles;
