/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Thumbnail, Icon} from 'native-base';
import {ScrollView, Text, View} from 'react-native';
import React from 'react';

import {styles} from './style';

const OrderDetailsItem = ({}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Thumbnail
            square
            source={require('../../assets/images/Image-32.png')}
          />
          <View style={styles.itemProdConc}>
            <Text style={styles.itemProdTitle}>A2 Posters</Text>
            <Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
          </View>
        </View>
        <Icon
          name="angle-right"
          type="FontAwesome5"
          style={styles.buttonIcon}
        />
      </View>
      <View style={styles.cardTop}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Thumbnail
            square
            source={require('../../assets/images/Image-142.png')}
          />
          <View style={styles.itemProdConc}>
            <Text style={styles.itemProdTitle}>A2 Posters</Text>
            <Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
          </View>
        </View>
        <Icon
          name="angle-right"
          type="FontAwesome5"
          style={styles.buttonIcon}
        />
      </View>
      <View style={styles.cardTop}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Thumbnail
            square
            source={require('../../assets/images/Image-152.png')}
          />
          <View style={styles.itemProdConc}>
            <Text style={styles.itemProdTitle}>A2 Posters</Text>
            <Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
          </View>
        </View>
        <Icon
          name="angle-right"
          type="FontAwesome5"
          style={styles.buttonIcon}
        />
      </View>

      <View
        style={[
          styles.actionConc,
          {
            justifyContent: 'space-between',
            borderBottomColor: '#E0DFDF',
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginBottom: 20,
          },
        ]}>
        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: '#989797',
            }}>
            Shipping
          </Text>
          <Text style={{fontSize: 17, marginTop: 10, color: '#222222'}}>
            Total
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: '#989797',
            }}>
            ₦1,500.00
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 17,
              marginTop: 10,
              color: '#222222',
            }}>
            223, 480
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.actionConc,
          {
            justifyContent: 'space-between',
            paddingBottom: 20,
          },
        ]}>
        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: '#989797',
            }}>
            Order Date:
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '700',
              color: '#222222',
            }}>
            12/02/2020
          </Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Order Details</Text>
      </View>
      <Text style={{color: '#000000', fontWeight: '700', marginTop: 15}}>
        items (3)
      </Text>
      <React.Fragment>
        <ScrollView
          style={styles.appContainer}
          showsVerticalScrollIndicator={false}>
          <OrderDetailsItem />
        </ScrollView>
      </React.Fragment>
    </View>
  );
};

export default OrderDetails;
