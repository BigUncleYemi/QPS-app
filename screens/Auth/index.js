/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import InputItem from '../../components/InputItem';
import BottomDrawer from 'rn-bottom-drawer';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');
const TAB_BAR_HEIGHT = 49;

const AuthScreen: () => React$Node = ({navigation}) => {
  const [arrow, setArrow] = React.useState(false);
  return (
    <View style={styles.container}>
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
          <InputItem placeholder="Username or Email Address" />
          <InputItem placeholder="Password" />
          <Button style={styles.startButton}>
            <Text style={styles.startButtonText}>Login</Text>
          </Button>
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
            <Text style={{color: '#F8CD28', fontWeight: '100', fontSize: 12}}>
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={{top: height + 80, bottom: 80}}
        animatedValue={this._draggedValue}
        height={height + 80}
        showBackdrop={false}>
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
            },
          ]}>
          <View style={styles.headerLayoutStyle}>
            <Icon
              name={'chevron-up'}
              type="FontAwesome"
              style={{color: '#228BC4', fontWeight: '700'}}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 14}}>New here? </Text>
              <Text style={{color: '#F8CD28', fontSize: 14}}>Sign Up</Text>
            </View>
          </View>
          <View style={[styles.headerLayoutStyle, {marginTop: 20}]}>
            <Icon
              name={'chevron-down'}
              type="FontAwesome"
              style={{color: '#228BC4', fontWeight: '700'}}
            />
          </View>
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
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <InputItem placeholder="Username" />
                <InputItem placeholder="Email Address" />
                <InputItem placeholder="Phone Number" />
                <InputItem placeholder="Password" />
                <InputItem placeholder="Confirm Password" />
                <Button style={styles.startButton}>
                  <Text style={styles.startButtonText}>Sign Up</Text>
                </Button>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 50,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: -7,
                    }}>
                    <CheckBox
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
                  <Text
                    style={{color: '#F8CD28', fontWeight: '100', fontSize: 12}}>
                    Forgot Password
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
          </ScrollView>
        </View>
      </SlidingUpPanel>
    </View>
  );
};

export default AuthScreen;
