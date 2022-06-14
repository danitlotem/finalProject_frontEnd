import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  chatFeed: {
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    // backgroundColor: rgb(240, 240, 240),
  },
  chatTitle: {
    textAlign: 'center',
    color: '#334c9e',
    fontWeight: 'bold',
    fontSize: 24,
  },

  chatSubtitle: {
    textAlign: 'center',
    color: '#7554a0',
    fontSize: 12,
  },
  messageFormContainer: {
    position: 'absolute',
    width: '100%',
    padding: 18,
    bottom: 60,
    // backgroundColor: rgb(240, 240, 240),
    top: 500,
    height: 50,
    position: 'absolute',
  },
  messageForm: {
    width: '95%',
    borderRadius: 6,
    // backgroundColor: rgb(118, 113, 113),
    position: 'absolute',
  },
  thierMessage: {
    padding: 12,
    fontSize: 16,
    borderRadius: 6,
    maxWidth: '60%',
    backgroundColor: '#CDEAE2',
    marginLeft: 4,
  },
  myMessage: {
    padding: 12,
    fontSize: 16,
    borderRadius: 6,
    maxWidth: '60%',
    alignItems: 'flex-end',
    marginRight: 18,
    color: 'white',
    backgroundColor: '#75bedF',
    alignSelf: 'flex-end',
  },

  messageInput: {
    height: 40,
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    // border: 1px solid white;
    fontSize: 15,
  },
  sendIcon: {
    position: 'relative',
  },
  messageBlock: {
    width: '100%',
    //display: 'inline-block',
  },
  item: {
    backgroundColor: '#B0D0D9',
    width: '90%',
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    elevation: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1.5,
  },
  Pressables: {
    alignItems: 'center',
    width: 70,
    flexDirection: 'row',
  },

  Details: {
    width: 220,
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
});

export default styles;
