/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {connect} from 'react-redux';
import Actions from '../../redux/actions';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {Button, Icon} from 'native-base';
import BlueInput from '../../components/BlueInput';
import HeaderBackButton from '../../components/HeaderBackButton';

const AccountDetails = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <HeaderBackButton onPressAction={() => navigation.goBack()} />
      <View style={styles.header}>
        <Text style={styles.welcome}>Account Details</Text>
      </View>
      <BlueInput
        label="User Name"
        defaultValue={user && user.data && user.data.username}
      />
      <BlueInput
        label="First name"
        defaultValue={user && user.data && user.data.firstName}
      />
      <BlueInput
        label="Surname"
        defaultValue={user && user.data && user.data.surname}
      />
      <BlueInput
        icon={{
          name: 'angle-right',
          type: 'FontAwesome5',
          style: styles.buttonIcon,
        }}
        label="Email Address"
        defaultValue={user && user.data && user.data.email}
      />
      <BlueInput
        icon={{
          name: 'angle-right',
          type: 'FontAwesome5',
          style: styles.buttonIcon,
        }}
        verified
        label="Phone Number"
        defaultValue={user && user.data && user.data.phone}
      />
      <Text
        style={{
          marginBottom: -18,
          color: '#989797',
          fontSize: 15,
          fontWeight: '100',
        }}>
        Password
      </Text>
      <Button
        transparent
        style={[
          {
            marginTop: 20,
            height: 50,
            borderColor: 'rgba(34, 139, 196, 1)',
            borderBottomWidth: 1,
            backgroundColor: 'rgba(34, 139, 196, 0.25)',
            paddingLeft: 10,
          },
        ]}
        onPress={() => navigation.navigate('change-password')}
        iconRight>
        <Text style={styles.buttonText} />
        <Icon
          name="angle-right"
          type="FontAwesome5"
          style={styles.buttonIcon}
        />
      </Button>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountDetails);
