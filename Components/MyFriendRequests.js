import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import UserItem from '../Components/userItem';

const MyFriendRequests = props => {
  const userConfig = useSelector(state => state.userConfig);
  const [listOfConf, setlistOfConf] = useState([]);
  const user_id = useSelector(state => state.userConfig.user_id);

  const onConfirm = async userNum => {
    try {
      const res = await axios.post(
        `http://192.168.1.141:3000/friendRequest/approve/${user_id}/${userNum}`,
      );
      alert('GOOD🥳');
    } catch (error) {
      alert(error);
    }
  };

  const getMyFriendRequest = async () => {
    try {
      const friends = await axios.get(
        `http://192.168.1.141:3000/friendRequest/recievedRequests/${userConfig.user_id}`,
      );
      if (friends.data.hasOwnProperty('msg')) {
        alert(friends.data.msg); // there are no connections?
      } else {
        setlistOfConf([...friends.data]);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getMyFriendRequest();
  }, []);

  return (
    <View
      style={{
        padding: 20,
        elevation: 10,
        backgroundColor: '#ffff',
        height: '80%',
        width: '90%',
        marginTop: 80,
        alignSelf: 'center',
      }}>
      <Pressable
        style={{height: 30, width: 30, alignSelf: 'flex-start'}}
        onPress={() => props.setVisible(false)}>
        <Text>X</Text>
      </Pressable>
      <Text>My friend request</Text>
      {listOfConf &&
        listOfConf.map(item => {
          return (
            <UserItem
              config={item}
              key={`${item.user_id}`}
              type={'requestsUserReceived'}
              function={onConfirm}
            />
          );
        })}
    </View>
  );
};

export default MyFriendRequests;
