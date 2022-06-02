import React, {useState} from 'react';
import {View, StyleSheet, Modal, Pressable, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FilterItem = props => {
  const arr = props.arr.slice(1);
  const [visible, setVisible] = useState(false);
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
            flexDirection: 'column',
          }}>
          <View
            style={{
              //flexDirection: 'column',
              //justifyContent: 'space-around',
              // flexWrap: 'wrap',
              // alignItems: 'flex-start',
              marginTop: 50,
            }}>
            {arr.map(item => {
              return (
                <Pressable
                  key={item}
                  onPress={() => {
                    props.function(item);
                    hideModal();
                  }}>
                  <Text
                    style={{
                      color: item === props.value ? 'red' : '#1B8AA0',
                      backgroundColor: '#ffff',
                      elevation: 5,
                      margin: 10,
                      fontSize: 22,
                      alignSelf: 'center',
                    }}>
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View style={{top: 100}}>
            <Button title={'close'} onPress={hideModal} />
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
          <Text>{props.title}</Text>
        </Pressable>
        <Pressable
          style={{justifyContent: 'center'}}
          onPress={() => props.function(props.arr[0])}>
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
    backgroundColor: '#B3D8D4',
    padding: 7,
    margin: 5,
    borderRadius: 15,
    width: 140,
    borderWidth: 2,
    borderColor: '#0E6070',
    elevation: 5,
  },
});

export default FilterItem;
