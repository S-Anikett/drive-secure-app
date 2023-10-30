import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import NAVIGATION_MAPPINGS from './get-navigations-mappings';

import styles from './styles';

function CustomTabBar({state, navigation}) {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View
            style={[
                styles.tabBar,
                {display: keyboardStatus ? 'none' : 'flex'},
            ]}>
            {state.routes.map((route, ind) => {
                const isFocused = state.index === ind;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const config = NAVIGATION_MAPPINGS[route?.name];

                const isMiddleTab = route?.name === 'MobileCamera';

                return (
                    // <View key={route?.key}>
                    <TouchableOpacity
                        key={route?.key}
                        onPress={onPress}
                        style={[styles.tabButton, {flex: isMiddleTab ? 1 : 2}]}>
                        <View
                            style={[
                                config?.styles.main,
                                {
                                    opacity: isFocused ? 1 : 0.5,
                                },
                            ]}>
                            <Icon
                                color={
                                    isFocused
                                        ? config.icon.focusedColor
                                        : '#000'
                                }
                                name={config?.icon?.name}
                                size={30}
                            />
                        </View>
                        {!isMiddleTab ? (
                            <View style={config?.styles.after} />
                        ) : null}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default CustomTabBar;
