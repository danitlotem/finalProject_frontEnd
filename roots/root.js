import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../Screens/LogIn';
import SignUp1 from '../Screens/SignUp1';
import SignUp2 from '../Screens/SignUp2';
import Home from '../Screens/Home';
import MyFriends from '../Screens/MyFriends';
import MyProfile from '../Screens/MyProfile';
import CustomSidebarMenu from '../Screens/Menu';
import NearbyPeople from '../Screens/NearbyPeople';
import Chats from '../Screens/Chats';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Screens/Settings';
import Notifications from '../Screens/Notifications';
import FiltersBar from '../Screens/Filters';

const MainDrawer = createDrawerNavigator();
const NearbyPeopleStack = createStackNavigator();
const LogInScreenStack = createStackNavigator();

const loggingToAppScreens = [
  {title: 'Log In stack', screen: LogIn},
  {title: 'SignUp1', screen: SignUp1},
  {title: 'SignUp2', screen: SignUp2},
  {title: 'HomeStack', screen: DrawerNavi},
];

const DrawerScreens = [
  //{title: 'Log In', screen: LogInScreen, icon: 'log-in-outline'},
  // {title: 'SignUp', screen: SignUp1, icon: 'log-in-outline'},
  {title: 'Home', screen: Home, icon: 'home-outline'},
  {title: 'My Profile', screen: MyProfile, icon: 'person-circle-outline'},
  {title: 'My Friends', screen: MyFriends, icon: 'people-circle-outline'},
  {
    title: 'Nearby People',
    screen: NearbyPeopleScreen,
    icon: 'magnet-outline',
  },
  {
    title: 'Notifications',
    screen: Notifications,
    icon: 'notifications-outline',
  },
  {title: 'Chats', screen: Chats, icon: 'chatbox-ellipses-outline'},
  {title: 'Settings', screen: Settings, icon: 'settings-outline'},
];

function FiltersBarScreen() {
  return <FiltersBar />;
}
function NearbyPeopleScreen() {
  return (
    <NearbyPeopleStack.Navigator screenOptions={{headerShown: false}}>
      <NearbyPeopleStack.Screen name="Filters" component={FiltersBarScreen} />
      <NearbyPeopleStack.Screen name="NearbyPeople" component={NearbyPeople} />
    </NearbyPeopleStack.Navigator>
  );
}

const loggingToAppItems = loggingToAppScreens.map(item => {
  return (
    <MainDrawer.Screen
      name={item.title}
      component={item.screen}
      key={item.screen}
    />
  );
});

const DrawerItems = DrawerScreens.map(item => {
  return (
    <MainDrawer.Screen
      name={item.title}
      key={item.title}
      component={item.screen}
      options={{drawerIcon: () => <Ionicons name={item.icon} size={22} />}}
    />
  );
});

function LogInScreen() {
  return (
    <NavigationContainer>
      <LogInScreenStack.Navigator screenOptions={{headerShown: false}}>
        {loggingToAppItems}
      </LogInScreenStack.Navigator>
    </NavigationContainer>
  );
}
function DrawerNavi() {
  return (
    <MainDrawer.Navigator
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      {DrawerItems}
    </MainDrawer.Navigator>
  );
}

export default LogInScreen;
