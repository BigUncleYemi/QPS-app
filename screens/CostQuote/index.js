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
import {Button, Icon} from 'native-base';
import {
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {styles} from './style';
import Modal from 'react-native-modal';
import InputItem from '../../components/InputItem';
import {Upload} from '../../assets/images';
import SelectItem from '../../components/SelectItem';
import BlueInput from '../../components/BlueInput';

const {width} = Dimensions.get('window');

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

const UploadImage = () => (
  <View style={styles.uploadConc}>
    <TouchableOpacity style={styles.upload}>
      <Upload />
      <Text style={styles.uploadText}>Upload Custom Design</Text>
    </TouchableOpacity>
    <Text style={styles.TotalPriceHint}>
      Please note that if no design has been uploaded, our system will
      automatically charge you for design services
    </Text>
  </View>
);
const RemoveItemModal = ({isModalVisible, toggleModal}) => {
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
            Remove From Cart
          </Text>
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          You’re about to Delete a product from your cart
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Button
            style={[
              {
                marginTop: 15,
                width: '40%',
                alignItems: 'center',
                marginBottom: 40,
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

const QuoteModal = ({isModalVisible, toggleModal}) => {
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
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000000',
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Quotation
          </Text>
          <Icon
            name="close"
            type="FontAwesome"
            onPress={toggleModal}
            style={{color: '#989797'}}
          />
        </View>
        <Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
          Our Offer For You:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#E0DFDF',
            paddingBottom: 10,
            marginBottom: 15,
          }}>
          <View>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 5,
                fontWeight: '700',
              }}>
              Production Cost
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 5,
                fontWeight: '700',
              }}>
              Design Service
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 5,
                fontWeight: '700',
              }}>
              #120,000
            </Text>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 5,
                fontWeight: '700',
              }}>
              #50,000
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 5,
              fontWeight: '700',
            }}>
            Total
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 5,
              fontWeight: '700',
            }}>
            #170,000
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Button
            style={[styles.startButton, {marginBottom: 10, borderRadius: 8}]}
            onPress={toggleModal}>
            <Text style={styles.startButtonText}>Proceed to Order</Text>
          </Button>
        </View>
        <Button block transparent>
          <Text
            style={{
              color: '#228BC4',
              textAlign: 'center',
              fontSize: 10,
            }}>
            Download this Quote?
          </Text>
        </Button>
      </View>
    </Modal>
  );
};

const RequestQuoteModal = ({isModalVisible, toggleModal}) => {
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
            name="check-circle"
            type="FontAwesome"
            style={{color: '#228BC4', fontSize: 80}}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 24,
          }}>
          Quote Requested
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 12,
            color: '#E0DFDF',
          }}>
          We will be in touch with you shortly.
        </Text>
      </View>
    </Modal>
  );
};

const CostQuoteScreen = ({
  navigation,
  getAllProduct,
  allProduct,
  listOfCategories,
  allListOfCategories,
  load,
}) => {
  let radio_props = [{label: 'Yes ', value: 1}, {label: 'No', value: 0}];

  const [active, handleActive] = React.useState(1);

  const handleClick = active => {
    handleActive(active);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const [isRequestQuoteModalVisible, setRequestQuoteModalVisible] = useState(
    false,
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleRequestQuoteModal = () => {
    setRequestQuoteModalVisible(!isRequestQuoteModalVisible);
  };

  const [delivery, handleDelivery] = useState(null);
  React.useEffect(() => {
    listOfCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Cost Quote</Text>
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
              Cost Calculator
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
              Request Quote
            </Text>
          </Button>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        {active === 1 && (
          <React.Fragment>
            <View style={styles.itemBottom}>
              <SelectItem
                data={
                  allListOfCategories &&
                  allListOfCategories.map(item => ({
                    label: item.name,
                    value: item.id,
                  }))
                }
                placeholder="What product do you want to order?"
              />
              <SelectItem placeholder="Quantity?" />
              <View
                style={{
                  width: width * 0.9,
                  backgroundColor: '#ffffff',
                  fontSize: 13,
                  marginTop: 30,
                  padding: 13,
                }}>
                <Text style={{color: '#E0DFDF'}}>Design Service</Text>
                <View>
                  <RadioForm formHorizontal={true} animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {radio_props.map((obj, i) => (
                      <RadioButton
                        labelHorizontal={true}
                        key={i}
                        style={{marginTop: 15, alignItems: 'center'}}>
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
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={true}
                          onPress={() => handleDelivery(i)}
                          labelStyle={{
                            fontSize: 15,
                            marginRight: 9,
                            color: '#222222',
                          }}
                          labelWrapStyle={{}}
                        />
                      </RadioButton>
                    ))}
                  </RadioForm>
                </View>
              </View>
            </View>
            <View
              style={{marginTop: 0, flexDirection: 'row', marginBottom: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                }}>
                <Text
                  style={{fontSize: 9, fontWeight: '700', fontStyle: 'italic'}}>
                  We use 100gsm bond paper (the regular envelop quality sold in
                  stores) for quantities within the range of 1-299. We make
                  thicker envelopes using 170gsm Matte Paper with a MOQ of
                  300pcs. The computation above is for full coloured print. For
                  special specifications, please contact support{' '}
                  <Text style={{fontSize: 9, color: '#228BC4'}}>here</Text>
                </Text>
              </View>
            </View>
            <Button style={styles.startButton} onPress={toggleModal}>
              <Text style={styles.startButtonText}>Calculate</Text>
            </Button>
            <QuoteModal
              toggleModal={toggleModal}
              isModalVisible={isModalVisible}
            />
          </React.Fragment>
        )}
        {active === 2 && (
          <React.Fragment>
            <View style={styles.itemBottom}>
              <InputItem placeholder="Name" />
              <InputItem placeholder="Email" />
              <InputItem placeholder="Phone" />
              <SelectItem
                data={
                  allListOfCategories &&
                  allListOfCategories.map(item => ({
                    label: item.name,
                    value: item.id,
                  }))
                }
                placeholder="What do you want to print?"
              />
              <SelectItem placeholder="Quantity?" />
              <UploadImage />
              <SelectItem placeholder="Paper Size" />
              <Button
                style={styles.startButton}
                onPress={toggleRequestQuoteModal}>
                <Text style={styles.startButtonText}>Request Quote</Text>
              </Button>
              <RequestQuoteModal
                isModalVisible={isRequestQuoteModalVisible}
                toggleModal={toggleRequestQuoteModal}
              />
            </View>
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  allProduct: state.product.allProduct.data,
  load: state.product.hasMore,
  allListOfCategories: state.product.listOfCategories.data,
});

const mapDispatchToProps = dispatch => ({
  getAllProduct: data => dispatch(Actions.Product.GetAllProduct(data)),
  listOfCategories: () => dispatch(Actions.Product.GetListOfCategory()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CostQuoteScreen);
