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
    <View style={{marginTop: 30}}>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
          value: null,
          color: '#E0DFDF',
        }}
        style={{
          inputIOS: {
            color: '#222',
            width: width * 0.9,
            height: 50,
            padding: 10,
            backgroundColor: '#ffffff',
          },
          inputAndroid: {
            color: '#222',
            height: 50,
            padding: 10,
            width: width * 0.9,
            backgroundColor: '#ffffff',
          },
          placeholder: {
            color: '#E0DFDF',
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
