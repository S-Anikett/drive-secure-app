import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    homeTab: {
        backgroundColor: '#000',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: 'gray',
        shadowColor: 'gray',
        paddingBottom: 12,
        height: 100,
    },
    tabButton: {
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        paddingVertical: 10,
    },
    iconStyle: {
        paddingHorizontal: 60,
        paddingVertical: 14,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    iconStyleAfter: {
        backgroundColor: '#f2f2f2',
        height: 60,
        width: 30,
        position: 'absolute',
        right: 0,
        top: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },

    leftTabStyle: {
        paddingHorizontal: 60,
        paddingVertical: 14,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        backgroundColor: '#fff',
    },
    leftTabStyleAfter: {
        backgroundColor: '#f2f2f2',
        height: 60,
        width: 30,
        position: 'absolute',
        right: 0,
        top: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },

    rightTabStyle: {
        paddingHorizontal: 60,
        paddingVertical: 14,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: '#fff',
    },
    rightTabStyleAfter: {
        backgroundColor: '#f2f2f2',
        height: 60,
        width: 30,
        position: 'absolute',
        left: 0,
        top: 10,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    middleTabStyle: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 30,
        backgroundColor: '#fde74d',
    },
});

export default styles;
