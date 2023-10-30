import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './Header';
import Details from './Details';
import EditMode from './EditMode';
import {useSelector} from 'react-redux';

const Profile = () => {
    const [mode, setMode] = useState('view');

    const profileData = useSelector(({profile}) => profile);

    return (
        <View style={styles.container}>
            {mode === 'edit' ? (
                <EditMode setMode={setMode} />
            ) : (
                <>
                    <Header name={profileData?.user?.name || 'User'} />
                    <Details data={profileData} setMode={setMode} />
                </>
            )}
        </View>
    );
};

export default Profile;
