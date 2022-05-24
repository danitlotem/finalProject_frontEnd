import React from 'react';
import {TextInput} from 'react-native-paper';
import {View, Text} from 'react-native';

const TInput = props => {
  return (
    <View>
      <TextInput
        style={props.style}
        value={props.value}
        editable={props.editable}
        placeholder={props.title}
        secureTextEntry={props.type === 'password' ? true : false}
        outlineColor={'#13869D'}
        underlineColor="#13869D"
        label={props.name}
        dense={true}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TInput;
