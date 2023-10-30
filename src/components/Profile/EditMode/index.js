import {Text, View, TouchableOpacity} from 'react-native';
import controls from '../configurations/get-edit-profile-controls';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import getController from '../../../commons/Forms/Controllers/getController';
import useUpdateProfile from '../hooks/useUpdateProfile';

const EditMode = ({setMode = () => {}}) => {
    const {loading, control, handleSubmit, handleClick} = useUpdateProfile({
        setMode,
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>Edit Profile</Text>
                </View>

                {(controls || []).map(item => {
                    const Element = getController({
                        type: item?.inputType || 'text',
                    });
                    return (
                        <View key={item?.name} style={styles.form_field_div}>
                            <Text style={styles.mobile_label}>
                                {item?.label}
                            </Text>
                            <View style={styles.input_mobile}>
                                <Element
                                    control={control}
                                    style={styles.input_mobile}
                                    {...item}
                                />
                            </View>
                        </View>
                    );
                })}

                <View style={styles.button_div}>
                    <TouchableOpacity
                        style={styles.button_item}
                        onPress={() => setMode('view')}>
                        <View style={styles.buttonContainerGhost}>
                            <Icon name="arrow-left" size={16} color="#000" />
                            <Text style={styles.buttonTextGhost}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={loading}
                        style={styles.button_item}
                        onPress={handleSubmit(handleClick)}>
                        <View style={styles.buttonContainer}>
                            <Icon
                                name="content-save-move"
                                size={16}
                                color="#000"
                            />
                            <Text style={styles.buttonText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default EditMode;
