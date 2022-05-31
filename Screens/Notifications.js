import React from 'react';
import {View, Pressable, Text} from 'react-native';
import NotificationItem from '../Components/NotificationItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/NotificationStyle';
const Notifications = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{width: '100%', alignSelf: 'center'}}>
        <Pressable style={styles.clearAllBtn}>
          <Ionicons name="trash-outline" size={25} color={'white'} />
          <Text style={styles.textClearBtn}>Clear All</Text>
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </View>
    </View>
  );
};

export default Notifications;
