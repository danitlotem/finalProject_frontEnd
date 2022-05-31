import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/NotificationStyle';

const NotificationItem = () => {
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
          <Text style={styles.title}>Title</Text>
          <Text style={styles.body}>Body</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text>creation date</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
