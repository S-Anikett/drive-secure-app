import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        gap: 6,
        height: 40,
    },
    is_open: {
        height: 'unset',
    },
    display_container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    active: {
        width: '100%',
    },
    toggle_svg: {
        position: 'absolute',
        top: -15,
        right: 0,
    },
    toggle_button: {
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    prefix: {
        position: 'absolute',
        zIndex: 10,
        left: 4,
        alignItems: 'center',
    },
    input_container: {
        position: 'relative',
        flex: 1,
    },
    input_control: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#fff',
    },
    svgs_container: {
        position: 'absolute',
        right: 8,
        gap: 8,
        flexDirection: 'row',
    },

    options_relative_container: {
        position: 'relative',
        width: '100%',
    },
    options_container: {
        maxHeight: 200,
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 0,
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff',
        shadowColor: 'red',
    },

    list_item: {
        color: '#221f20',
        borderBottomWidth: 1,
        borderBottomColor: '#f8f2e7',
        padding: 8,
        backgroundColor: '#fff',
        fontFamily: 'Poppins-Regular',
    },
});

export default styles;
