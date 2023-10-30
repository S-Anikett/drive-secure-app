import {View, Text} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({name = 'User'}) => {
    return (
        <>
            <View style={styles.container} />
            <View style={styles.icon_div}>
                <Icon size={70} name="account" color="#d3d3d3" />
            </View>
            <Text style={styles.name}>{name}</Text>
        </>
    );
};

export default Header;
