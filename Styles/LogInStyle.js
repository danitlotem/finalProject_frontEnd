import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: '100%',
    //top: 80,
  },
  titleText: {
    color: '#0E6070',
    fontSize: 36,
  },
  title: {
    alignItems: 'center',
  },
  LogInForm: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    width: '80%',
  },
  buttonSection: {
    position: 'absolute',
    top: 330,
    width: 250,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'space-between',
    zIndex: 0,
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    zIndex: 0,
    width: 200,
    margin: 50,
    marginBottom: 20,
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  FormItem: {
    marginLeft: 55, //FIX ME
    flexDirection: 'column',
  },
  FormItemText: {
    color: '#13869D',
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 20,
  },
  linkToRegister: {
    top: 278,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    height: 50,
  },
  scroll: {
    top: 40,
    height: 200,
    padding: 7,
  },
});

export default styles;
