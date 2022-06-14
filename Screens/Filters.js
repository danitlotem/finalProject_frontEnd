import React, {useState} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import {
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem,
} from '@react-navigation/drawer';
import NearbyPeople from '../Screens/NearbyPeople';
import AgeItem from '../Components/Filters/AgeItem';
import SearchMode from '../Components/Filters/SearchMode';
import Radius from '../Components/Filters/Radius';
import Hobbies from '../Components/Filters/Hobbies';
import styles from '../Styles/FiltersStyle';
import FilterItem from '../Components/Filters/FilterItem';
import {Switch} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const FiltersBarDrawer = createDrawerNavigator();

const CustomFiltersBar = props => {
  const myAge = useSelector(state => state.userConfig.age);
  const options = useSelector(state => state.rawText);
  const filters = useSelector(state => state.filters);

  const [age, setAge] = useState([]);
  const [gender, setGender] = useState(options.filters.Gender[0]);
  const [interestedIn, setInterestedIn] = useState(
    options.filters.Interested_in[0],
  );
  const [relationship, setRelationship] = useState(
    options.registration_form.relationship_status[0],
  );
  const [radius, setRadius] = useState('Did not choose yet');
  const [searchMode, setSearchMode] = useState(options.filters.Search_Mode[0]);
  const [isSwitchOn, setIsSwitchOn] = useState(0);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const dispatch = useDispatch();
  let hobbies = [];

  const onApply = () => {
    dispatch({
      type: 'UPDATE_FILTERS',
      filters: {
        search_mode_filter: searchMode,
        age_filter: [],
        hobbies_filter: 'Hobbies',
        gender_filter: gender,
        relationship_filter: relationship,
        interested_in_filter: interestedIn,
        friends_only_filter: isSwitchOn,
      },
    });
    props.navigation.closeDrawer();
  };
  const onClear = () => {
    dispatch({
      type: 'UPDATE_FILTERS',
      filters: {
        search_mode_filter: options.filters.Search_Mode[0],
        age_filter: [],
        hobbies_filter: 'Hobbies',
        gender_filter: options.filters.Gender[0],
        relationship_filter: options.registration_form.relationship_status[0],
        interested_in_filter: options.filters.Interested_in[0],
        friends_only_filter: 0,
      },
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', top: 20}}>
        <Ionicons name="search-circle-outline" size={40} color={'#1B8AA0'} />
        <Text style={{color: '#1B8AA0', fontSize: 18, fontWeight: 'bold'}}>
          Find New Friends
        </Text>
      </View>
      <DrawerItemList {...props} />
      <View style={{top: 30, alignSelf: 'center'}}>
        <AgeItem myAge={myAge} setAge={setAge} />
        <FilterItem
          title={gender}
          arr={options.filters.Gender}
          function={setGender}
          value={gender}
        />
        <FilterItem
          title={interestedIn}
          arr={options.filters.Interested_in}
          function={setInterestedIn}
          value={interestedIn}
        />
        <FilterItem
          title={relationship}
          arr={options.registration_form.relationship_status}
          function={setRelationship}
          value={relationship}
        />
        <Hobbies style={styles.viewStyle} list={hobbies} text={'Hobbies'} />
        <Radius setRadius={setRadius} />
        <SearchMode
          value={searchMode}
          title={searchMode}
          setSearchMode={setSearchMode}
        />
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center',
            top: 10,
          }}>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={'#0E6070'}
          />
          <Text
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            Friends Only
          </Text>
        </View>
        <View
          style={{
            top: 20,
            width: 100,
            alignSelf: 'center',
          }}>
          <Pressable
            onPress={() => onApply()}
            style={{
              backgroundColor: '#286F6D',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 150,
              elevation: 5,
              borderRadius: 5,
              height: 50,
            }}>
            <Ionicons
              color={'#FFFFFF'}
              size={25}
              style={{
                left: 10,
                position: 'absolute',
                justifyContent: 'center',
              }}
              name={'search-circle-outline'}
            />
            <Text
              style={{
                color: '#FFFFFF',
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 16,
              }}>
              Apply
            </Text>
          </Pressable>

          <Pressable
            onPress={() => onClear()}
            style={{
              backgroundColor: '#ffff',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 150,
              marginTop: 10,
              elevation: 5,
              borderRadius: 5,
              height: 40,
            }}>
            <Ionicons
              style={{
                left: 10,
                position: 'absolute',
                justifyContent: 'center',
              }}
              size={18}
              name={'trash-outline'}
            />
            <Text
              style={{
                color: '#0E6070',
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 16,
              }}>
              Clear
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

function FiltersBar() {
  return (
    <FiltersBarDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '60%', justifyContent: 'center'},
      }}
      drawerContent={props => <CustomFiltersBar {...props} />}>
      <FiltersBarDrawer.Screen
        name="NearbyPeople"
        component={NearbyPeople}
        options={{
          drawerItemStyle: {height: 0},
        }}
      />
    </FiltersBarDrawer.Navigator>
  );
}

export default FiltersBar;
