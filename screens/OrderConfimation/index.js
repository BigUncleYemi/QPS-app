/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {styles} from './style';
import {Button, Icon} from 'native-base';
import {Path2} from '../../assets/images';

const {width, height} = Dimensions.get('window');

const Paid = () => (
  <React.Fragment>
    <View
      style={{
        padding: 20,
        marginTop: 15,
        alignItems: 'center',
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Icon
          name="check-circle"
          type="FontAwesome"
          style={{color: '#228BC4', fontSize: 50}}
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 20,
        }}>
        Order Placed
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 11,
          color: '#E0DFDF',
        }}>
        Your order was placed successfully
      </Text>
    </View>
    <View
      style={{
        padding: 20,
        paddingTop: 0,
        alignItems: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 13}}>09 May, 2020</Text>
      <Text style={{color: '#989797', fontSize: 13, fontWeight: '700'}}>
        03:39 PM
      </Text>
    </View>
    <View
      style={{
        padding: 20,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
          Your track ID is{' '}
        </Text>
        <Text
          style={{
            color: '#228BC4',
            fontSize: 10,
            fontWeight: '700',
          }}>
          QPS-a590.
        </Text>
      </View>
      <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
        Your order will be processed once
      </Text>
      <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
        Your payment is confirmed
      </Text>
    </View>
    <View
      style={[
        {
          paddingTop: 25,
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: '75%',
          position: 'absolute',
          bottom: 70,
        },
      ]}>
      <Text style={{fontSize: 17, fontWeight: '700', color: '#222222'}}>
        Total
      </Text>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 17,
          fontWeight: '700',
          marginTop: 10,
        }}>
        223,480
      </Text>
    </View>
  </React.Fragment>
);

const BankPay = () => (
  <React.Fragment>
    <View
      style={{
        padding: 20,
        marginTop: 15,
        paddingBottom: 0,
        alignItems: 'center',
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Icon
          name="check-circle"
          type="FontAwesome"
          style={{color: '#228BC4', fontSize: 50}}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 20,
        }}>
        Order Placed
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 11,
          color: '#E0DFDF',
        }}>
        Your order was placed successfully
      </Text>
    </View>
    <View
      style={{
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 13}}>09 May, 2020</Text>
      <Text style={{color: '#989797', fontSize: 13, fontWeight: '700'}}>
        03:39 PM
      </Text>
    </View>
    <View
      style={{
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        alignItems: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 13, fontWeight: '700'}}>
        Our Bank Details
      </Text>
      <Text style={{color: '#989797', fontSize: 13, fontWeight: '700'}}>
        Access bank
      </Text>
      <Text style={{color: '#989797', fontSize: 13, fontWeight: '700'}}>
        0772594024
      </Text>
    </View>
    <View
      style={{
        padding: 20,
        paddingTop: 10,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
          Your track ID is{' '}
        </Text>
        <Text
          style={{
            color: '#228BC4',
            fontSize: 10,
            fontWeight: '700',
          }}>
          QPS-a590.
        </Text>
      </View>
      <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
        Your order will be processed once
      </Text>
      <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
        Your payment is confirmed
      </Text>
    </View>
    <View
      style={[
        {
          paddingTop: 25,
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: '75%',
          position: 'absolute',
          bottom: 70,
        },
      ]}>
      <Text style={{fontSize: 17, fontWeight: '700', color: '#222222'}}>
        Total
      </Text>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 17,
          fontWeight: '700',
          marginTop: 10,
        }}>
        223,480
      </Text>
    </View>
  </React.Fragment>
);

const OrderConfirmationScreen = ({navigation}) => {
  let payment = false;
  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../assets/images/path2.png')}
          style={{
            resizeMode: 'cover',
            height: 470,
            marginTop: 20,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          {payment ? <Paid /> : <BankPay />}
        </ImageBackground>
        <Button
          style={[styles.startButton, {backgroundColor: '#222222'}]}
          onPress={() => navigation.navigate('Track')}>
          <Text style={styles.startButtonText}>Track Order</Text>
        </Button>
        <Button
          style={styles.startButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.startButtonText}>Continue shopping</Text>
        </Button>
        <View style={{marginBottom: 50}} />
      </ScrollView>
    </View>
  );
};

export default OrderConfirmationScreen;
