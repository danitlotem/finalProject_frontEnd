import React, {useState} from 'react';
import {View, StyleSheet, Modal, Pressable, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const searchModeItems = props => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const state = useSelector(state => state);
  const modes = state.rawText.filters.Search_Mode;
  const items = modes.map((item, index) => {
    return (
      <Pressable
        style={{marginTop: 20}}
        key={index}
        onPress={() => props.setSearchMode(item)}>
        <Text
          style={{
            fontSize: 18,
            color: item === props.value ? 'red' : '#1B8AA0',
          }}>
          {item}
        </Text>
      </Pressable>
    );
  });

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
          <View style={styles.searchModeList}>{items}</View>
          <View style={{marginTop: 70}}>
            <Button title={'close'} onPress={hideModal} />
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          title={'Mode'}
          onPress={showModal}>
          <Text>{props.title}</Text>
        </Pressable>
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
  searchModeList: {
    top: 40,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
  },
});

export default searchModeItems;
