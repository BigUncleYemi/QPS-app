/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Icon, Item} from 'native-base';
import {
  Dimensions,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React, {useState} from 'react';

const {width} = Dimensions.get('window');

const InputItem = ({
  updator,
  placeholder,
  label,
  password = false,
  icon,
  verified,
  defaultValue,
  multiline,
  numberOfLines = 4,
  keyboardType = 'default',
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  React.useEffect(() => {
    setValue(defaultValue ? defaultValue : '');
  }, [defaultValue]);
  const [secure, setSecure] = useState(password);
  function handleValue(text) {
    setValue(text);
    updator(text);
  }
  return (
    <View style={{marginTop: 10, width: '100%', marginBottom: 10}}>
      {label && (
        <Text
          style={{
            marginBottom: -18,
            color: '#989797',
            fontSize: 15,
            fontWeight: '100',
          }}>
          {label}
        </Text>
      )}
      <Item
        style={[
          {
            marginTop: 15,
            minHeight: 50,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            paddingLeft: 16,
            paddingRight: 16,
          },
        ]}>
        <TextInput
          placeholderTextColor="#E0DFDF"
          placeholder={placeholder}
          value={value}
          autoCapitalize={'none'}
          secureTextEntry={secure}
          multiline={multiline}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          onChangeText={text => handleValue(text)}
          style={[
            {width: '90%', fontSize: 14, height: 40},
            !multiline ? {} : {minHeight: 95},
          ]}
        />
        {password && !icon && (
          <Icon
            onPress={() => setSecure(!secure)}
            name={secure ? 'visibility' : 'visibility-off'}
            type="MaterialIcons"
          />
        )}
        {icon && <Icon name={icon.name} type={icon.type} style={icon.style} />}
      </Item>
    </View>
  );
};

export default InputItem;
