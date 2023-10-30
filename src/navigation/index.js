import React from 'react';
import AuthenticatedNavigations from './AuthenticatedNavigations';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import AuthNavigations from './AuthNavigations';

const Navigations = () => {
    const {token, authLoading = false} = useSelector(({auth}) => auth);

    if (authLoading) {
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <ActivityIndicator size="large" animating />
        </View>;
    }

    if (!token) {
        return <AuthNavigations />;
    }

    return <AuthenticatedNavigations />;
};

export default Navigations;
