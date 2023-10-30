import {ToastAndroid} from 'react-native';
import useRequest from '../../../commons/request/useRequest';
import Sound from 'react-native-sound';
import RNFetchBlob from 'rn-fetch-blob';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const useTrip = ({ref, tripId = null, setTripId = () => {}}) => {
    const {token} = useSelector(({auth}) => auth);

    const [{startLoading}, startTrigger] = useRequest({
        url: '/start_trip',
        method: 'post',
    });

    const [{endLoading}, endTrigger] = useRequest({
        url: '/end_trip',
        method: 'post',
    });

    const [{}, captureTrigger] = useRequest({
        url: '/check_drowsiness',
        method: 'post',
    });
    const beep = new Sound('beep.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
            return;
        }
    });

    const onCapture = async () => {
        const capturedImage = await ref.current.takePhoto({
            enableShutterSound: false,
        });

        const binaryData = await RNFetchBlob.fs.readFile(
            capturedImage?.path,
            'base64',
        );

        const payload = {
            image: binaryData,
            trip_id: tripId,
        };

        const {data} = await captureTrigger({data: payload});

        if (data?.status !== 'is_not_sleeping') {
            ToastAndroid.showWithGravity(
                data?.message,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        }

        if (data?.status === 'is_sleeping') {
            beep.play();
        }
    };

    useEffect(() => {
        const captureInterval = setInterval(onCapture, 3500);

        if (tripId === null) {
            clearInterval(captureInterval);
        }

        return () => clearInterval(captureInterval);
    }, [tripId, beep, onCapture]);

    const handleClick = async () => {
        const trigger = tripId === null ? startTrigger : endTrigger;

        try {
            const payload = {
                trip: {
                    latitude: 'string',
                    longitude: 'string',
                    id: tripId || undefined,
                },
                session: {
                    session_id: token,
                },
            };

            const {data: resData} = await trigger({data: payload});

            if (resData) {
                ToastAndroid.showWithGravity(
                    `Trip ${tripId ? 'ended' : 'started'} successfully`,
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                );
            }

            if (tripId === null) {
                setTripId(resData?.id);
            } else {
                setTripId(null);
            }
        } catch (error) {
            const error_message =
                JSON.stringify(error?.response?.data?.detail) ||
                'invalid_request';

            ToastAndroid.showWithGravity(
                error_message,
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
            );
        }
    };

    return {
        loading: startLoading && endLoading,
        handleClick,
    };
};

export default useTrip;
