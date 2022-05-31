import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  clearAllBtn: {
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#105A87',
    borderColor: 'white',
    borderWidth: 1,
    elevation: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  item: {
    backgroundColor: '#B0D0D9',
    width: '90%',
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    elevation: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1.5,
  },
  Pressables: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 30,
    width: 70,
    flexDirection: 'row',
  },
  Picture: {
    width: 40,
    height: 40,
  },
  Details: {
    paddingRight: 120,
    right: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    color: '#2B7CAD',
  },
  body: {
    fontSize: 18,
    alignItems: 'flex-start',
    color: '#105A87',
    fontWeight: 'bold',
  },
  textClearBtn: {color: 'white', fontSize: 18},
});

export default styles;
