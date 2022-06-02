import React from 'react';
import {View} from 'react-native';
import ChatItem from '../Components/Chat/ChatItem';
import styles from '../Styles/ChatStyle';

const Chat = () => {
  return (
    <View>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </View>
  );
};

export default Chat;
