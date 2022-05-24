import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#B3D8DF',
  },
  scroll: {
    height: '85%',
    // padding: 7,
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
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    color: '#0E6070',
    fontSize: 36,
    alignSelf: 'center',
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    // marginBottom: 10,
    marginTop: 10,
  },
  notValidField: {
    left: 10,
    color: 'red',
  },
  nameInput: {
    width: 150,
  },
  birthday: {
    padding: 7,
    flexDirection: 'row',
    top: 50,
    left: 40,
  },
  Hobbies: {
    flexDirection: 'column',
    padding: 7,
    alignItems: 'center',
    top: 70,
    marginBottom: 120,
  },
  ButtonSection1: {
    width: 250,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  subText: {
    alignSelf: 'center',
  },
  title: {
    color: '#0E6070',
    fontSize: 36,
    alignSelf: 'center',
  },
  pic: {
    height: 80,
    width: 80,
    margin: 15,
    borderWidth: 2,
    borderColor: '#0E6070',
    borderRadius: 40,
    elevation: 10,
  },
  addPicSection: {
    flexDirection: 'column',
    top: 30,
    alignItems: 'center',
  },
  ButtonSection2: {
    position: 'absolute',
    top: 550,
    width: 150,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  cameraButton: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#0E6070',
    marginBottom: 35,
  },
});

export default styles;
