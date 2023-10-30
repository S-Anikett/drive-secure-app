import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

function InputController(props) {
    const {
        name = '',
        control,
        width = '100%',
        value,
        rules,
        toggleSecuredTextEntry,
        // error,
        ...rest
    } = props;

    return (
        <View style={{width, ...rest.style}}>
            <Controller
                key={name}
                name={name}
                control={control}
                defaultValue={value}
                rules={rules}
                render={({field: {onChange, onBlur, value: newValue}}) => (
                    <TextInput
                        {...rest}
                        id={name}
                        mode="outlined"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={newValue || ''}
                        style={{
                            backgroundColor: '#fff',
                            height: 40,
                        }}
                        keyboardType={rest?.inputType || 'default'}
                        outlineStyle={{
                            borderRadius: 8,
                            borderColor: '#BDBDBD',
                            borderWidth: 0.4,
                        }}
                        contentStyle={{
                            color: '#000',
                        }}
                        left={
                            rest?.left_text ? (
                                <TextInput.Affix text={rest?.left_text} />
                            ) : null
                        }
                        right={
                            ['password'].includes(rest.inputType) ? (
                                <TextInput.Icon
                                    onPress={toggleSecuredTextEntry}
                                    icon={
                                        rest.secureTextEntry ? 'eye-off' : 'eye'
                                    }
                                    iconColor="#4f4f4f"
                                    size={20}
                                />
                            ) : null
                        }
                        placeholderTextColor="#BDBDBD"
                    />
                )}
            />
        </View>
    );
}

export default InputController;
