import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 20,
        color: '#000',
        marginBottom: 16,
    },
    item_div: {
        marginTop: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
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
        width: '100%',
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
    buttonContainerGhost: {
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: '#fde74d',
        padding: 12,
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        marginVertical: 10,
        borderRadius: 8,
        marginTop: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        // backgroundColor: '#fff',
    },
    buttonTextGhost: {
        color: '#000',
    },
    button_div: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginHorizontal: 20,
        marginTop: 20,
    },
    button_item: {
        flex: 1,
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
});

export default styles;
