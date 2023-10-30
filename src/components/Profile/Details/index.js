import ViewMode from './ViewMode';
import {ScrollView} from 'react-native';

const Details = ({data = {}, setMode = () => {}}) => {
    return (
        <ScrollView>
            <ViewMode setMode={setMode} data={data} />
        </ScrollView>
    );
};

export default Details;
