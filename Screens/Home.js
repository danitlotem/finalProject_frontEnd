import React, {useEffect, useRef, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {View, Text, Pressable, SafeAreaView, Modal, Button} from 'react-native';
import {List} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import styles from '../Styles/HomeStyle';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar} from 'react-native-paper';
import SignUp2 from './SignUp2';
import axios from 'axios';
const Home = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  const [photos, setPhotos] = useState([]);
  const url = 'http://192.168.1.141:3000/userPictures/main/';
  const userConfig = useSelector(state => state.userConfig);
  const [visible, setVisible] = useState(false);

  const fullName = useSelector(state => state.fullName);
  const searchMode = useSelector(state => state.searchMode);
  const raw = useSelector(state => state.rawText);
  const searchModeOptions = raw.filters.Search_Mode;

  const getPhotos = async () => {
    try {
      const userPhotos = await axios.get(`${url}${userConfig.user_id}`);
      setPhotos(userPhotos.data);
      if (userPhotos.data.length === 0) {
        setVisible(true); //BUG async commands
      }
    } catch (error) {
      alert(error);
    }
  };
  const conf = useSelector(state => state.userConfig);
  const dispatch = useDispatch();
  const changeMode = item => {
    setExpanded(!expanded);
    dispatch({
      type: 'UPDATE_SEARCH_MODE',
      searchMode: item,
    });
  };

  const items = searchModeOptions.map((item, index) => {
    return (
      <List.Item
        style={{padding: 2}}
        title={item}
        key={index}
        onPress={() => changeMode(item)}
      />
    );
  });

  useEffect(() => {
    setVisible(false);
    getPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <SignUp2 visible={visible} setVisible={setVisible} />
      </View>
      <View style={styles.innterContainer}>
        <Text style={styles.text}>Welcome {fullName}!</Text>
        <View>
          <Pressable style={styles.pressPic}>
            <Avatar.Image
              size={150}
              style={styles.myPic}
              source={{uri: `data:image/gif;base64,${conf.image}`}}
            />
            {/* <LottieView
              ref={animation}
              style={styles.lottiStyle}
              source={require('../Images/Shazam1.json')}
            /> */}
          </Pressable>
        </View>
        <SafeAreaView style={styles.searchModeList}>
          <List.Accordion
            title={searchMode}
            style={{height: 40, padding: 2}}
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}>
            {items}
          </List.Accordion>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;
