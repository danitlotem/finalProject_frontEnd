import React from 'react';
import {View} from 'react-native';
import ChatItem from '../Components/Chat/ChatItem';
// import styles from '../Styles/ChatStyle';
import UpperBar from '../Components/UpperBar';

const Chat = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#61AF9B', height: '100%'}}>
      <UpperBar title={'Chats'} />
      <View>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
    </View>
  );
};

export default Chat;
