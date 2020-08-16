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
import HeaderBackButton from '../../components/HeaderBackButton';
import {get} from '../../utils/Api';

const OrderItem = ({data}) => {
  return (
    <View style={[styles.card, {marginBottom: 40}]}>
      {data &&
        data.items &&
        data.items.map((i, index) => (
          <View style={styles.cardTop} key={index}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Thumbnail square source={{uri: i && i.productImage}} />
              <View style={styles.itemProdConc}>
                <Text style={styles.itemProdTitle}>{i && i.productName}</Text>
                <Text style={styles.itemProdSubTitle}>{i && i.price}</Text>
              </View>
            </View>
            <Icon
              name="angle-right"
              type="FontAwesome5"
              style={styles.buttonIcon}
            />
          </View>
        ))}

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
            {data && data.billing && data.billing.homeDelivery
              ? `₦ ${data && data.billing && data.billing.shippingFee}`
              : '₦ 0'}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 17,
              fontWeight: '700',
              marginTop: 10,
            }}>
            ₦ {data && data.totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Line = ({last, active}) => (
  <View style={{width: 30}}>
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          borderWidth: 4,
          borderRadius: 50,
          margin: 3,
          borderColor: active ? '#a3cde3' : '#E0DFDF',
          height: 19,
          width: 19,
          backgroundColor: active ? '#248bc4' : '#989797',
        }}
      />
      {!last && (
        <React.Fragment>
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: active ? '#cee2ed' : '#E0DFDF',
              height: 8,
              width: 8,
              backgroundColor: active ? '#cee2ed' : '#E0DFDF',
            }}
          />
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: active ? '#cee2ed' : '#E0DFDF',
              height: 8,
              width: 8,
              backgroundColor: active ? '#cee2ed' : '#E0DFDF',
            }}
          />
          <View
            style={{
              borderRadius: 50,
              margin: 3,
              borderColor: active ? '#cee2ed' : '#E0DFDF',
              height: 8,
              width: 8,
              backgroundColor: active ? '#cee2ed' : '#E0DFDF',
            }}
          />
        </React.Fragment>
      )}
    </View>
  </View>
);

const TrackingScreen = ({navigation, route, getOrder, user}) => {
  React.useEffect(() => {
    getOrder({userId: Number(user.data.id)});
    return () => getOrder({userId: Number(user.data.id)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {data} = route.params;
  return (
    <View style={[styles.container, {paddingTop: 10}]}>
      <HeaderBackButton onPressAction={() => navigation.goBack()} />
      <ScrollView
        style={styles.appContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Track Order</Text>
        </View>
        <View>
          <Text
            style={[
              styles.price,
              {width: '100%', fontSize: 12, marginLeft: 0, color: '#333'},
            ]}>
            Order Date: {data && data.date}
          </Text>
          <Text
            style={[
              styles.price,
              {width: '100%', fontSize: 12, marginLeft: 0, color: '#333'},
            ]}>
            Track ID: {data && data.order_key}
          </Text>
        </View>

        <View style={{marginTop: 20, marginBottom: 12}}>
          {data && data.billing && data.billing.homeDelivery ? (
            <View style={{flexDirection: 'row'}}>
              <Line
                active={
                  data && data.status && data.status.includes('DELIVERED')
                }
              />
              <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
                {data && data.status && data.status.includes('DELIVERED') ? (
                  <ShippedActive />
                ) : (
                  <Shipped />
                )}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color:
                      data && data.status && data.status.includes('DELIVERED')
                        ? '#248bc4'
                        : '#989797',
                  }}>
                  Shipped
                </Text>
                <Text
                  style={[
                    {
                      color: '#989797',
                      fontSize: 10,
                      marginTop: 2,
                      fontWeight: '300',
                      width: '80%',
                    },
                  ]}>
                  Your order is on its way to the filled in address.
                </Text>
              </View>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <Line
                active={data && data.status && data.status.includes('READY')}
              />
              <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
                {data && data.status && data.status.includes('READY') ? (
                  <ReadyForPickupActive />
                ) : (
                  <ReadyForPickup />
                )}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color:
                      data && data.status && data.status.includes('READY')
                        ? '#248bc4'
                        : '#989797',
                  }}>
                  Ready for PickUp
                </Text>
                <Text
                  style={[
                    {
                      color: '#989797',
                      fontSize: 10,
                      marginTop: 2,
                      fontWeight: '300',
                      width: '80%',
                    },
                  ]}>
                  Pick your order from our store anytime at 8b Kingsley Emu
                  Street, Lekki Phase 1, Lagos.
                </Text>
              </View>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Line
              active={
                data && data.status && data.status.includes('ORDER_PROCESSING')
              }
            />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {data &&
              data.status &&
              data.status.includes('ORDER_PROCESSING') ? (
                <OrderProcessedActive />
              ) : (
                <OrderProcessed />
              )}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color:
                    data &&
                    data.status &&
                    data.status.includes('ORDER_PROCESSING')
                      ? '#248bc4'
                      : '#989797',
                }}>
                Order Processed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 10,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Your order is in production.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Line
              active={
                data && data.status && data.status.includes('PAYMENT_CONFIRMED')
              }
            />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {data &&
              data.status &&
              data.status.includes('PAYMENT_CONFIRMED') ? (
                <PaymentConfirmedActive />
              ) : (
                <PaymentConfirmed />
              )}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color:
                    data &&
                    data.status &&
                    data.status.includes('PAYMENT_CONFIRMED')
                      ? '#248bc4'
                      : '#989797',
                }}>
                Payment Confirmed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 10,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Your Payment has been confirmed and your order has been sent in.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Line
              last
              active={
                // data && data.status && data.status.includes('ORDER_PLACED')
                true
              }
            />
            <View style={{marginLeft: 12, marginRight: 12, width: 30}}>
              {/* {data && data.status && data.status.includes('ORDER_PLACED') ? ( */}
              <OrderPlaceActive />
              {/* ) : (
                <OrderPlace />
              )} */}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: true ? '#248bc4' : '#989797',
                }}>
                Order Placed
              </Text>
              <Text
                style={[
                  {
                    color: '#989797',
                    fontSize: 10,
                    marginTop: 2,
                    fontWeight: '300',
                    width: '80%',
                  },
                ]}>
                Your order has been successfully created.
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{color: '#000000', fontWeight: '700', marginTop: 15}}>
            items ({data && data.items && data.items.length})
          </Text>
          <OrderItem data={data} />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  getOrderData: state.order.order,
});

const mapDispatchToProps = dispatch => ({
  getOrder: data => dispatch(Actions.Order.GetOrder(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackingScreen);
