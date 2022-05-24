import React, {useState} from 'react';
import styles from '../../Styles/FiltersStyle';
import {View, Modal, Pressable, Button, Image, Text} from 'react-native';
const mode = (props) => {
	const [visible, setVisible] = useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	return (
		<View style={styles.viewStyle}>
			<Modal transparent={true} visible={visible}>
				<View
					style={{
						padding: 20,
						// justifyContent: 'center',
						elevation: 10,
						backgroundColor: '#ffff',
						height: '80%',
						width: '80%',
						marginTop: 80,
						marginLeft: 40,
						flexDirection: 'column',
					}}
				>
					<View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 150}}>
						{/* TO DO - conver to regular filter */}
						<Pressable
							style={({pressed}) => ({
								backgroundColor: pressed ? 'lightskyblue' : 'white',
								flexDirection: 'column',
							})}
							onPress={() => props.setMmode('Dating')}
						>
							<Image style={styles.modePic} source={require('../../Images/Dating.png')} />
							<Text
								style={{
									color: '#1B8AA0',
									fontSize: 16,
									alignSelf: 'center',
								}}
							>
								Dating
							</Text>
						</Pressable>
						<Pressable
							style={({pressed}) => ({
								backgroundColor: pressed ? 'lightskyblue' : 'white',
								border: pressed ? 'lightskyblue' : 'white',
								flexDirection: 'column',
							})}
							onPress={() => props.setMmode('Friends')}
						>
							<Image style={styles.modePic} source={require('../../Images/Friends.png')} />
							<Text
								style={{
									color: '#1B8AA0',
									fontSize: 16,
									alignSelf: 'center',
								}}
							>
								Friends
							</Text>
						</Pressable>
					</View>
					<View style={{top: 100}}>
						<Button title={'close'} onPress={hideModal} />
					</View>
				</View>
			</Modal>
			<Pressable title={'Mode'} onPress={showModal}>
				<Text>Mode</Text>
			</Pressable>
		</View>
	);
};

export default mode;
