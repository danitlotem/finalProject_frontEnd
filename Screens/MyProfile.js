import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Chip, Avatar} from 'react-native-paper';
import Hobbies from '../Components/Filters/Hobbies';
import TInput from '../Components/TInput';
import styles from '../Styles/MyProfileStyle';
import {useSelector} from 'react-redux';
import axios from 'axios';

//FIX ME ליצור אובייקט שישמש כסטייט זמני וכשלוחצים על כפתור הוא יחליף את הקונפיגורציה בסטייט ובשרת

const MyProfile = () => {
  // const [date, setDate] = useState();
  const [edit, setEdit] = useState(false);
  const [photos, setPhotos] = useState([]);
  const state = useSelector(state => state);
  const userConfig = useSelector(state => state.userConfig);
  const hobbies = userConfig.hobbies;
  const url = 'http://192.168.1.141:3000/userPictures/';
  const rawText = useSelector(state => state.rawText.registration_form);

  const getPhotos = async () => {
    try {
      const photos = await axios.get(`${url}${userConfig.user_id}`);
      setPhotos(photos.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const items = [hobbies].map((item, index) => {
    return (
      <Text style={{marginTop: 4, left: 25}} key={index}>
        {item}
      </Text>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          {photos.map(item => {
            return (
              <Avatar.Image
                size={80}
                key={photos.fileName}
                style={styles.myPic}
                source={{uri: `data:image/gif;base64,${item.image}`}}
              />
            );
          })}

          {/* <Pressable onPress={() => console.log('plus pressed')}>
            <Image
              style={styles.addPic}
              source={require('../Images/plus.png')}
            />
          </Pressable> */}
          <Pressable
            style={styles.touchablePen}
            onPress={() => {
              setEdit(!edit);
            }}>
            <Image
              style={styles.penPic}
              source={require('../Images/pencil.png')}
            />
          </Pressable>
        </View>
        <View style={styles.emailPassword}>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.textInput}
              value={state.email}
              title={'Email'}
              editable={edit}
            />
          </View>
        </View>
        <View style={styles.fullName}>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.nameInput}
              value={userConfig.first_name}
              title={'First Name'}
              editable={edit}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.nameInput}
              value={userConfig.last_name}
              title={'Last Name'}
              editable={edit}
            />
          </View>
        </View>
        <TInput
          style={styles.textInput}
          title={`Phone number`}
          value={userConfig.phone_number}
          editable={edit}
        />
        <TInput
          style={styles.textInput}
          title={`City`}
          value={userConfig.city}
          editable={edit}
        />
        <TInput
          style={styles.textInput}
          title={`Proffesion`}
          value={userConfig.profession}
          editable={edit}
        />
        <View>
          <Text style={{left: 40, marginBottom: 10, color: '#0E6070'}}>
            I identify as
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {rawText.gender.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      userConfig.gender === `${item}` ? '#0E6070' : '#EBEBEB',
                  }}
                  textStyle={{
                    color:
                      userConfig.gender === `${item}` ? 'white' : '#0E6070',
                  }}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={{left: 40, color: '#0E6070'}}>
            I prefer to be called
          </Text>
          <View
            style={{
              top: 10,
              left: 40,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              height: 80,
            }}>
            {rawText.sexual_orientation.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      userConfig.sexual_orientation === `${item}`
                        ? '#0E6070'
                        : '#EBEBEB',
                  }}
                  textStyle={{
                    color:
                      userConfig.sexual_orientation === `${item}`
                        ? 'white'
                        : '#0E6070',
                  }}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View style={{top: 10}}>
          <Text style={{left: 40, color: '#0E6070'}}>
            My relationship status
          </Text>
          <View
            style={{
              top: 20,
              left: 40,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '80%',
              height: 150,
            }}>
            {rawText.relationship_status.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      userConfig.relationship_status === `${item}`
                        ? '#0E6070'
                        : '#EBEBEB',
                  }}
                  textStyle={{
                    color:
                      userConfig.relationship_status === `${item}`
                        ? 'white'
                        : '#0E6070',
                  }}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View style={styles.birthday}>
          <DatePicker
            style={{
              width: '80%',
              position: 'absolute',
              alignSelf: 'center',
            }}
            date={state.userConfig.date_of_birth}
            mode={'date'}
            placeholder="enter your birthday🎈🎉✨"
            format="DD-MM-YYYY"
            maxDate={state.userConfig.date_of_birth}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                backgroundColor: 'white',
              },
            }}
            onDateChange={date => {
              setBirthday(date);
            }}
          />
        </View>
        <View style={styles.Hobbies}>
          <Text style={{left: 40, color: '#0E6070', alignSelf: 'flex-start'}}>
            My hobbies are:
          </Text>
          <SafeAreaView style={{width: '90%'}}>{items}</SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
