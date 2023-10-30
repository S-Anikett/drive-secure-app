import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
    },
    container_col: {
        flex: 1,
        display: 'flex',
        gap: 16,
    },
    card_score: {
        backgroundColor: '#fff',
        paddingVertical: 40,
        paddingHorizontal: 12,
        borderRadius: 16,
        color: '#000',
        display: 'flex',
        alignItems: 'center',
    },

    card_referrals: {
        backgroundColor: '#393e5e',
    },

    card_alert: {
        // backgroundColor: 'rgba(253, 231, 77, 0.4)',
        backgroundColor: '#fef199',
        // height: 250,
    },
    alert_score: {
        fontSize: 36,
        color: '#000',
    },

    referral_score: {
        fontSize: 36,
        color: '#fff',
    },
    referral_title: {
        fontSize: 18,
        color: '#fff',
    },
    alert_title: {
        fontSize: 18,
        color: '#000',
    },
    app_name: {
        fontWeight: 'bold',
    },
    percentage: {
        fontSize: 24,
    },

    alert_desc: {
        marginTop: 8,
        textAlign: 'center',
        color: '#868686',
    },

    score: {
        fontSize: 36,
        color: '#757575',
    },

    title: {
        fontSize: 14,
        color: '#868686',
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
    loader: {
        backgroundColor: '#E5E4E2',
        marginVertical: 7,
        height: 36,
        width: 44,
        animation: 'scale 4s infinite',
        // margin-left: 1rem;
        // border-radius: 6px;
    },
});

export default styles;
