import React, {useState, useEffect} from 'react';
import {View, Text, Button, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../Styles/LogInStyle';
import axios from 'axios';
import TInput from '../Components/TInput';
import GetLocation from 'react-native-get-location';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const baseUrl = 'http://192.168.1.141:3000/auth/login';
  const userConf = 'http://192.168.1.141:3000/userConfiguration/';
  const setsURL = 'http://192.168.1.141:3000/dataFromSetsToClient';
  const dispatch = useDispatch();

  const onLoadingPage = async event => {
    const response = await axios.get(`${setsURL}`);
    dispatch({
      type: 'GET_RAW_TEXT',
      rawText: response.data,
    });
  };

  useEffect(() => {
    onLoadingPage();
  }, []);

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handleEmail = value => {
    setEmail(value);
    validateEmail();
  };
  const onSubmitFormHandler = async event => {
    try {
      const response = await axios.post(`${baseUrl}`, {
        email: email,
        password: password,
      });

      if (response.data.hasOwnProperty('msg')) {
        alert(response.data.msg);
      } else {
        try {
          const getUser = await axios.get(
            `${userConf}${response.data.user_id}`,
            {
              headers: {
                Authorization: 'Bearer ' + response.data.token,
              },
            },
          );

          dispatch({
            type: 'UPDATE_DEATAILS',
            userConfig: getUser.data[0],
            email: response.data.email,
            fullName: `${getUser.data[0].first_name} ${getUser.data[0].last_name}`,
            token: response.data.token,
          });
          // const socket = new WebSocket('ws://192.168.1.141:3000', {
          //   headers: {
          //     Authorization: 'Bearer ' + response.data.token,
          //   },
          // });
          // socket.onopen = () => {
          //   // connection opened
          //   socket.send('something'); // send a message
          // };
          navigation.navigate('HomeStack');
        } catch (error) {
          alert(error);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const reDirectToRegister = () => {
    navigation.navigate('SignUp1');
  };
  return (
    <View style={styles.container}>
      <View style={styles.LogInForm}>
        <Text style={styles.FormItemText}>Welcome</Text>
        <TInput
          title={'Email'}
          value={email}
          style={styles.textInput}
          secureTextEntry={false}
          onChangeText={value => handleEmail(value)}
        />
        <TInput
          title={'Password'}
          value={password}
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.linkToRegister}>
        <Text style={{color: 'gray'}}>Don't have a user? </Text>
        <Pressable
          style={({pressed}) => ({
            backgroundColor: pressed ? 'lightskyblue' : 'white',
          })}
          onPress={reDirectToRegister}>
          <Text style={{color: '#0E6070', fontWeight: 'bold'}}>
            Create a Account
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonSection}>
        <Button
          style={styles.button}
          disabled={!validEmail}
          color="#0E6070"
          title="Continue"
          onPress={() => {
            onSubmitFormHandler();
          }}
        />
      </View>
    </View>
  );
};

export default LogIn;