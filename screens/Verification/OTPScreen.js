/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {connect} from 'react-redux';
import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';
import Actions from '../../redux/actions';
import {getData, storeData} from '../../utils/helperFunc';

const OTPScreen = props => {
  const {route, navigation, confirmOtp, sendOTP, OTPConfirmed} = props;
  const [codeOtp, handleCodeOtp] = useState('');
  const {phoneNumber} = route.params;
  const handleKeyDown = () => {
    confirmOtp({phone: phoneNumber, code: Number(codeOtp)});
    // return navigation.navigate('Main');
  };
  const reSendOTP = () => {
    sendOTP({phone: phoneNumber});
  };
  React.useEffect(() => {
    async function done(params) {
      if (OTPConfirmed) {
        await storeData('verified', phoneNumber);
        navigation.navigate('Main');
      }
    }
    done();
  }, [OTPConfirmed, navigation, phoneNumber]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <React.Fragment>
          <View style={styles.inner}>
            <Text style={styles.subHeader}>
              A verification code has been sent you your phone {phoneNumber}
            </Text>
            <TextInput
              keyboardType="number-pad"
              returnKeyType="done"
              returnKeyLabel="done"
              onSubmitEditing={handleKeyDown}
              value={codeOtp}
              onChangeText={handleCodeOtp}
              offset={20}
              initialCountry="ng"
              style={[
                styles.textInput,
                {
                  width: 100,
                  marginTop: 20,
                  borderColor: 'rgba(34, 139, 196, 1)',
                  backgroundColor: 'rgba(34, 139, 196, 0.25)',
                },
              ]}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
            <Text style={styles.linkText}>Not your phone number?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => reSendOTP()}>
            <Text style={styles.linkText}>Resend code?</Text>
          </TouchableOpacity>
        </React.Fragment>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => ({
  OTPConfirmed: state.auth.confirmOTP,
});

const mapDispatchToProps = dispatch => ({
  confirmOtp: data => dispatch(Actions.Auth.ConfirmUserOtp(data)),
  sendOTP: phoneNumber => dispatch(Actions.Auth.SendUserOtp(phoneNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OTPScreen);
