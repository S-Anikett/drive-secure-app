import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },
    heading: {
        alignSelf: 'center',
        fontSize: 18,
        marginBottom: 20,
        color: '#000',
    },
    form_field_div: {
        marginTop: 10,
    },
    mobile_label: {
        fontSize: 14,
        // alignSelf: 'center',
        color: '#808080',
        marginBottom: 4,
    },
    input_mobile: {
        // height: 10,
        color: '#000',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    buttonContainer: {
        paddingHorizontal: 24,
        backgroundColor: '#ee3425',
        borderWidth: 1,
        borderColor: '#ee3425',
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
        color: '#fff',
    },
    buttonContainerGhost: {
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: '#ee3425',
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
        color: '#ee3425',
    },
    button_div: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    button_item: {
        flex: 1,
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ee3425',
    },
});

export default styles;
