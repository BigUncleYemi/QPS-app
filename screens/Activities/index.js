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
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import Modal from 'react-native-modal';
import BlueInput from '../../components/BlueInput';
import {nameProduct, Pricer, getAmount} from '../../utils/helperFunc';

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

const RemoveItemModal = ({isModalVisible, toggleModal, item, removeItem}) => {
  const handleDelete = async () => {
    removeItem(item);
    toggleModal();
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View
        style={{
          backgroundColor: '#ffffff',
          padding: 30,
          paddingBottom: 20,
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
            Remove From Cart
          </Text>
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          You’re about to Delete this product from your cart
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={handleDelete}
            style={[
              {
                marginTop: 15,
                width: '40%',
                alignItems: 'center',
                borderRadius: 8,
              },
            ]}
            transparent>
            <Text
              style={{
                color: 'red',
                textAlign: 'center',
                fontWeight: '400',
                width: '100%',
                fontSize: 14,
              }}>
              Delete
            </Text>
          </Button>
          <Button
            onPress={toggleModal}
            style={[
              styles.startButton,
              {
                width: '40%',
                alignItems: 'center',
                marginBottom: 10,
                borderRadius: 8,
              },
            ]}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: '400',
                width: '100%',
                fontSize: 14,
              }}>
              Cancel
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const TrackOrderModal = ({isModalVisible, toggleModal}) => {
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
            Track Order
          </Text>
          <Icon
            name="close"
            type="FontAwesome"
            onPress={toggleModal}
            style={{color: '#989797'}}
          />
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          Please input your tracking ID:
        </Text>
        <BlueInput />
        <Button block transparent style={{marginTop: -12}}>
          <Text
            style={{
              color: '#228BC4',
              textAlign: 'right',
              fontStyle: 'italic',
              fontSize: 10,
              width: '100%',
            }}>
            Don’t know your tracking ID?
          </Text>
        </Button>
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
              <Text style={styles.startButtonText}>Track</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const CartItem = React.memo(
  ({navigation, toggleRemoveItemModal, data, updateItem}) => {
    const [design] = React.useState(data && data.design);
    const [qua, setQua] = useState(Number(data && data.quantity));
    const [priceGood, setPriceGood] = useState(Number(data && data.price));
    const [priceSetting, setPriceSetting] = React.useState(
      data && data.priceSet,
    );
    const [first, handleFirst] = React.useState(false);
    React.useEffect(() => {
      if (
        data.priceSet &&
        data.priceSet &&
        data.priceSet[0] &&
        data.priceSet[0].unit
      ) {
        setPriceGood(Pricer(qua, data.priceSet, design, data.size));
        setPriceSetting(getAmount(qua, data.priceSet, data.size).priceSetting);
      }
    }, [priceSetting, qua, design, data.priceSet, data.size]);
    const handleQua = async qua => {
      handleFirst(true);
      await setQua(qua);
    };
    React.useEffect(() => {
      if (first && priceSetting && priceGood) {
        let payload = {
          productId: data && data.productId,
          quantity: qua,
          price: priceGood,
          setting: priceSetting,
        };
        updateItem(payload);
        handleFirst(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceSetting, priceGood]);
    return (
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={styles.cardInner}>
            <View style={styles.cardInnerConc}>
              <Thumbnail
                square
                small
                style={{height: 50, width: 50, borderRadius: 10}}
                source={{
                  uri: data && data.img && data.img[0] && data.img[0].src,
                }}
              />
              <View style={styles.itemProdConc}>
                <Text style={styles.itemProdTitle}>
                  {nameProduct(data && data.name)}
                </Text>
              </View>
            </View>
            <View style={styles.quaConc}>
              <TouchableOpacity
                disabled={qua === 0}
                onPress={() => handleQua(qua - 1)}
                style={styles.quaButton}>
                <Text style={styles.quaButtontext}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quaValue}>{qua}</Text>
              <TouchableOpacity
                onPress={() => handleQua(qua + 1)}
                style={styles.quaButton}>
                <Text style={styles.quaButtontext}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>
              {priceGood &&
                priceGood.toLocaleString('en-NG', {
                  currency: 'NGN',
                  style: 'currency',
                })}
            </Text>
          </View>
        </View>
        <View style={styles.actionConc}>
          <TouchableOpacity
            style={styles.blueBut}
            onPress={() =>
              navigation.navigate('ProductView', {
                productId: data.productId,
              })
            }>
            <Text
              style={{
                fontSize: 9,
                marginRight: 20,
                color: '#228BC4',
              }}>
              Product Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondActionBut}
            onPress={() => toggleRemoveItemModal(data.productId)}>
            <Text
              style={{
                fontSize: 9,
                marginRight: 20,
                color: '#FF1717',
              }}>
              Remove from Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const OrderItem = ({navigation, toggleTrackModal}) => {
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
      <View style={styles.actionConc}>
        <TouchableOpacity
          style={styles.blueBut}
          onPress={() => navigation.navigate('OrderDetails')}>
          <Text
            style={{
              fontSize: 8,
              marginRight: 20,
              color: '#228BC4',
            }}>
            Order Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blueBut}
          onPress={() => toggleTrackModal()}>
          <Text
            style={{
              fontSize: 8,
              marginRight: 20,
              color: '#228BC4',
            }}>
            Track Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondActionBut}>
          <Text
            style={{
              fontSize: 8,
              marginRight: 20,
              color: '#93eca1',
            }}>
            Active Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ActivitiesScreen = ({
  navigation,
  isUserLoggedIn,
  getCart,
  cart,
  removeItem,
  updateItem,
  postCart,
}) => {
  const [itemRemove, RemoveItem] = useState('');
  React.useEffect(() => {
    getCart();
  }, [getCart]);

  const [active, handleActive] = React.useState(1);

  const handleClick = active => {
    handleActive(active);
  };

  const [isTrackModalVisible, setTrackModalVisible] = useState(false);

  const toggleTrackModal = () => {
    setTrackModalVisible(!isTrackModalVisible);
  };

  const [isRemoveItemModalVisible, setRemoveItemModalVisible] = useState(false);

  const toggleRemoveItemModal = quaPrice => {
    RemoveItem(quaPrice);
    setRemoveItemModalVisible(!isRemoveItemModalVisible);
  };

  return (
    <View style={styles.container}>
      <RemoveItemModal
        item={itemRemove}
        removeItem={removeItem}
        toggleModal={() => setRemoveItemModalVisible(!isRemoveItemModalVisible)}
        isModalVisible={isRemoveItemModalVisible}
      />
      <TrackOrderModal
        toggleModal={toggleTrackModal}
        isModalVisible={isTrackModalVisible}
      />
      <View style={styles.header}>
        <Text style={styles.welcome}>Activities</Text>
      </View>
      {isUserLoggedIn ? (
        <React.Fragment>
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
                  Cart
                </Text>
              </Button>
              <Button
                onPress={() => handleClick(2)}
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
                  Orders
                </Text>
              </Button>
            </View>
          </View>
          <ScrollView
            style={styles.appContainer}
            showsVerticalScrollIndicator={false}>
            {active === 1 && (
              <React.Fragment>
                {cart &&
                  cart.length > 0 &&
                  cart.map((item, index) => (
                    <CartItem
                      toggleRemoveItemModal={toggleRemoveItemModal}
                      key={index}
                      getCart={getCart}
                      data={item}
                      postCart={postCart}
                      navigation={navigation}
                      updateItem={updateItem}
                    />
                  ))}
                {cart && cart.length > 0 && (
                  <Button
                    style={styles.startButton}
                    onPress={() => navigation.navigate('Order')}>
                    <Text style={styles.startButtonText}>
                      Proceed to Checkout
                    </Text>
                  </Button>
                )}
              </React.Fragment>
            )}
            {active === 2 && (
              <React.Fragment>
                {['', '', '', ''].map((item, index) => (
                  <OrderItem
                    toggleTrackModal={toggleTrackModal}
                    key={index}
                    data={item}
                    navigation={navigation}
                  />
                ))}
              </React.Fragment>
            )}
          </ScrollView>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <View style={styles.noLogConc}>
            <Text style={styles.noLogText}>
              Please Log in to see your activities
            </Text>
          </View>
          <Button
            style={styles.startButton}
            onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.startButtonText}>Log In or Register</Text>
          </Button>
        </React.Fragment>
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  isUserLoggedIn: state.auth.isUserLoggedIn,
  isUserRegister: state.auth.isUserRegister,
  cart: state.cart.cart,
});

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(Actions.Auth.CreateUser(data)),
  loginUser: data => dispatch(Actions.Auth.LoginUser(data)),
  getCart: () => dispatch(Actions.Cart.GetAllCartItem()),
  removeItem: data => dispatch(Actions.Cart.RemoveFromCart(data)),
  postCart: data => dispatch(Actions.Cart.AddToCart(data)),
  updateItem: data => dispatch(Actions.Cart.UpdateItemInCart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivitiesScreen);
