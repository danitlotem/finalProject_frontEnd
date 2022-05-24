import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  emailPassword: {
    width: '100%',
  },
  chipBlock: {
    top: 10,
    left: 40,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    height: 80,
  },

  picView: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0E6070',
    marginBottom: 10,
  },
  mainPic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#3999C5',
    marginBottom: 10,
  },
  fullName: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    color: '#0E6070',
    fontSize: 36,
    alignSelf: 'center',
  },
  textTitle: {
    marginTop: 15,
    left: 40,
    marginBottom: 10,
    color: '#0E6070',
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  notValidField: {
    left: 10,
    color: 'red',
    justifyContent: 'space-between',
  },
  nameInput: {
    width: 150,
  },
  birthday: {
    padding: 7,
    flexDirection: 'column',
    top: 50,
    alignItems: 'center',

    width: '100%',
  },
  Pressables: {
    height: 30,
    width: '75%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
  },
  Hobbies: {
    padding: 7,
    flexDirection: 'column',
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
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 25,
    color: '#0E6070',
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
    top: 20,
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
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0E6070',
    marginBottom: 35,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
