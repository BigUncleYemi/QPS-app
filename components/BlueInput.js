/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {Icon, Item} from 'native-base';

const BlueInput = ({label, password, icon, verified}) => {
  const [value, setValue] = useState('');
  const [secure, setSecure] = useState(password);
  function handleValue(text) {
    setValue(text);
  }
  return (
    <View style={{marginTop: 10, width: '100%', marginBottom: 10}}>
      <Text
        style={{
          marginBottom: -18,
          color: '#989797',
          fontSize: 15,
          fontWeight: '100',
        }}>
        {label}
      </Text>
      <Item
        style={[
          {
            marginTop: 20,
            height: 50,
            borderColor: 'rgba(34, 139, 196, 1)',
            backgroundColor: 'rgba(34, 139, 196, 0.25)',
            paddingLeft: 10,
          },
        ]}>
        <TextInput
          returnKeyType="done"
          returnKeyLabel="done"
          value={value}
          secureTextEntry={secure}
          onChangeText={text => handleValue(text)}
          style={{width: '90%', fontSize: 17}}
        />
        {password && (
          <TouchableWithoutFeedback onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? 'visibility' : 'visibility-off'}
              type="MaterialIcons"
            />
          </TouchableWithoutFeedback>
        )}
        {icon && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {verified && (
              <Text
                style={{
                  color: '#12D940',
                  fontSize: 10,
                  marginLeft: -45,
                  marginRight: 10,
                }}>
                Verified
              </Text>
            )}
            <Icon name={icon.name} type={icon.type} style={icon.style} />
          </View>
        )}
      </Item>
    </View>
  );
};

export default BlueInput;
