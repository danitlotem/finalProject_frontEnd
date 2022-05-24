// import React, {useState, useCallback} from 'react';
// import {
//   View,
//   StyleSheet,
//   Modal,
//   Pressable,
//   Text,
//   Image,
//   Button,
// } from 'react-native';
// import {IconButton} from 'react-native-paper';
// import {useSelector} from 'react-redux';

// const GenderItems = () => {
//   const state = useSelector(state => state);
//   const stateFilters = useSelector(state => state.filters);
//   const genderOptions = state.rawText.Gender;

//   const [visible, setVisible] = useState(false);
//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);

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
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//               marginTop: 150,
//             }}>
//             {genderOptions.slice(1).map(item => {
//               return (
//                 <Pressable
//                   style={{backgroundColor: 'red'}}
//                   key={item}
//                   onPress={() => {
//                     props.setGender(item);
//                   }}>
//                   <Text
//                     style={{
//                       color: '#1B8AA0',
//                       fontSize: 16,
//                       alignSelf: 'center',
//                     }}>
//                     {item}
//                   </Text>
//                 </Pressable>
//               );
//             })}
//           </View>
//           <View style={{top: 100}}>
//             <Button title={'close'} onPress={hideModal} />
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//         title={'Gender'}
//         onPress={showModal}>
//         <Text>{stateFilters.gender_filter}</Text>
//         <IconButton
//           icon="trash-can-outline"
//           style={{borderRadius: 5, backgroundColor: '#1B8AA0', margin: 0}}
//           size={20}
//           color={'white'}
//           onPress={() => console.log('Pressed')}
//         />
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
// });

// export default GenderItems;
