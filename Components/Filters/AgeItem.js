import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Button, Pressable, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
//import styles from '../../Styles/FiltersStyle';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AgeItem = props => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const config = useSelector(state => state.userConfig);
  const stateFilters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const [min, setMin] = useState(config.age - 5);
  const [max, setMax] = useState(config.age + 5);

  return (
    <View style={styles.viewStyle}>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            padding: 20,
            elevation: 10,
            backgroundColor: '#ffff',
            height: '80%',
            width: '80%',
            marginTop: 80,
            marginLeft: 40,
          }}>
          <View style={{top: 50, alignSelf: 'center', position: 'absolute'}}>
            <Text style={{fontSize: 22, color: '#1B8AA0', fontWeight: 'bold'}}>
              Age
            </Text>
          </View>
          <View style={{top: 150}}>
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 18}}>{`${min}-${max}`}</Text>
            </View>
            <MultiSlider
              sliderLength={250}
              isMarkersSeparated={true}
              min={18}
              max={100}
              values={[min, max]}
              onValuesChangeFinish={values => {
                setMax(values[1]), setMin(values[0]), props.setAge(values);
              }}
            />
            <View style={{top: 50, width: 250, alignSelf: 'center'}}>
              <Button title={'close'} onPress={hideModal} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={showModal}>
          {/* FIX ME -  stateFilters.age_filter !== [] only after apply*/}
          <Text style={{color: '#FFFFFF', fontSize: 16}}>
            {min}-{max}
          </Text>
        </Pressable>
        <Pressable
          style={{justifyContent: 'center'}}
          onPress={() => {
            setMax(config.age + 5),
              setMin(config.age - 5),
              props.setAge([min, max]);
          }}>
          <Ionicons
            color={'#1B8AA0'}
            size={18}
            style={{
              marginTop: -10,
              marginBottom: -10,
              left: 30,
              alignSelf: 'center',
            }}
            name={'trash-outline'}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#61AF9B',
    padding: 7,
    margin: 5,
    borderRadius: 5,
    width: 140,
    borderWidth: 1,
    borderColor: '#0E6070',
    elevation: 5,
  },
});

export default AgeItem;
