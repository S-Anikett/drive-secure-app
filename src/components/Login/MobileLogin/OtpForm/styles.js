import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 24,
        backgroundColor: '#fde74d',
        borderWidth: 1,
        borderColor: '#fde74d',
        padding: 12,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        marginVertical: 10,
        // marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 12,
    },
    buttonText: {
        color: '#000',
    },
    buttonContainerGhost: {
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: '#fde74d',
        color: '#000000',
        padding: 12,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        marginVertical: 10,
        borderRadius: 8,
        marginTop: 12,
    },
    buttonTextGhost: {
        color: '#fde74d',
    },
    button_div: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    button_item: {
        flex: 1,
    },
    referral_div: {
        marginVertical: 10,
    },
    referral_text: {
        color: '#000',
    },
});

export default styles;
