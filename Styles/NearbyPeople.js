import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3D8DF',
    padding: 15,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  title: {
    alignSelf: 'center',
    top: 40,
    color: '#0E6070',
    fontSize: 36,
    position: 'absolute',
  },
  filterIconSection: {
    backgroundColor: '#0E6070',
    height: 30,
    alignItems: 'center',
  },
  filterIcon: {
    height: 18,
    width: 18,
    margin: 7,
  },
  menuPic: {
    top: 20,
    height: 18,
    width: 18,
  },
  scroll: {
    top: 10,
    height: 200,
    padding: 7,
  },
  textInput: {
    top: 70,
    padding: 4,
    justifyContent: 'center',
    width: 320,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  filtersStyle: {
    backgroundColor: 'white',
    width: 140,
    height: 40,
    flexDirection: 'row',
    padding: 7,
    borderRadius: 20,
    elevation: 10,
    alignSelf: 'center',
  },
});

export default styles;
