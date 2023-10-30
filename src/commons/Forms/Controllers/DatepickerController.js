import React from 'react';
import {Controller} from 'react-hook-form';

import Datepicker from '../components/DatePicker';

function DatepickerController(props) {
    const {name, control, rules, value, ...rest} = props;

    return (
        <Controller
            key={name}
            control={control}
            name={name}
            rules={rules}
            defaultValue={value}
            render={({field: {onChange, onBlur, value: newValue}}) => (
                <Datepicker
                    {...rest}
                    key={name}
                    id={name}
                    onChange={onChange}
                    value={newValue || ''}
                    onBlur={onBlur}
                />
            )}
        />
    );
}
export default DatepickerController;
