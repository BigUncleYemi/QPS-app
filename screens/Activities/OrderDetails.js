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
import HeaderBackButton from '../../components/HeaderBackButton';
import {get} from '../../utils/Api';

const OrderDetailsItem = ({data, navigation}) => {
  return (
    <View style={styles.card}>
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
              onPress={() =>
                navigation.navigate('ProductView', {
                  productId: i.productId,
                  categoryId: i.category,
                  hasCategory: null,
                })
              }
            />
          </View>
        ))}

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
            {data && data.billing && data.billing.homeDelivery
              ? `₦ ${data && data.billing && data.billing.shippingFee}`
              : '₦ 0'}
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 17,
              marginTop: 10,
              color: '#222222',
            }}>
            {data && data.totalPrice}
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
            {data && data.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <HeaderBackButton onPressAction={() => navigation.goBack()} />
      <View style={styles.header}>
        <Text style={styles.welcome}>Order Details</Text>
      </View>
      <Text style={{color: '#000000', fontWeight: '700', marginTop: 15}}>
        items ({data && data.items && data.items.length})
      </Text>
      <React.Fragment>
        <ScrollView
          style={styles.appContainer}
          showsVerticalScrollIndicator={false}>
          <OrderDetailsItem navigation={navigation} data={data} />
        </ScrollView>
      </React.Fragment>
    </View>
  );
};

export default OrderDetails;
