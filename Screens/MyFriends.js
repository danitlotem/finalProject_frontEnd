import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  Pressable,
  Modal,
  Button,
} from 'react-native';
import axios from 'axios';
import UserItem from '../Components/userItem';
import styles from '../Styles/MyFriendsStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import PendingFriendRequests from '../Components/PendingFriendRequests';
import MyFriendRequests from '../Components/MyFriendRequests';

const MyFriends = () => {
  const dispatch = useDispatch();
  const myConnections = 'http://192.168.1.141:3000/connections///byName/';
  const userConfig = useSelector(state => state.userConfig);
  const listOfConf = useSelector(state => state.myFriends);

  const friendToSearch = useSelector(state => state.friendToSearch);
  const [friendName, setFriendName] = useState(friendToSearch);
  const [visibleMyRequests, setVisibleMyRequests] = useState(false);
  const [visiblePendingRequests, setVisiblePendingRequests] = useState(false);

  const FindFriend = async () => {
    const valToSearch = friendToSearch === '' ? '%20' : friendToSearch;
    try {
      const friends = await axios.get(
        `${myConnections}${userConfig.user_id}/1/${valToSearch}`,
      );
      if (friends.data.hasOwnProperty('msg')) {
        alert(friends.data.msg); // there are no connections?
      } else {
        dispatch({
          type: 'UPDATE_MY_FRIENDS',
          myFriends: friends.data,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    FindFriend();
  }, [friendToSearch]);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={visibleMyRequests}>
        <MyFriendRequests setVisible={setVisibleMyRequests} />
      </Modal>
      <Modal transparent={true} visible={visiblePendingRequests}>
        <PendingFriendRequests setVisible={setVisiblePendingRequests} />
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={styles.textInput}
          placeholder={`Search a friend`}
          onChangeText={val => setFriendName(val)}
        />
        <Button
          style={{width: 17, position: 'absolute'}}
          color="#0E6070"
          title="Search"
          onPress={() => {
            dispatch({
              type: 'FRIEND_TO_SEARCH',
              friendToSearch: friendName,
            });
          }}
        />
        <Pressable
          style={{justifyContent: 'center'}}
          onPress={() => {
            dispatch({
              type: 'FRIEND_TO_SEARCH',
              friendToSearch: '',
            });
          }}>
          <Ionicons
            color={'#1B8AA0'}
            size={32}
            style={{
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 5,
            }}
            name={'trash-outline'}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Pressable
          style={styles.requestPressable}
          onPress={() => setVisibleMyRequests(true)}>
          <Text style={styles.requestText}>My friend requests</Text>
        </Pressable>
        <Pressable
          style={styles.requestPressable}
          onPress={() => setVisiblePendingRequests(true)}>
          <Text style={styles.requestText}>Pending friend request</Text>
        </Pressable>
      </View>
      <SafeAreaView style={{top: 30}}>
        {listOfConf.map(item => {
          return (
            <UserItem config={item} key={`${item.user_id}`} type={'friend'} />
          );
        })}
      </SafeAreaView>
    </View>
  );
};

export default MyFriends;
