import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#B3D8DF',
  },
  viewStyle: {
    backgroundColor: '#B3D8D4',
    padding: 7,
    margin: 5,
    borderRadius: 15,
    width: 150,
    borderWidth: 2,
    borderColor: '#0E6070',
    elevation: 5,
  },
  menuPic: {
    marginLeft: 15,
    marginTop: 50,
    height: 18,
    width: 18,
  },
  innterContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#0E6070',
    fontSize: 30,
    top: 20,
  },
  myPic: {
    position: 'absolute',
    height: 150,
    width: 150,
    alignSelf: 'center',
    zIndex: 1,
  },
  pressPic: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 220,
    width: 220,
    top: 30,
  },
  searchModeList: {
    top: 300,
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 10,
    width: '70%',
  },
  lottiStyle: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 0,
    height: 250,
    width: 250,
  },
});
export default styles;
