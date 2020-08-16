/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import BlueInput from '../../components/BlueInput';
import HeaderBackButton from '../../components/HeaderBackButton';

const HelpCenter = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <HeaderBackButton onPressAction={() => navigation.goBack()} />
      <View style={styles.header}>
        <Text style={styles.welcome}>Help Center</Text>
      </View>
      <Text style={{color: '#000000', fontWeight: '700', marginTop: 15}}>
        Need help, Contact us today.
      </Text>
      <BlueInput
        editable={false}
        label="Email"
        defaultValue={'info@qps.com.ng'}
      />
      <BlueInput
        editable={false}
        label="Phone Number / WhatsApp"
        defaultValue={'+234 (0)9022228280'}
      />
      <BlueInput
        editable={false}
        label="Address"
        multiline
        defaultValue={'8b Kingsley Emu Street, Lekki Phase 1, Lagos, Nigeria.'}
      />
    </View>
  );
};

export default HelpCenter;
