/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Icon, Item, Input} from 'native-base';
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
  type = 'text',
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '');
  const [err, setErr] = useState('');
  React.useEffect(() => {
    setValue(defaultValue ? defaultValue : '');
  }, [defaultValue]);
  const [secure, setSecure] = useState(password);
  function handleValue(text) {
    setValue(text);
    updator(text);
  }
  const validate = text => {
    let reg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(reg, reg.test(text), text);
    if (reg.test(text) === false) {
      setErr('Email is Not Correct');
    } else {
      setErr('');
    }
    handleValue(text);
  };
  return (
    <React.Fragment>
      <View style={{marginTop: 10, width: '100%', marginBottom: 0}}>
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
          <Input
            placeholderTextColor="#E0DFDF"
            placeholder={placeholder}
            value={value}
            autoCapitalize={'none'}
            secureTextEntry={secure}
            multiline={multiline}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChangeText={text =>
              type === 'email' ? validate(text) : handleValue(text)
            }
            style={[
              {width: '90%', fontSize: 14, height: 40},
              !multiline
                ? {}
                : {
                    minHeight: numberOfLines > 3 ? 150 : 95,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  },
            ]}
          />
          {password && !icon && (
            <Icon
              onPress={() => setSecure(!secure)}
              name={secure ? 'visibility' : 'visibility-off'}
              type="MaterialIcons"
            />
          )}
          {icon && (
            <Icon name={icon.name} type={icon.type} style={icon.style} />
          )}
        </Item>
      </View>
      <Text
        style={{
          paddingBottom: 0,
          height: 20,
          marginBottom: 0,
          color: '#FF6347',
        }}>
        {value.length > 0 && err}
      </Text>
    </React.Fragment>
  );
};

export default InputItem;
