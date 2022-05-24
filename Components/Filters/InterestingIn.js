// import React, {useState} from 'react';
// import {View, StyleSheet, Button, Modal, Text, Pressable} from 'react-native';
// import {useSelector} from 'react-redux';

// const InterestingItems = props => {
//   const listOfInteresting = useSelector(state => state.rawText.Interesting_In);
//   const currfilter = useSelector(state => state.filters.interesting_in_filter);
//   const [visible, setVisible] = useState(false);
//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);

//   const items = listOfInteresting.slice(1).map(item => {
//     return (
//       <Pressable
//         style={styles.InterestingInList}
//         value={item}
//         key={item}
//         onPress={() => props.setInterestingIn(item)}>
//         <Text style={{fontSize: 18}}>{item}</Text>
//       </Pressable>
//     );
//   });
//   return (
//     <View style={styles.viewStyle}>
//       <Modal transparent={true} visible={visible}>
//         <View
//           style={{
//             padding: 20,
//             elevation: 10,
//             backgroundColor: '#ffff',
//             height: '80%',
//             width: '80%',
//             marginTop: 80,
//             marginLeft: 40,
//             flexDirection: 'column',
//           }}>
//           {items}
//           <View style={{top: 100}}>
//             <Button title={'close'} onPress={hideModal} />
//           </View>
//         </View>
//       </Modal>
//       <Pressable title={'interestingIn'} onPress={showModal}>
//         <Text>{currfilter}</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     backgroundColor: '#B3D8D4',
//     padding: 7,
//     margin: 5,
//     borderRadius: 15,
//     width: 150,
//     borderWidth: 2,
//     borderColor: '#0E6070',
//     elevation: 5,
//   },
//   InterestingInList: {
//     top: 40,
//     marginTop: 20,
//     alignSelf: 'center',
//     width: '90%',
//   },
// });

// export default InterestingItems;
