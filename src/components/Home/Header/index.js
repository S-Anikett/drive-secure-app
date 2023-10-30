import {View, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';

const Header = () => {
    const {user = {}} = useSelector(({profile}) => profile);

    return (
        <View style={styles.container}>
            <Text style={styles.greet}>Hello!</Text>
            <Text style={styles.name}>{user?.name || 'User'}</Text>
        </View>
    );
};

export default Header;
