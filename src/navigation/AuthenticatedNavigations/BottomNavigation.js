import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../components/Home';
import MobileCamera from '../../components/MobileCamera';

import CustomTabBar from './CustomTab';
import Profile from '../../components/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigations = () => {
    const customTab = props => {
        return <CustomTabBar {...props} />;
    };

    return (
        <Tab.Navigator
            tabBar={props => customTab(props)}
            backBehavior="order"
            screenOptions={{
                unmountOnBlur: true,
                tabBarStyle: {display: 'none'},
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    // headerTitle: '',
                    // tabBarShowLabel: true,
                    // tabBarIcon: getHomeIcon,
                    // tabBarHideOnKeyboard: true,
                    // tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen name="MobileCamera" component={MobileCamera} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigations;
