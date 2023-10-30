import {Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useGetuserSession from './useGetUserSession';

const Statistics = () => {
    const {loading, data} = useGetuserSession();

    return (
        <View style={styles.container}>
            <View style={styles.container_col}>
                <View style={styles.card_score}>
                    <Icon name="account-group" size={48} color="#d3d3d3" />
                    {loading ? (
                        <View style={styles.loader} />
                    ) : (
                        <Text style={styles.score}>{data?.rank}</Text>
                    )}
                    <Text style={styles.title}>Community Rank</Text>
                </View>
                <View style={[styles.card_score, styles.card_alert]}>
                    <Icon
                        name="map-marker-distance"
                        size={68}
                        color="#fbdc03"
                    />
                    {loading ? (
                        <View style={styles.loader} />
                    ) : (
                        <Text style={styles.alert_score}>
                            {data?.user?.total_trips}
                        </Text>
                    )}

                    <Text style={styles.alert_title}>Total trips</Text>
                    <Text style={styles.alert_desc}>
                        Total number of trips using
                        <Text style={styles.app_name}> drivesecure </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.container_col}>
                <View style={[styles.card_score, styles.card_alert]}>
                    <Icon name="gauge" size={68} color="#fbdc03" />
                    {loading ? (
                        <View style={styles.loader} />
                    ) : (
                        <Text style={styles.alert_score}>
                            {((data?.user?.average_score || 0) * 100).toFixed(
                                2,
                            )}
                            <Text style={styles.percentage}>%</Text>
                        </Text>
                    )}

                    <Text style={styles.alert_title}>Alertness</Text>
                    <Text style={styles.alert_desc}>
                        This is average score while you were driving
                    </Text>
                </View>
                <View style={[styles.card_score, styles.card_referrals]}>
                    <Icon
                        name="account-multiple-plus-outline"
                        size={48}
                        color="#d3d3d3"
                    />
                    {loading ? (
                        <View style={styles.loader} />
                    ) : (
                        <Text style={styles.referral_score}>
                            {data?.referral_count}
                        </Text>
                    )}

                    <Text style={styles.referral_title}>Total Referrals</Text>
                    <Text style={styles.alert_desc}>
                        Invite your friends and secure their drive
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Statistics;
