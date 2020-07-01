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
import {Button} from 'native-base';
import BlueInput from '../../components/BlueInput';
import Toast from 'react-native-tiny-toast';

const ChangePassword = ({loading, changePasswordData, user, resetUser}) => {
  const [forgetPassword, setForgetPassword] = React.useState('');
  React.useEffect(() => {
    if (forgetPassword) {
      Toast.showSuccess(
        'Link for password reset has been emailed to you. Please check your email.',
      );
      setForgetPassword('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePasswordData]);
  const handleResetPassword = () => {
    let data = {};
    data.username = forgetPassword;
    resetUser(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Password change</Text>
      </View>
      <View style={{marginBottom: 10}}>
        <Text style={{color: '#989797', fontSize: 13, fontWeight: '100'}}>
          Please Provide your registered username.
        </Text>
      </View>
      <View style={{marginBottom: 10}}>
        <BlueInput
          defaultValue={forgetPassword}
          updator={e => setForgetPassword(e)}
        />
      </View>
      <Button
        onPress={() => handleResetPassword()}
        disabled={loading}
        style={styles.startButton}>
        <Text style={styles.startButtonText}>Change My Password</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  changePasswordData: state.auth.changePassword,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  resetUser: data => dispatch(Actions.Auth.ChangePassword(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassword);
