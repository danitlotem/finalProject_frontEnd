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
  const url = 'http://192.168.1.141:3000/userPictures/';
  const userConfig = useSelector(state => state.userConfig);

  const animation = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const fullName = useSelector(state => state.fullName);
  const searchMode = useSelector(state => state.searchMode);
  const searchModeOptions = useSelector(
    state => state.rawText.filters.Search_Mode,
  );
  const raw = useSelector(state => state.rawText);
  const getPhotos = async () => {
    try {
      const userPhotos = await axios.get(`${url}${userConfig.user_id}`);
      setPhotos(userPhotos.data);
    } catch (error) {
      alert(error);
    }
  };
  const conf = useSelector(state => state.userConfig);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
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

  // const handleAnimation = () => {
  //   if (pressed === true) animation.current.play();
  //   setTimeout(() => {
  //     navigation.navigate('Nearby People');
  //   }, 3000);
  // };

  // const onScreenLoad = () => {
  //   animation.current.reset();
  // };

  // useEffect(() => {
  //   if (isFocused) {
  //     setPressed(false);
  //     onScreenLoad();
  //   }
  // }, []);

  useEffect(() => {
    getPhotos();
    if (photos.length === 0) {
      setVisible(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {photos === [] && (
          <Modal transparent={true} visible={visible}>
            <View
              style={{
                padding: 20,
                elevation: 10,
                backgroundColor: '#ffff',
                height: '80%',
                width: '80%',
                marginTop: 80,
                marginLeft: 40,
              }}>
              <Pressable onPress={() => setVisible(!visible)}>
                <Text style={{fontSize: 18}}>X</Text>
              </Pressable>
              <SignUp2 hide={setVisible} />
            </View>
          </Modal>
        )}
      </View>
      <View style={styles.innterContainer}>
        <Text style={styles.text}>Welcome {fullName}!</Text>
        <View>
          <Pressable
            style={styles.pressPic}
            // onPress={() => {
            //   setPressed(true);
            //   pressed && handleAnimation();
            // }}
          >
            <Avatar.Image
              size={150}
              style={styles.myPic}
              source={{uri: `data:image/gif;base64,${conf.image}`}}
            />
            <LottieView
              ref={animation}
              style={styles.lottiStyle}
              source={require('../Images/Shazam1.json')}
            />
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
