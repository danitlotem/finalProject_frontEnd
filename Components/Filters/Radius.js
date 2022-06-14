import React, {useState} from 'react';
import {View, Text, Modal, Button, Pressable, StyleSheet} from 'react-native';
import RnVerticalSlider from 'rn-vertical-slider';
//import styles from '../../Styles/FiltersStyle';

const Radius = props => {
  const [visible, setVisible] = useState(false);
  const [radiusVal, setRadiusVal] = useState(1);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
            <Text style={{fontSize: 18}}>Radius</Text>
          </View>
          <View
            style={{
              top: 50,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <RnVerticalSlider
              value={radiusVal}
              disabled={false}
              min={0}
              max={100}
              onChange={value => {
                props.setRadius(value); //FIX ME
              }}
              onComplete={value => {
                console.log('COMPLETE', value);
              }}
              width={50}
              height={300}
              step={1}
              borderRadius={5}
            />

            <View style={{top: 50, width: 250, alignSelf: 'center'}}>
              <Button title={'close'} onPress={hideModal} />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable title={'Mode'} onPress={showModal}>
        <Text style={{color: '#FFFFFF', fontSize: 16}}>Radius</Text>
      </Pressable>
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

export default Radius;
