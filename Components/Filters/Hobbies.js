import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Hobbies = props => {
  const listOfHobbies = useSelector(state => state.rawText.Hobbies);
  const myHobbies = useSelector(state => state.myHobbies);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();

  const addToList = val => {
    dispatch({
      type: 'UPDATE_MY_HOBBIES',
      myHobbies: [...myHobbies, val],
    });
    // console.log(myHobbies);
  };
  return (
    <View style={props.style}>
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
          <View style={{top: 20, alignSelf: 'center', position: 'absolute'}}>
            <Text style={{fontSize: 18}}>Hobbies</Text>
          </View>
          <ScrollView
            style={{
              top: 20,
              alignSelf: 'center',
              height: 100,
              width: '100%',
              marginVertical: 30,
            }}>
            {[...listOfHobbies].slice(1).map((element, elmIndx) => {
              return (
                <View key={elmIndx}>
                  <Text style={{fontWeight: 'bold', marginTop: 10}}>
                    {element.type}
                  </Text>

                  {element.lst.map((item, index) => {
                    return (
                      <TouchableOpacity
                        //FIX ME reRender on press
                        style={{
                          backgroundColor: myHobbies.includes(item)
                            ? '#81BEC9'
                            : 'transparent',
                          borderRadius: 3,
                          padding: 2,
                        }}
                        key={index}
                        onPress={() => addToList(item)}>
                        <Text>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                  <Divider style={{marginTop: 7}} />
                </View>
              );
            })}
          </ScrollView>
          <View style={{alignSelf: 'center'}}>
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
          <Text>{props.text}</Text>
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
          onPress={() => {
            dispatch({
              type: 'UPDATE_MY_HOBBIES',
              myHobbies: [],
            });
          }}
        />
      </View>
    </View>
  );
};

export default Hobbies;
