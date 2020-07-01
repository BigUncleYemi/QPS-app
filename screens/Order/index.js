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
import {Button, Thumbnail, Icon} from 'native-base';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import Modal from 'react-native-modal';
import BlueInput from '../../components/BlueInput';
import {Coupon} from '../../assets/images';
import PayStack from '../../components/lib/PayStack';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  storeData,
  getData,
  nameProduct,
  OrderFunc,
} from '../../utils/helperFunc';

const styleLocal = StyleSheet.create({
  btn: {
    backgroundColor: '#ffffff',
    borderColor: '#e1dfdf',
    borderWidth: 2,
    padding: 0,
    width: '50%',
    justifyContent: 'center',
  },
  btnNone: {
    borderColor: '#e1dfdf',
    borderWidth: 2,
    backgroundColor: '#e1dfdf',
    padding: 0,
    width: '50%',
    justifyContent: 'center',
  },
});

const FailedOrderPaymentModal = ({isModalVisible, toggleModal}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Icon
            name="close"
            type="FontAwesome"
            onPress={toggleModal}
            style={{color: '#989797'}}
          />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Icon
            name="close-circle"
            type="MaterialCommunityIcons"
            style={{color: 'red', fontSize: 60}}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 20,
          }}>
          Order Payment Failed
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
            color: '#22222276',
          }}>
          Please try again.
        </Text>
        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Button
            style={[styles.startButton, {marginBottom: 10, borderRadius: 8}]}
            onPress={toggleModal}>
            <Text style={styles.startButtonText}>Proceed Place Order</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const CouponModal = ({isModalVisible, toggleModal}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Coupon Code
          </Text>
          <Icon
            name="close"
            type="FontAwesome"
            onPress={toggleModal}
            style={{color: '#989797'}}
          />
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          Please input your coupon code:
        </Text>
        <BlueInput />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 15,
          }}>
          <View
            style={{
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Button
              style={[
                styles.startButton,
                {width: '100%', marginBottom: 10, borderRadius: 8},
              ]}
              onPress={toggleModal}>
              <Text style={styles.startButtonText}>Apply Coupon Code</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const OrderItem = ({cart}) => {
  return (
    <View style={styles.card}>
      {cart &&
        cart.map((data, index) => (
          <View key={index} style={styles.cardTop}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Thumbnail
                square
                style={{height: 50, width: 50, borderRadius: 10}}
                source={{
                  uri: `${(data &&
                    data.img &&
                    data.img[0] &&
                    data.img[0].src) ||
                    'https://via.placeholder.com/150.png'}`,
                }}
              />
              <View style={styles.itemProdConc}>
                <Text style={styles.itemProdTitle}>{data && data.name}</Text>
                <Text style={styles.itemProdSubTitle}>
                  ₦{data && data.price}
                </Text>
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
            ₦1,500.00
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 17,
              fontWeight: '700',
              marginTop: 10,
            }}>
            {cart &&
              cart
                .map(i => i.price)
                .reduce((accumulator, item) => {
                  return accumulator + item;
                }, 0)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const AddressModal = ({isModalVisible, toggleModal, handleAddress}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Shipping Address
          </Text>
          <Icon
            name="close"
            type="FontAwesome"
            onPress={toggleModal}
            style={{color: '#989797'}}
          />
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          Please input your shipping address:
        </Text>
        <BlueInput updator={handleAddress} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            marginBottom: 15,
          }}>
          <View
            style={{
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Button
              style={[
                styles.startButton,
                {width: '100%', marginBottom: 10, borderRadius: 8},
              ]}
              onPress={toggleModal}>
              <Text style={styles.startButtonText}>Submit</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const OrderScreen = ({
  navigation,
  user,
  cart,
  getCart,
  postOrder,
  postOrderData,
}) => {
  let radio_props = [
    {label: 'Door Delivery ', value: true, title: 'Door Delivery'},
    {label: 'Pick Up', value: false, title: 'Pick Up'},
  ];
  React.useEffect(() => {
    getCart();
  }, [getCart]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [active, handleActive] = React.useState(1);

  const handleClick = active => {
    handleActive(active);
  };

  const [isCouponModalVisible, setCouponModalVisible] = useState(false);

  const toggleCouponModal = () => {
    setCouponModalVisible(!isCouponModalVisible);
  };

  const [
    isFailedOrderPaymentModalVisible,
    setFailedOrderPaymentModalVisible,
  ] = useState(false);

  const toggleFailedOrderPaymentModal = () => {
    setFailedOrderPaymentModalVisible(!isFailedOrderPaymentModalVisible);
  };

  const getReference = () => {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return `QPS-APP-${text}`;
  };

  const [delivery, handleDelivery] = useState(null);
  const [address, setAddress] = useState('-');
  React.useEffect(() => {
    async function done(params) {
      const payload = await getData('address');
      setAddress(payload);
    }
    done();
  }, [setAddress]);
  const handleAddress = async value => {
    await storeData('address', value);
    const payload = await getData('address');
    setAddress(payload);
  };

  const homeDelivery = () => {
    if (delivery === 1) {
      return false;
    } else if (delivery === 0) {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      {console.log(delivery)}
      <AddressModal
        handleAddress={handleAddress}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
      <FailedOrderPaymentModal
        toggleModal={toggleFailedOrderPaymentModal}
        isModalVisible={isFailedOrderPaymentModalVisible}
      />
      <CouponModal
        toggleModal={toggleCouponModal}
        isModalVisible={isCouponModalVisible}
      />
      <View style={styles.header}>
        <Text style={styles.welcome}>Order Checkout</Text>
      </View>
      <View style={styles.ProfileRoot}>
        <View style={styles.ProfileTab}>
          <Button
            onPress={() => handleClick(1)}
            style={[
              active === 1 ? styleLocal.btn : styleLocal.btnNone,
              {
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
                height: 'auto',
              },
            ]}>
            <Text
              style={[
                active === 1
                  ? {
                      color: '#489dce',
                    }
                  : {
                      color: '#393939',
                    },
                styles.ProfileTabText,
              ]}>
              Billing Details
            </Text>
          </Button>
          <Button
            style={[
              active === 2 ? styleLocal.btn : styleLocal.btnNone,
              {
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
                height: 'auto',
              },
            ]}>
            <Text
              style={[
                active === 2
                  ? {
                      color: '#489dce',
                    }
                  : {
                      color: '#393939',
                    },
                styles.ProfileTabText,
              ]}>
              Payment
            </Text>
          </Button>
        </View>
      </View>
      <ScrollView
        style={styles.appContainer}
        showsVerticalScrollIndicator={false}>
        {active === 1 && (
          <React.Fragment>
            <View style={styles.card}>
              <View
                style={[styles.cardTop, {marginBottom: 10, paddingBottom: 5}]}>
                <View style={{width: '100%'}}>
                  <Text
                    style={[styles.price, {color: '#989797', width: '100%'}]}>
                    {`${user && user.data && user.data.firstName} ${user &&
                      user.data &&
                      user.data.surname}`}
                  </Text>
                  <Text
                    style={[styles.price, {color: '#989797', width: '100%'}]}>
                    {user && user.data && user.data.phone}
                  </Text>
                  <Text
                    style={[
                      styles.price,
                      {
                        color: '#222222',
                        fontSize: 9,
                        marginTop: 10,
                        width: 150,
                      },
                    ]}>
                    {address ? address : 'no address'}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.blueBut}
                onPress={() => toggleModal()}>
                <Text
                  style={{
                    fontSize: 10,
                    marginRight: 20,
                    color: '#228BC4',
                  }}>
                  Ship to a different address?
                </Text>
              </TouchableOpacity>
            </View>

            <RadioForm formHorizontal={false} animation={true}>
              <View style={styles.card}>
                {radio_props.map((obj, i) => (
                  <View
                    key={i}
                    style={[
                      styles.cardTop,
                      {
                        borderBottomWidth: i === radio_props.length - 1 ? 0 : 1,
                        marginBottom: 10,
                        paddingBottom: 5,
                      },
                    ]}>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                      <RadioButton
                        labelHorizontal={true}
                        key={i}
                        style={{marginRight: 10, alignItems: 'center'}}>
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={delivery === i}
                          onPress={() => handleDelivery(i)}
                          borderWidth={2}
                          buttonInnerColor={'#228BC4'}
                          buttonOuterColor={'#ffffff'}
                          buttonSize={12}
                          buttonOuterSize={12}
                          buttonStyle={{}}
                          buttonWrapStyle={{
                            marginRight: -5,
                            borderColor: '#228BC4',
                            borderWidth: 1.6,
                            borderRadius: 50,
                            padding: 1,
                          }}
                        />
                      </RadioButton>
                      <View style={{marginTop: -2.7}}>
                        <Text
                          style={[
                            styles.price,
                            {
                              color: '#222222',
                              fontSize: 12,
                              width: '100%',
                              marginBottom: -7,
                            },
                          ]}>
                          {obj.title}
                        </Text>
                        <Text
                          style={[
                            styles.price,
                            {
                              color: '#989797',
                              fontSize: 8,
                              marginTop: 10,
                              fontWeight: '300',
                              width: '80%',
                            },
                          ]}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </RadioForm>
            <Button
              style={styles.startButton}
              disabled={!address || !delivery}
              onPress={() => handleClick(2)}>
              <Text style={styles.startButtonText}>Continue</Text>
            </Button>
          </React.Fragment>
        )}
        {active === 2 && (
          <React.Fragment>
            {cart && cart.length > 0 && (
              <OrderItem cart={Object.keys(cart).map(key => cart[key])} />
            )}
            <Button
              style={styles.whiteButton}
              iconLeft
              onPress={() => toggleCouponModal()}>
              <Coupon />
              <Text style={styles.whiteButtonText}>Apply Coupon Code</Text>
            </Button>
            <PayStack
              paystackKey={'pk_test_a4f7333be99a7c59da70a2084577a4d4b35243fc'}
              paystackSecretKey={
                'sk_test_95e0ad209100b755d9c2ec23eadca163178cd3c5'
              }
              amount={Object.keys(cart)
                .map(key => cart[key])
                .map(i => i.price)
                .reduce((accumulator, item) => {
                  return accumulator + item;
                }, 0)}
              billingEmail={user && user.data && user.data.email}
              billingMobile={user && user.data && user.data.phone}
              billingName={`${user &&
                user.data &&
                user.data.firstName} ${user && user.data && user.data.surname}`}
              ActivityIndicatorColor={'blue'}
              showPayButton={true}
              SafeAreaViewContainer={{marginTop: 5}}
              SafeAreaViewContainerModal={{marginTop: 5}}
              refNumber={getReference()}
              onCancel={e => toggleFailedOrderPaymentModal(e)}
              onSuccess={async e => {
                await postOrder(
                  OrderFunc(
                    user,
                    cart,
                    address,
                    homeDelivery(),
                    Object.keys(cart)
                      .map(key => cart[key])
                      .map(i => i.price)
                      .reduce((accumulator, item) => {
                        return accumulator + item;
                      }, 0),
                    e.data.trxref,
                  ),
                );
                console.log(e);
                navigation.navigate('OrderConf', {
                  metadata: e,
                });
              }}
              renderButton={onPress => (
                <Button style={styles.startButton} onPress={() => onPress()}>
                  <Text style={styles.startButtonText}>Place Order</Text>
                </Button>
              )}
            />
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isUserLoggedIn: state.auth.isUserLoggedIn,
  isUserRegister: state.auth.isUserRegister,
  cart: state.cart.cart,
  postOrderData: state.order.postOrder,
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(Actions.Cart.GetAllCartItem()),
  postOrder: data => dispatch(Actions.Order.MakeOrder(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderScreen);
