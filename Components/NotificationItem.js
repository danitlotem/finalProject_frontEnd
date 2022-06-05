import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/NotificationStyle';

const NotificationItem = props => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.Pressables}>
        <Ionicons name="close-outline" size={35} color={'#0E6070'} />
        <Ionicons
          name="notifications-outline"
          size={35}
          color={'#0E6070'}
          style={{
            backgroundColor: '#65B0C6',
            borderRadius: 18,
            padding: 4,
          }}
        />
      </Pressable>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.Details}>
          <Text style={styles.title}>{props.details.title}</Text>
          <Text style={styles.body}>{props.details.content}</Text>
        </View>
        <View>
          {/* BUG - OUT OF SCREEN RANGE */}
          <Text>{props.details.creation_date}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
