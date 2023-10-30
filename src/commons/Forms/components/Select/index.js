import React, {useEffect, useState, useMemo} from 'react';
import {
    Pressable,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

function Select({
    id,
    name,
    style,
    options = [],
    placeholder,
    value,
    label,
    mode = 'outlined',
    loading = false,
    onChange,
    valueKey = 'value',
    labelKey = 'label',
    onSearch,
    onHydrateValue = null,
    isClearable = false,
    disabled,
    prefix = false,
    suffix,
    renderLabel,
}) {
    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [hydratedValue, setHydratedValue] = useState(null);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                rotateZ: isOpen ? '180deg' : '0deg',
            },
        ],
    }));

    const handleSearch = e => {
        if (onSearch) {
            onSearch(e);
        } else {
            setSearchValue(e);
        }
    };

    const filteredOptions = useMemo(() => {
        if (searchValue) {
            return options.filter(o =>
                o?.[labelKey]
                    ?.toLowerCase()
                    ?.includes(searchValue?.toLowerCase()),
            );
        }
        return options;
    }, [labelKey, options, searchValue]);

    useEffect(() => {
        (async () => {
            if (typeof onHydrateValue === 'function' && value) {
                const newHydratedValue = await onHydrateValue(value);
                setHydratedValue(newHydratedValue);
            } else if (value) {
                const newHydratedValue =
                    options?.find(option => option[valueKey] === value) || null;
                setHydratedValue(newHydratedValue);
            } else if (value === undefined || value === null) {
                setHydratedValue({});
                onChange('');
            }
        })();
    }, [value]);
    const placevalue =
        typeof hydratedValue?.[labelKey] === 'string'
            ? hydratedValue?.[labelKey]
            : null;

    return (
        <View
            style={[
                styles.container,
                style,
                isOpen && styles.is_open,
                disabled && styles.is_disabled,
            ]}>
            <View style={[styles.display_container, isOpen && styles.active]}>
                <Pressable
                    style={[styles.toggle_button]}
                    onPress={() => (disabled ? null : setIsOpen(o => !o))}>
                    {/* {prefix ? (
						<View style={styles.prefix}>
							{prefix}
						</View>
					) : null} */}

                    <View style={styles.input_container} pointerEvents="none">
                        <TextInput
                            id={id}
                            style={{backgroundColor: '#fff'}}
                            placeholder={
                                !isOpen
                                    ? placeholder ||
                                      placevalue ||
                                      label ||
                                      'Select below...'
                                    : ''
                            }
                            list=""
                            multiline
                            disabled={disabled || loading}
                            name={name}
                            contentStyle={{
                                maxWidth: '78%',
                                textAlignVertical: 'center',
                                color: '#000',
                                marginTop: 5,
                            }}
                            value={placevalue}
                            left={prefix}
                            mode={mode}
                            type="hidden"
                            outlineStyle={{
                                borderRadius: 8,
                                borderColor: '#BDBDBD',
                                borderWidth: 0.4,
                                height: 40,
                            }}
                            placeholderTextColor="#BDBDBD"
                        />

                        {isOpen ? (
                            <TextInput
                                style={[styles.input_control]}
                                placeholder={
                                    label ||
                                    placevalue ||
                                    placeholder ||
                                    'Select below...'
                                }
                                contentStyle={{
                                    maxWidth: '78%',
                                    textAlignVertical: 'center',
                                }}
                                mode={mode}
                                multiline
                                disabled={disabled}
                                left={prefix}
                                onChangeText={e => {
                                    handleSearch(e);
                                }}
                                autoFocus
                                outlineStyle={{
                                    borderRadius: 8,
                                    borderColor: '#BDBDBD',
                                    borderWidth: 0.4,
                                }}
                                placeholderTextColor="#BDBDBD"
                            />
                        ) : null}
                    </View>
                </Pressable>
                <View style={styles.svgs_container}>
                    {loading ? (
                        <ActivityIndicator
                            animating
                            size="small"
                            color="#000"
                        />
                    ) : null}

                    {suffix ? <View>{suffix}</View> : null}

                    {isClearable && value ? (
                        <TouchableOpacity
                            style={[styles.delete_button, styles.disbled_icon]}
                            onPress={() => {
                                disabled ? null : setHydratedValue({});

                                disabled ? null : onChange('');
                            }}>
                            <DeleteIcon name="delete" size={20} color="#000" />
                        </TouchableOpacity>
                    ) : null}

                    <TouchableOpacity
                        style={[
                            styles.toggle_svg,
                            disabled && styles.disbled_icon,
                        ]}
                        onPress={() => (disabled ? null : setIsOpen(o => !o))}>
                        <Animated.View style={animatedStyles}>
                            <ArrowIcon
                                name="caretdown"
                                // size={14}
                                color="#000"
                            />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>

            {isOpen ? (
                <View style={[styles.options_relative_container]}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={[styles.options_container]}
                        keyboardShouldPersistTaps="always"
                        nestedScrollEnabled>
                        {/* <KeyboardAvoidingView
							style={{ flex: 1 }}
							keyboardVerticalOffset={100}
							behavior="height"
						> */}
                        {loading ? (
                            <Text style={styles.list_item}>Loading...</Text>
                        ) : (
                            <TouchableOpacity>
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option, index) => (
                                        <Pressable
                                            key={`${option?.[valueKey]}-${index}`}
                                            style={styles.option_item}
                                            onPress={() => {
                                                onChange(
                                                    option?.[valueKey],
                                                    option,
                                                );
                                                setIsOpen(false);
                                            }}>
                                            {typeof renderLabel !==
                                            'function' ? (
                                                <Text style={styles.list_item}>
                                                    {option?.[labelKey]}
                                                </Text>
                                            ) : (
                                                renderLabel(option, labelKey)
                                            )}
                                        </Pressable>
                                    ))
                                ) : (
                                    <Text style={styles.list_item}>
                                        No results found
                                    </Text>
                                )}
                            </TouchableOpacity>
                        )}
                        {/* </KeyboardAvoidingView> */}
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
}

export default Select;
