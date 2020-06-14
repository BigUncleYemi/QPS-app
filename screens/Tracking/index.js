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
import {
  Shipped,
  ShippedActive,
  OrderProcessedActive,
  OrderProcessed,
  PaymentConfirmedActive,
  PaymentConfirmed,
  OrderPlaceActive,
  OrderPlace,
  ReadyForPickupActive,
  ReadyForPickup,
} from '../../assets/images';

const OrderItem = ({}) => {
  return (
    <View style={[styles.card, {marginBottom: 40}]}>
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
      <View style={[styles.actionConc, {justifyContent: 'space-between'}]}>
        <View>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#E0DFDF'}}>
            Shipping
          </Text>
          <Text style={{fontSize: 17, marginTop: 10}}>Total</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 12,
              fontWeight: '700',
              color: '#E0DFDF',
            }}>
            ₦1,500.00
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
      </View>
    </View>
  );
};

const Line = ({last}) => (
  <View style={{width: 30}}>
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          borderWidth: 4,
          borderRadius: 50,
          margin: 3,
          borderColor: '#a3cde3',
          height: 19,
          width: 19,
          backgroundColor: '#248bc4',
        }}
      />
      {!last && (
        <React.Fragment>
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: '#cee2ed',
              height: 8,
              width: 8,
              backgroundColor: '#cee2ed',
            }}
          />
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: '#cee2ed',
              height: 8,
              width: 8,
              backgroundColor: '#cee2ed',
            }}
          />
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: '#cee2ed',
              height: 8,
              width: 8,
              backgroundColor: '#cee2ed',
            }}
          />
        </React.Fragment>
      )}
    </View>
  </View>
);

const TrackingScreen: () => React$Node = () => {
  return (
    <View style={[styles.container, {paddingTop: 10}]}>
      <ScrollView
        style={styles.appContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Order Checkout</Text>
        </View>
        <View>
          <Text
            style={[
              styles.price,
              {width: '100%', fontSize: 12, marginLeft: 0, color: '#E0DFDF'},
            ]}>
            Order Date: 09 May, 2020
          </Text>
          <Text
            style={[
              styles.price,
              {width: '100%', fontSize: 12, marginLeft: 0, color: '#E0DFDF'},
            ]}>
            Track ID: 5780-a5908
          </Text>
        </View>

        <View style={{marginTop: 20, marginBottom: 12}}>
          {true ? (
            <View style={{flexDirection: 'row'}}>
              <Line />
              <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
                {true ? <ReadyForPickupActive /> : <ReadyForPickup />}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '700',
                    color: '#989797',
                  }}>
                  Ready for PickUp
                </Text>
                <Text
                  style={[
                    {
                      color: '#989797',
                      fontSize: 8,
                      marginTop: 2,
                      fontWeight: '300',
                      width: '80%',
                    },
                  ]}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod
                </Text>
              </View>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <Line />
              <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
                {true ? <ShippedActive /> : <Shipped />}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '700',
                    color: '#989797',
                  }}>
                  Shipped
                </Text>
                <Text
                  style={[
                    {
                      color: '#989797',
                      fontSize: 8,
                      marginTop: 2,
                      fontWeight: '300',
                      width: '80%',
                    },
                  ]}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod
                </Text>
              </View>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Line />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {true ? <OrderProcessedActive /> : <OrderProcessed />}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  color: '#989797',
                }}>
                Order Processed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 8,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Line />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {true ? <PaymentConfirmedActive /> : <PaymentConfirmed />}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  color: '#989797',
                }}>
                Payment Confirmed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 8,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Line last />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {true ? <OrderPlaceActive /> : <OrderPlace />}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  color: '#989797',
                }}>
                Order Placed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 8,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{color: '#000000', fontWeight: '700', marginTop: 15}}>
            items (3)
          </Text>
          <OrderItem />
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackingScreen;
