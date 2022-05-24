import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Modal} from 'react-native';
import UserProfile from './UserProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserItem = props => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const config = props.config;

  const typeIcon = () => {
    if (props.type === 'notFriend')
      return <Ionicons name="person-add-outline" size={30} />;

    if (props.type === 'friend') {
      return <Ionicons name="chatbubble-ellipses-outline" size={30} />;
    }
    if (props.type === 'requestsUserSent') {
      return <Ionicons name="add-circle-outline" size={30} />;
    } else {
      return <Ionicons name="send-outline" size={30} />;
    }
  };

  const onPressType = () => {
    if (props.type === 'notFriend') {
      props.function(config.user_id);
    }
    if (props.type === 'friend') {
      alert("let's start new chat ");
    }
    if (props.type === 'requestsUserReceived') {
      props.function(config.user_id);
    } else {
      alert('friend request issues');
    }
  };

  return (
    <View style={styles.UserItem}>
      <Modal transparent={true} visible={visible}>
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
          <UserProfile {...props} closeModal={hideModal} />
        </View>
      </Modal>
      <Pressable style={{flexDirection: 'row'}} onPress={showModal}>
        <View
          style={{
            paddingRight: 20,
            justifyContent: 'center',
          }}>
          {config.image && (
            <Image
              style={styles.Picture}
              source={{uri: `data:image/gif;base64,${config.image}`}}
            />
          )}
        </View>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
          }}>
          <View style={styles.Details}>
            <View>
              <Text style={styles.friendName}>
                {config.first_name} {config.last_name}
              </Text>
            </View>
            <View>
              <Text style={styles.friendAge}>age: {config.age}</Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              justifyContent: 'center',
            }}>
            <Pressable onPress={() => onPressType()}>{typeIcon}</Pressable>
            {/* <Pressable>
              <Ionicons name="information-circle-outline" size={35} />
            </Pressable> */}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  UserItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#165461',
    borderWidth: 1.5,
  },
  Picture: {
    width: 40,
    height: 40,
  },
  Details: {
    paddingRight: 40,
    alignContent: 'flex-start',
  },
  friendName: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  friendAge: {
    fontSize: 18,
    alignItems: 'flex-start',
    color: '#0E6070',
    fontWeight: 'bold',
  },
});

export default UserItem;