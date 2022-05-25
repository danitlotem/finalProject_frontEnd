import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}
async function GetFCMToken() {
  const dispatch = useDispatch();
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('old token', fcmtoken);

  if (!fcmtoken) {
    try {
      fcmtoken = await messaging().getToken();
      console.log(fcmtoken);
      if (!fcmtoken) {
        console.log('new token', fcmtoken);
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
      dispatch({
        type: 'UPDATE_DEVICE_TOKEN',
        deviceToken: fcmtoken,
      });
    } catch (error) {
      console.log(error, 'error in fcmtoken');
    }
  }
}
