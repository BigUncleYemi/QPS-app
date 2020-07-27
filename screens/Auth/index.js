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
import {
  Button,
  Icon,
  Thumbnail,
  CheckBox,
  Toast as NBToast,
  Root,
} from 'native-base';
import {
  Dimensions,
  ScrollView,
  Text,
  Platform,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import InputItem from '../../components/InputItem';
import BlueInput from '../../components/BlueInput';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-tiny-toast';
import HeaderBackButton from '../../components/HeaderBackButton';
import SplashScreen from 'react-native-splash-screen';
import {getData, removeValue} from '../../utils/helperFunc';

const {width, height} = Dimensions.get('window');

const AuthScreen = ({
  navigation,
  loginUser,
  registerUser,
  loading,
  isUserRegister,
  resetUser,
  isUserLoggedIn,
  forgetPasswordData,
  err,
}) => {
  const [route, setRoute] = useState('Home');
  React.useEffect(() => {
    async function done() {
      const data = await getData('rout');
      if (data) {
        setRoute(data);
      }
    }
    done();
    return async () => {
      await removeValue('rout');
    };
  }, []);
  const [RememberLog, setRememberLog] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('+234');
  const [cPassword, setCPassword] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [forgetPassword, setForgetPassword] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isForgetSent, setIsForgetSent] = useState(false);
  const [signup, setSignup] = useState(false);
  const [regError, setRegError] = useState(false);
  React.useEffect(() => {
    if (isUserRegister) {
      setEmail('');
      setSurname('');
      setFirstName('');
      setUsername('');
      setPassword('');
      setPhoneNumber('+234');
      setCPassword('');
      setSignup(false);
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserRegister) {
      setSignup(false);
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserRegister) {
      setSignup(false);
      Toast.showSuccess('Registration Successful', {duration: 3000});
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserLoggedIn) {
      Toast.showSuccess('Login Successful', {duration: 2000});
    }
  }, [isUserLoggedIn]);
  React.useEffect(() => {
    if (err && err.message) {
      if (typeof err === 'string') {
        setRegError(err);
        alert(err);
        NBToast.show({
          text: err,
          duration: 2000,
          buttonText: 'close',
        });
      }
      if (typeof err.message === 'string') {
        setRegError(err.message);
        alert(err.message);
        NBToast.show({
          text: err.message,
          duration: 2000,
          buttonText: 'close',
        });
      } else if (err.message._message) {
        setRegError(err.message._message);
        alert(err.message._message);
        NBToast.show({
          text: err.message._message,
          duration: 2000,
          buttonText: 'close',
        });
      } else {
        setRegError(err.message.message);
        alert(err.message.message);
        NBToast.show({
          text: err.message.message,
          duration: 2000,
          buttonText: 'close',
        });
      }
    }
  }, [err]);
  React.useEffect(() => {
    if (isUserLoggedIn) {
      navigation.navigate(route);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn, navigation]);
  React.useEffect(() => {
    if (forgetPassword) {
      setForgetPassword('');
      setIsForgetSent(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forgetPasswordData]);
  const handleLogin = () => {
    if (userName && password) {
      let data = {};
      data.username = userName.trim();
      data.password = password;
      loginUser(data);
    }
  };
  const handleRegister = () => {
    if (cPassword === password) {
      let data = {};
      data.firstName = firstName;
      data.surname = surname;
      data.username = userName.trim();
      data.password = password;
      data.phone = phoneNumber;
      data.email = email.trim();
      registerUser(data);
    }
  };
  const handleResetPassword = () => {
    let data = {};
    data.username = forgetPassword;
    resetUser(data);
  };
  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <Modal animationType="slide" visible={modalVisible}>
        <Root>
          <View style={{padding: 30, paddingTop: 35}}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setIsForgetSent(false);
                }}
                icon
                style={{backgroundColor: 'transparent'}}>
                <Icon name="close" type="FontAwesome" color="black" />
              </TouchableOpacity>
            </View>
            {!isForgetSent ? (
              <React.Fragment>
                <View style={{marginBottom: 30}}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 25,
                      fontWeight: '700',
                    }}>
                    Reset Password
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      color: '#989797',
                      fontSize: 13,
                      fontWeight: '100',
                    }}>
                    Please Provide your registered username.
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <BlueInput updator={e => setForgetPassword(e)} />
                </View>
                <Button
                  onPress={() => handleResetPassword()}
                  disabled={loading}
                  style={styles.startButton}>
                  <Text style={styles.startButtonText}>Reset My Password</Text>
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <View style={{marginBottom: 10, marginTop: 10}}>
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 25,
                      fontWeight: '700',
                      lineHeight: 35,
                    }}>
                    Great! Please check your email
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      color: '#989797',
                      fontSize: 13,
                      fontWeight: '100',
                    }}>
                    We just sent you an email with a link to reset your
                    password. Please click on the link to reset your password.
                  </Text>
                </View>
              </React.Fragment>
            )}
          </View>
        </Root>
      </Modal>
      <Modal
        animationType="slide"
        visible={signup}
        style={{backgroundColor: '#055B89', zIndex: 0}}>
        <Root>
          <View
            style={[
              styles.panel,
              {
                shadowColor: '#00000076',
                backgroundColor: '#055B89',
                shadowOffset: {
                  width: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10.35,
                flex: 1,
                height: height + 100,
                zIndex: 9999999,
              },
            ]}>
            <Button
              onPress={() => setSignup(false)}
              style={[styles.headerLayoutStyle, {marginTop: 20}]}>
              <Icon
                name={'chevron-down'}
                type="FontAwesome"
                style={{color: '#228BC4', fontWeight: '700'}}
              />
            </Button>
            <ScrollView
              style={{
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 50,
                width: width,
              }}>
              <View>
                <Text style={styles.welcome}>Sign Up</Text>
              </View>
              <KeyboardAwareScrollView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
                resetScrollToCoords={{x: 0, y: 0}}
                contentContainerStyle={{flex: 1, paddingBottom: 50}}>
                <InputItem
                  updator={e => setFirstName(e)}
                  placeholder="First Name *"
                />
                <InputItem
                  updator={e => setSurname(e)}
                  placeholder="Surname *"
                />
                <InputItem
                  updator={e => setUsername(e)}
                  placeholder="Username *"
                />
                <InputItem
                  updator={e => setEmail(e)}
                  placeholder="Email Address *"
                  type="email"
                />
                <InputItem
                  updator={e => setPhoneNumber(e)}
                  defaultValue={phoneNumber}
                  placeholder="Phone Number *"
                />
                <InputItem
                  updator={e => setCPassword(e)}
                  placeholder="Password *"
                  password={true}
                />
                <InputItem
                  updator={e => setPassword(e)}
                  placeholder="Confirm Password *"
                  password={true}
                />
                <Button
                  onPress={() => handleRegister()}
                  disabled={loading}
                  style={styles.startButton}>
                  {loading ? (
                    <Text style={styles.startButtonText}>Loading ....</Text>
                  ) : (
                    <Text style={styles.startButtonText}>Sign Up</Text>
                  )}
                </Button>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 50,
                  }}
                />
              </KeyboardAwareScrollView>
            </ScrollView>
          </View>
        </Root>
      </Modal>
      <Root>
        <View style={{justifyContent: 'space-between', height: height * 0.95}}>
          <View>
            <HeaderBackButton
              onPressAction={() => navigation.goBack()}
              btnColor={'#ffffff'}
            />

            <View style={styles.header}>
              <View style={{justifyContent: 'center'}}>
                <Thumbnail
                  source={require('../../assets/images/QPS-Logo-white.png')}
                  square
                  style={{width: 120}}
                />
              </View>
            </View>
            <View>{/* <Text style={styles.welcome}>Log in</Text> */}</View>
            <View>
              <InputItem
                updator={e => setUsername(e)}
                placeholder="Username *"
              />
              <InputItem
                updator={e => setPassword(e)}
                placeholder="Password"
                password={true}
              />
              <TouchableOpacity
                onPress={() => handleLogin()}
                disabled={loading}
                style={[styles.startButton]}>
                {loading ? (
                  <Text style={styles.startButtonText}>Loading ....</Text>
                ) : (
                  <Text style={styles.startButtonText}>Login</Text>
                )}
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: -7,
                  }}>
                  <CheckBox
                    checked={RememberLog}
                    onPress={() => setRememberLog(!RememberLog)}
                    style={{
                      marginRight: 20,
                      borderRadius: 5,
                      borderWidth: 10,
                      marginLeft: 0,
                    }}
                    color="white"
                  />
                  <Text style={{color: 'white'}}>Remember Me</Text>
                </View>
                <TouchableWithoutFeedback
                  style={{backgroundColor: 'transparent'}}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text
                    style={{color: '#F8CD28', fontWeight: '100', fontSize: 12}}>
                    Forgot Password
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          <TouchableWithoutFeedback
            onPress={() => setSignup(true)}
            style={[styles.headerLayoutStyle, {paddingBottom: 40}]}>
            <Icon
              name={'chevron-up'}
              type="FontAwesome"
              style={{color: '#228BC4', fontWeight: '700'}}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 14}}>New here? </Text>
              <Text style={{color: '#F8CD28', fontSize: 14}}>Sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Root>
    </View>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  isUserLoggedIn: state.auth.isUserLoggedIn,
  isUserRegister: state.auth.isUserRegister,
  forgetPasswordData: state.auth.forgetPassword,
  loading: state.auth.loading,
  err: state.auth.error && state.auth.error.data,
});

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(Actions.Auth.CreateUser(data)),
  loginUser: data => dispatch(Actions.Auth.LoginUser(data)),
  resetUser: data => dispatch(Actions.Auth.ForgetPassword(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthScreen);
