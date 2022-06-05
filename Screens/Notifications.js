import React, {useState, useEffect} from 'react';
import {View, Pressable, Text} from 'react-native';
import NotificationItem from '../Components/NotificationItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/NotificationStyle';
import axios from 'axios';
import {useSelector} from 'react-redux';

const Notifications = () => {
  const userConfig = useSelector(state => state.userConfig);
  const [notifications, setNotifications] = useState([]);
  const showNotifications = async userNum => {
    try {
      const res = await axios.get(
        `http://192.168.1.141:3000/notifications/${userConfig.user_id}`,
      );
      setNotifications(res.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    showNotifications();
  }, []);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{width: '100%', alignSelf: 'center'}}>
        <Pressable style={styles.clearAllBtn}>
          <Ionicons name="trash-outline" size={25} color={'white'} />
          <Text style={styles.textClearBtn}>Clear All</Text>
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        {notifications.map(item => {
          return <NotificationItem details={item} />;
        })}
      </View>
    </View>
  );
};

export default Notifications;
