import {StyleSheet} from 'react-native';
import Theme from './Theme';

const styles = StyleSheet.create({
  container: {
    height: Theme.height,
    width: Theme.width,
    backgroundColor: Theme.background,
  },
  scroll: {
    height: '85%',
  },
  ButtonSection: {
    width: '85%',
    alignSelf: 'center',
  },
  touchablePen: {
    justifyContent: 'flex-end',
    width: 30,
    height: 30,
  },
  penPic: {
    right: 10,
    height: 25,
    width: 25,
  },
  myPic: {
    borderColor: '#0E6070',
    borderRadius: 40,
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  addPic: {
    borderColor: '#0E6070',
    borderWidth: 1,
    borderRadius: 20,
    height: 30,
    width: 30,
    justifyContent: 'center',
  },

  emailPassword: {
    width: '100%',
  },
  fullName: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 40,
  },
  title: {
    color: '#0E6070',
    fontSize: 36,
    alignSelf: 'center',
  },
  textInput: {
    width: '85%',
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
  },
  notValidField: {
    left: 10,
    color: 'red',
  },
  nameInput: {
    width: 150,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 10,
  },
  birthday: {
    marginTop: 100,
    flexDirection: 'column',
    left: 40,
  },
  Hobbies: {
    flexDirection: 'column',
    padding: 7,
    alignItems: 'center',
    top: 20,
    marginBottom: 120,
  },

  subText: {
    alignSelf: 'center',
  },

  addPicSection: {
    flexDirection: 'column',
    top: 30,
    alignItems: 'center',
  },
  Pressables: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 38,
    justifyContent: 'center',
    height: 35,
    width: 250,
  },
  chipsBlocks: {
    top: 10,
    left: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    height: 80,
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    marginLeft: 35,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default styles;
