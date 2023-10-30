import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';
import styles from './styles';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DatePicker = props => {
    const {
        placeholder = 'Select Date',
        onChange = () => {},
        value = null,
        ...rest
    } = props;
    const [date, setDate] = useState(value);
    const [show, setShow] = useState(false);

    const onChangeDate = (event, val) => {
        setShow(false);
        setDate(val);
        onChange(val);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => setShow(!show)}
                style={styles.input_div}>
                <Text style={styles.placeholder}>
                    {(date && moment(date).format('DD MMM yyyy')) || (
                        <Text style={styles.placeholer_text}>
                            {placeholder}
                        </Text>
                    )}
                </Text>
                <Icon name="calendar-month" color="#000" size={20} />
            </TouchableOpacity>
            {show ? (
                <DateTimePicker
                    {...rest}
                    value={date || new Date()}
                    mode="date"
                    onChange={onChangeDate}
                />
            ) : null}
        </View>
    );
};

export default DatePicker;
