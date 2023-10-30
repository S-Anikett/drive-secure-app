import React from 'react';
import {Controller} from 'react-hook-form';

import Select from '../components/Select';

function SelectController(props) {
    const {
        name = '',
        control,
        value,
        rules,
        mode = 'outlined',
        ...rest
    } = props;

    return (
        <Controller
            key={name}
            control={control}
            name={name}
            defaultValue={value}
            rules={rules}
            render={({field: {onChange, onBlur, value: newValue}}) => (
                <Select
                    {...rest}
                    key={`${name}_${newValue}`}
                    id={name}
                    mode={mode}
                    onChange={(val, obj) => {
                        onChange(val, obj);
                        if (rest.handleChange) {
                            rest.handleChange(obj, name);
                        }
                    }}
                    value={newValue || ''}
                    onBlur={onBlur}
                />
            )}
        />
    );
}

export default SelectController;
