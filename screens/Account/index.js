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
import {Button, Icon} from 'native-base';

const AccountScreen = ({navigation}) => {
  const isUserLoggedIn = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Account</Text>
      </View>
      {isUserLoggedIn ? (
        <View iconRight>
          <Button
            block
            light
            onPress={() => navigation.navigate('Auth')}
            style={[
              styles.button,
              {
                marginTop: 30,
                marginBottom: 15,
              },
            ]}>
            <Text style={styles.buttonText}>Log In</Text>
            <Icon
              name="angle-right"
              type="FontAwesome5"
              style={styles.buttonIcon}
            />
          </Button>
          <Button
            block
            light
            style={[
              styles.button,
              {
                marginTop: 15,
                marginBottom: 30,
              },
            ]}>
            <Text style={styles.buttonText}>Help Center</Text>
            <Icon
              name="angle-right"
              type="FontAwesome5"
              style={styles.buttonIcon}
            />
          </Button>
        </View>
      ) : (
        <View iconRight>
          <Button
            block
            light
            onPress={() => navigation.navigate('Account-details')}
            style={[
              styles.button,
              {
                marginTop: 30,
                marginBottom: 15,
              },
            ]}>
            <Text style={styles.buttonText}>Account Details</Text>
            <Icon
              name="angle-right"
              type="FontAwesome5"
              style={styles.buttonIcon}
            />
          </Button>
          <Button
            block
            light
            style={[
              styles.button,
              {
                marginTop: 15,
                marginBottom: 15,
              },
            ]}>
            <Text style={styles.buttonText}>Help Center</Text>
            <Icon
              name="angle-right"
              type="FontAwesome5"
              style={styles.buttonIcon}
            />
          </Button>
          <Button
            block
            light
            style={[
              styles.button,
              {
                marginTop: 15,
                marginBottom: 30,
              },
            ]}>
            <Text style={styles.buttonText}>Log Out</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default AccountScreen;
