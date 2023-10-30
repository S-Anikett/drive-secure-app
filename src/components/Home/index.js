import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Statistics from './Statistics';
import Header from './Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Statistics />
        </View>
    );
};

export default Home;
