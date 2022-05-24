import React from 'react';
import {SafeAreaView, Image, Text, View, Pressable} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';
// import styles from '../../Styles/MenuStyle';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CustomSidebarMenu = props => {
  const navigation = useNavigation();
  const state = useSelector(state => state);
  const userConfig = useSelector(state => state.userConfig);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignSelf: 'center', top: 50, marginBottom: 80}}>
        {Object.keys(userConfig).length !== 0 && (
          <View>
            <Pressable onPress={() => navigation.navigate('MyProfile')}>
              <Avatar.Image
                size={110}
                source={{uri: `data:image/gif;base64,${userConfig.image}`}}
              />
            </Pressable>
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              {state.fullName}
            </Text>
            <Text style={{alignSelf: 'center'}}>{state.email}</Text>
          </View>
        )}
        {Object.keys(userConfig).length === 0 && (
          <View>
            <Text>please log in</Text>
          </View>
        )}
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
