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
  Body,
  Button,
  Header,
  Icon,
  Left,
  Picker,
  Right,
  Thumbnail,
  Title,
  CheckBox,
  Item,
} from 'native-base';
import {
  Dimensions,
  ScrollView,
  Text,
  Alert,
  Modal,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import InputItem from '../../components/InputItem';
import BlueInput from '../../components/BlueInput';
import BottomDrawer from 'rn-bottom-drawer';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-tiny-toast';

const {width, height} = Dimensions.get('window');
const TAB_BAR_HEIGHT = 49;

const AuthScreen = ({
  navigation,
  loginUser,
  registerUser,
  loading,
  isUserRegister,
  resetUser,
  isUserLoggedIn,
  forgetPasswordData,
}) => {
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
  const _panel = React.useRef(null);
  React.useEffect(() => {
    if (isUserRegister) {
      setEmail('');
      setSurname('');
      setFirstName('');
      setUsername('');
      setPassword('');
      setPhoneNumber('+234');
      setCPassword('');
      _panel.current.hide();
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserRegister) {
      _panel.current.hide();
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserRegister) {
      _panel.current.hide();
      Toast.showSuccess('Registration Successful', {duration: 3000});
    }
  }, [isUserRegister]);
  React.useEffect(() => {
    if (isUserLoggedIn) {
      Toast.showSuccess('Login Successful', {duration: 2000});
    }
  }, [isUserLoggedIn]);
  React.useEffect(() => {
    if (isUserLoggedIn) {
      navigation.navigate('Home');
    }
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
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
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
                  style={{color: '#000000', fontSize: 25, fontWeight: '700'}}>
                  Reset Password
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{color: '#989797', fontSize: 13, fontWeight: '100'}}>
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
              <View style={{marginBottom: 10}}>
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
                  style={{color: '#989797', fontSize: 13, fontWeight: '100'}}>
                  We just sent you an email with a link to reset your password.
                  Please click on the link to reset your password.
                </Text>
              </View>
            </React.Fragment>
          )}
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', marginTop: 10}}>
          <Thumbnail
            source={require('../../assets/images/QPS-Logo-white.png')}
            square
            style={{width: 120}}
          />
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.welcome}>Log in</Text>
        </View>
        <View>
          <InputItem updator={e => setUsername(e)} placeholder="Username *" />
          <InputItem
            updator={e => setPassword(e)}
            placeholder="Password"
            password={true}
          />
          <TouchableOpacity
            onPress={() => handleLogin()}
            disabled={loading}
            style={[styles.startButton, {padding: 15}]}>
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
                onPress={e => setRememberLog(!RememberLog)}
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
              <Text style={{color: '#F8CD28', fontWeight: '100', fontSize: 12}}>
                Forgot Password
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <SlidingUpPanel
        ref={_panel}
        draggableRange={{top: height + 80, bottom: 80}}
        containerStyle={{backgroundColor: '#055B89', zIndex: 9999999}}
        height={height + 80}
        showBackdrop={true}
        backdropStyle={{backgroundColor: '#055B89', zIndex: 9999999}}>
        <View
          style={[
            styles.panel,
            {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
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
          <TouchableWithoutFeedback
            onPress={() => _panel.current.show()}
            style={styles.headerLayoutStyle}>
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
          <TouchableWithoutFeedback
            onPress={() => _panel.current.hide()}
            style={[styles.headerLayoutStyle, {marginTop: 20}]}>
            <Icon
              name={'chevron-down'}
              type="FontAwesome"
              style={{color: '#228BC4', fontWeight: '700'}}
            />
          </TouchableWithoutFeedback>
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
              // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={{flex: 1}}
              resetScrollToCoords={{x: 0, y: 0}}
              scrollEnabled={false}
              contentContainerStyle={{flex: 1, paddingBottom: 50}}>
              <InputItem
                updator={e => setFirstName(e)}
                placeholder="First Name *"
              />
              <InputItem updator={e => setSurname(e)} placeholder="Surname *" />
              <InputItem
                updator={e => setUsername(e)}
                placeholder="Username *"
              />
              <InputItem
                updator={e => setEmail(e)}
                placeholder="Email Address *"
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
      </SlidingUpPanel>
    </View>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  isUserLoggedIn: state.auth.isUserLoggedIn,
  isUserRegister: state.auth.isUserRegister,
  forgetPasswordData: state.auth.forgetPassword,
  loading: state.auth.loading,
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
