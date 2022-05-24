import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3D8DF',
    padding: 15,
    height: '100%',
    width: '100%',
  },

  filterIcon: {
    height: 18,
    width: 18,
    margin: 7,
  },
  scroll: {
    height: 200,
    padding: 7,
  },
  textInput: {
    padding: 4,
    width: 240,
    backgroundColor: '#fff',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  menuPic: {
    marginLeft: 15,
    marginTop: 15,
    height: 18,
    width: 18,
  },
  requestPressable: {
    width: 170,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#8ECFD8',
    borderColor: '#086875',
    borderWidth: 1,
  },
  requestText: {
    alignSelf: 'center',
    color: '#0E6070',
    fontWeight: 'bold',
  },
});

export default styles;
