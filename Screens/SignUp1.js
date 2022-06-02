import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Chip} from 'react-native-paper';
import Hobbies from '../Components/Filters/Hobbies';
import styles from '../Styles/SignUpStyle';
import axios from 'axios';
import TInput from '../Components/TInput';
import {useSelector, useDispatch} from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function SignUp1({navigation}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [sexualOrientation, setSexualOrientation] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState(0);
  const [pronoun, setPronoun] = useState(0);
  const baseUrl = 'http://192.168.1.141:3000/auth/register';
  let hobbies = useSelector(state => state.myHobbies);

  const [isEmailValid, setEmailValid] = useState(true);
  const [isFirstNameValid, setFirstNameValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);
  const dispatch = useDispatch();
  const rawText = useSelector(state => state.rawText.registration_form);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  day = day.toString().padStart(2, '0');
  month = month.toString().padStart(2, '0');

  var year = date.getFullYear();
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };
  const validateFirstName = name => {
    if (!/[^a-zA-Z]/.test(name)) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };
  const validateLastName = name => {
    if (!/[^a-zA-Z]/.test(name)) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };
  const handleEmail = value => {
    setEmail(value);
    validateEmail();
  };
  const AddUserToDB = async event => {
    try {
      const response = await axios.post(`${baseUrl}`, {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: `${day}-${month}-${year}`,
        city: city,
        gender: gender,
        phone_number: phoneNumber,
        relationship_status: relationshipStatus,
        sexual_orientation: sexualOrientation,
        profession: profession,
        pronoun: pronoun,
        hobbies: [...hobbies],
        //FIX ME
        radius: 1000,
        longitude: 31.88,
        latitude: 24.11,
      });
      if (response.data.hasOwnProperty('msg')) {
        alert(response.data.msg);
      } else {
        alert('ההרשמה בוצעה בהצלחה');
        dispatch({
          type: 'UPDATE_DEATAILS',
          userConfig: response.data,
          email: response.data.email,
          fullName: `${response.data.first_name} ${response.data.last_name}`,
          token: response.data.token,
        });
        navigation.navigate('Log In stack');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up 🥳</Text>
      <ScrollView style={styles.scroll}>
        <View style={styles.fullName}>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.nameInput}
              value={firstName}
              title={'First Name'}
              onChangeText={firstName => {
                setFirstName(firstName), validateFirstName(firstName);
              }}
            />
            {!isFirstNameValid && (
              <Text style={styles.notValidField}>not valid</Text>
            )}
          </View>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.nameInput}
              value={lastName}
              title={'Last Name'}
              onChangeText={lastName => {
                setLastName(lastName), validateLastName(lastName);
              }}
            />
            {!isLastNameValid && (
              <Text style={styles.notValidField}>not valid</Text>
            )}
          </View>
        </View>
        <View style={styles.emailPassword}>
          <View style={{flexDirection: 'column'}}>
            <TInput
              style={styles.textInput}
              value={email}
              title={'Email'}
              onChangeText={value => handleEmail(value)}
            />
            {!isEmailValid && (
              <Text style={{left: 30, color: 'red'}}>not valid</Text>
            )}
          </View>
          <TInput
            style={styles.textInput}
            value={password}
            title={'Password'}
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
          />
        </View>

        <TInput
          style={styles.textInput}
          title={`Phone number`}
          onChangeText={val => setPhoneNumber(val)}
        />
        <TInput
          style={styles.textInput}
          title={`City`}
          onChangeText={val => setCity(val)}
        />
        <TInput
          style={styles.textInput}
          title={`Profession`}
          onChangeText={val => setProfession(val)}
        />
        <View style={{top: 30}}>
          <Text style={{left: 40, marginBottom: 10, color: '#0E6070'}}>
            I identify as
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {rawText.gender.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      gender === `${item}` ? '#0E6070' : '#EBEBEB',
                  }}
                  textStyle={{
                    color: gender === `${item}` ? 'white' : '#0E6070',
                  }}
                  onPress={() => setGender(`${item}`)}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View style={{top: 50, height: 100}}>
          <Text style={{left: 40, color: '#0E6070'}}>
            My relationship status
          </Text>
          <View style={styles.chipBlock}>
            {rawText.relationship_status.slice(1).map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      relationshipStatus === `${item}` ? '#0E6070' : '#EBEBEB',
                    height: 30,
                    marginTop: 5,
                  }}
                  textStyle={{
                    color:
                      relationshipStatus === `${item}` ? 'white' : '#0E6070',
                  }}
                  onPress={() => setRelationshipStatus(`${item}`)}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View style={{top: 110, height: 200}}>
          <Text style={{left: 40, color: '#0E6070', alignSelf: 'flex-start'}}>
            I prefer to be called
          </Text>
          <View style={styles.chipBlock}>
            {rawText.sexual_orientation.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      sexualOrientation === `${item}` ? '#0E6070' : '#EBEBEB',
                  }}
                  textStyle={{
                    color:
                      sexualOrientation === `${item}` ? 'white' : '#0E6070',
                  }}
                  onPress={() => setSexualOrientation(`${item}`)}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>
        <View style={{top: 30, height: 150}}>
          <Text style={{left: 40, color: '#0E6070', alignSelf: 'flex-start'}}>
            pronoun
          </Text>
          <View style={styles.chipBlock}>
            {rawText.pronoun.map(item => {
              return (
                <Chip
                  key={item}
                  style={{
                    backgroundColor:
                      pronoun === `${item}` ? '#0E6070' : '#EBEBEB',
                  }}
                  textStyle={{
                    color: pronoun === `${item}` ? 'white' : '#0E6070',
                  }}
                  onPress={() => setPronoun(`${item}`)}>
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>

        <View style={styles.birthday}>
          <Text style={{left: 35, color: '#0E6070', alignSelf: 'flex-start'}}>
            birthday🎈🎉✨
          </Text>
          <Pressable style={styles.Pressables} onPress={() => setShow(!show)}>
            <Text style={{color: '#0E6070'}}>
              {day}-{month}-{year}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChangeDate}
              />
            )}
          </Pressable>
        </View>

        <View style={styles.Hobbies}>
          <Text style={{left: 35, color: '#0E6070', alignSelf: 'flex-start'}}>
            My hobbies are:
          </Text>
          <Hobbies
            style={styles.Pressables}
            text={
              hobbies.length !== 0 ? hobbies.toString() : 'Pick your hobbies'
            }
            data={rawText.Hobbies}
            list={hobbies}
          />
        </View>
        <View style={styles.ButtonSection1}>
          <Button
            color="#0E6070"
            title="Continue"
            onPress={() => {
              AddUserToDB();
            }}></Button>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUp1;
