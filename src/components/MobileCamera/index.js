import {SafeAreaView} from 'react-native-safe-area-context';
import Capture from './Capture';

const MobileCamera = () => {
    return (
        <SafeAreaView>
            <Capture />
        </SafeAreaView>
    );
};

export default MobileCamera;
