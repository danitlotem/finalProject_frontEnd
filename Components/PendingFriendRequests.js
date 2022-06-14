import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import UserItem from '../Components/userItem';

const PendingFriendRequests = props => {
  const userConfig = useSelector(state => state.userConfig);
  const myConnections = 'http://192.168.1.141:3000/friendRequest/sendRequests/';
  const [listOfConf, setlistOfConf] = useState([]);

  const getMyFriendRequest = async () => {
    try {
      const friends = await axios.get(`${myConnections}${userConfig.user_id}`);
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
      <Text>Pending friend request</Text>
      {listOfConf.map(item => {
        return (
          <UserItem
            config={item}
            key={`${item.user_id}`}
            type={'requestsUserSent'}
          />
        );
      })}
    </View>
  );
};

export default PendingFriendRequests;
