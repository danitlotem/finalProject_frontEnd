// import React, {useState} from 'react';
// import {View, StyleSheet, Modal, Pressable, Text, Button} from 'react-native';
// import {useSelector} from 'react-redux';

// const RelationshipItems = props => {
//   const [visible, setVisible] = useState(false);
//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const state = useSelector(state => state);
//   const listOfRelationships = state.rawText.Relationship;
//   const currfilter = state.filters.relationship_filter;

//   const items = listOfRelationships.map((item, index) => {
//     return (
//       <Pressable
//         style={{marginTop: 20}}
//         key={index}
//         onPress={() => props.setRelationship(item)}>
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
//           <View style={styles.searchModeList}>{items}</View>
//           <View style={{marginTop: 70}}>
//             <Button title={'close'} onPress={hideModal} />
//           </View>
//         </View>
//       </Modal>
//       <Pressable title={'Mode'} onPress={showModal}>
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
//   searchModeList: {
//     top: 40,
//     alignSelf: 'center',
//     backgroundColor: 'white',
//     width: '90%',
//   },
// });

// export default RelationshipItems;
