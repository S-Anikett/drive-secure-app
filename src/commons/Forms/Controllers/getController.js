import DatepickerController from './DatepickerController';
import InputController from './InputController';
import SelectController from './SelectController';

const CONTROL_TYPE_MAPPING = {
    text: InputController,
    numeric: InputController,
    select: SelectController,
    date: DatepickerController,
};

const getController = ({type = 'text'}) => {
    return CONTROL_TYPE_MAPPING[type];
};

export default getController;
