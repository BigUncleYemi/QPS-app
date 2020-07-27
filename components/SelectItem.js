/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Icon} from 'native-base';
import {Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';

const {width} = Dimensions.get('window');

const SelectItem = ({
  defaultValue,
  placeholder,
  data = [],
  updator = () => {},
  inputStyle = {},
  placeholderStyle = {},
}) => {
  const [selected, setSelected] = useState();
  React.useEffect(() => {
    setSelected(defaultValue ? defaultValue : '');
  }, [defaultValue]);
  const handleSelected = value => {
    setSelected(value);
    let v = data.filter(i => i.value === value);
    updator(v);
  };

  return (
    <View style={{marginTop: 25}}>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
          value: null,
          color: '#E0DFDF',
        }}
        style={{
          inputIOS: {
            color: '#222',
            minWidth: width * 0.7,
            height: 50,
            padding: 10,
            backgroundColor: '#ffffff',
            ...inputStyle,
          },
          inputAndroid: {
            color: '#222',
            height: 50,
            padding: 10,
            minWidth: width * 0.7,
            backgroundColor: '#ffffff',
            ...inputStyle,
          },
          placeholder: {
            color: '#E0DFDF',
            ...placeholderStyle,
          },
        }}
        value={selected}
        Icon={() => {
          return (
            <Icon
              name="angle-down"
              type="FontAwesome5"
              style={{
                fontSize: 25,
                fontWeight: '800',
                paddingTop: 13,
                paddingRight: 13,
                color: 'rgba(34, 139, 196, 1)',
              }}
            />
          );
        }}
        onValueChange={value => handleSelected(value)}
        items={data}
      />
    </View>
  );
};

export default SelectItem;
