/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Toast from 'react-native-tiny-toast';
import {connect} from 'react-redux';
import Actions from '../../redux/actions';
import {Button, Icon} from 'native-base';
import {
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  PermissionsAndroid,
  Platform,
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
import {
  getData,
  uploadFiles,
  Pricer,
  getAmount,
  uploader,
} from '../../utils/helperFunc';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
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

const QuoteModal = ({
  isModalVisible,
  toggleModal,
  design,
  price,
  priceSetting,
  navigation,
  product,
}) => {
  function askPermission() {
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'QuickPrintShop App External Storage Write Permission',
            message:
              'QuickPrintShop App needs access to Storage data in your phone ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If WRITE_EXTERNAL_STORAGE Permission is granted
          //changing the state to show Create PDF option
          createPDF();
        } else {
          alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } catch (err) {
        alert('Write permission err', err);
        console.warn(err);
      }
    }
    //Calling the External Write permission function
    if (Platform.OS === 'android') {
      requestExternalWritePermission();
    } else {
      createPDF();
    }
  }

  const createPDF = async () => {
    const date = new Date();
    let options = {
      html: `<div style="background-color: rgb(255, 255, 255); padding: 20px; display: flex; flex-direction: column; width: 500px;">
              <div style="flex-direction: row; display: flex; justify-content: space-between;">
                <span style="color: rgb(0, 0, 0); margin-top: 7px; font-weight: bold; font-size: 25px;">Quotation</span>
              </div>
              <span style="margin-top: 7px; margin-bottom: 7px; font-weight: 100;">Our Offer For You:</span>
              <div style="flex-direction: row; display: flex; justify-content: space-between; border-bottom-width: 1px; border-bottom-color: rgb(224, 223, 223); padding-bottom: 7px; margin-bottom: 12px;">
                <div style="flex-direction: column; display: flex;">
                  <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">Production Cost</span>
                  <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">Design Service</span>
                </div>
              <div style="flex-direction: column; display: flex;">
                <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">₦ ${price}</span>
                <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">${
                  design === 0
                    ? `₦ ${priceSetting &&
                        priceSetting.design &&
                        priceSetting.design}`
                    : '-'
                }</span>
              </div>
            </div>
          <div style="flex-direction: row; display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">Total</span>
            <span style="margin-top: 7px; margin-bottom: 2px; font-weight: 700;">
              ${
                design === 1
                  ? `₦ ${price}`
                  : (design === 0 &&
                      price &&
                      priceSetting &&
                      priceSetting.design &&
                      `₦ ${price + priceSetting.design}`) ||
                    '--'
              }
              </span>
          </div>
        </div>`,
      fileName: `${date}-qps-cost-quote`,
      directory: 'Documents',
    };
    try {
      let file = await RNHTMLtoPDF.convert(options);
      alert('Saved successfully to ' + file.filePath);
    } catch (err) {
      console.log(err);
    }
  };
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
              marginTop: 7,
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
        <Text style={{marginTop: 7, marginBottom: 7, fontWeight: '100'}}>
          Our Offer For You:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#E0DFDF',
            paddingBottom: 7,
            marginBottom: 12,
          }}>
          <View>
            <Text
              style={{
                marginTop: 7,
                marginBottom: 2,
                fontWeight: '700',
              }}>
              Production Cost
            </Text>
            <Text
              style={{
                marginTop: 7,
                marginBottom: 2,
                fontWeight: '700',
              }}>
              Design Service
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 7,
                marginBottom: 2,
                fontWeight: '700',
              }}>
              ₦ {price}
            </Text>
            <Text
              style={{
                marginTop: 7,
                marginBottom: 2,
                fontWeight: '700',
              }}>
              {design === 0 ? `₦  ${priceSetting && priceSetting.design}` : '-'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text
            style={{
              marginTop: 7,
              marginBottom: 2,
              fontWeight: '700',
            }}>
            Total
          </Text>
          <Text
            style={{
              marginTop: 7,
              marginBottom: 2,
              fontWeight: '700',
            }}>
            {design === 1 && `₦ ${price}`}
            {design === 0 &&
              price &&
              priceSetting &&
              priceSetting.design &&
              `₦ ${price + priceSetting.design}`}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <Button
            style={[styles.startButton, {marginBottom: 7, borderRadius: 8}]}
            onPress={() => {
              toggleModal();
              navigation.navigate('ProductView', {
                productId: priceSetting && priceSetting.productId,
                categoryId: priceSetting && priceSetting.category,
                hasCategory: null,
              });
            }}>
            <Text style={styles.startButtonText}>Proceed to Order</Text>
          </Button>
        </View>
        <Button block transparent onPress={askPermission}>
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
  user,
  load,
  productPrice,
  getPrice,
  isUserLoggedIn,
  requestQuoteData,
  filterProduct,
  requestQuote,
  requestQuoteLoader,
  route = {
    params: {data: null},
  },
  err,
}) => {
  const {data} = route.params;
  let radio_props = [{label: 'No ', value: 0}, {label: 'Yes', value: 1}];
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [product, setProduct] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [wantToPrint, setWantToPrint] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);
  const [design, setDesign] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);
  const [category, setCategory] = useState('');
  const [price, setPrice] = React.useState(0);
  const [priceSetting, setPriceSetting] = React.useState(0);
  const [requestQuoteToggle, setRequestQuote] = React.useState(false);
  const [tempStor, setTempStor] = React.useState('');
  const [pemStor, setPemStor] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [business, setBusiness] = React.useState('Business / Organization');

  const [active, handleActive] = React.useState(data ? 2 : 1);
  React.useEffect(() => {
    if (category) {
      getAllProduct({page: 1, category});
    }
  }, [category, getAllProduct]);
  React.useEffect(() => {
    if (err && err.message) {
      if (typeof err === 'string') {
        Toast.show(err, {duration: 2000});
      } else if (typeof err.message === 'string') {
        Toast.show(err.message, {duration: 2000});
      } else if (err.message._message) {
        Toast.show(err.message._message, {duration: 2000});
      } else {
        Toast.show(err.message.message, {duration: 2000});
      }
    }
  }, [err]);
  React.useEffect(() => {
    if (product) {
      getPrice({productId: product});
      setQuantity('');
    }
  }, [getPrice, product]);
  React.useEffect(() => {
    if (productPrice && productPrice.data) {
      if (
        productPrice &&
        productPrice.data &&
        productPrice.data[0] &&
        productPrice.data[0].unit
      ) {
        setRequestQuote(false);
        setPrice(Pricer(quantity, productPrice.data));
        setPriceSetting(getAmount(quantity, productPrice.data).priceSetting);
      } else if (productPrice && productPrice.data) {
        setRequestQuote(true);
      }
    }
  }, [productPrice, quantity]);
  React.useEffect(() => {
    // let toast;
    if (requestQuoteLoader) {
      // toast = Toast.showLoading('Loading...');
    } else {
      // Toast.hide(toast);
      if (requestQuoteData) {
        toggleRequestQuoteModal();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestQuoteLoader]);
  React.useEffect(() => {
    async function done(params) {
      const veri = await getData('verified');
      if (veri && !isUserLoggedIn) {
        setPhoneNumber(veri);
        setName('');
        setEmail('');
        setDesign([]);
        setCategory('');
        setQuantity('');
        setProduct('');
        setAddress('');
        setBusiness('Business / Organization');
      }
    }
    done();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isUserLoggedIn]);
  React.useEffect(() => {
    if (data) {
      handleActive(2);
    } else {
      handleActive(1);
    }

    if (isUserLoggedIn) {
      const {
        data: {firstName, surname, email, phone},
      } = user;
      setName(`${surname} ${firstName}`);
      setEmail(email);
      setPhoneNumber(phone);
      setDesign([]);
      setCategory('');
      setQuantity('');
      setProduct('');
      setAddress('');
      setBusiness('Business / Organization');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isUserLoggedIn]);

  const handleClick = active => {
    handleActive(active);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const [isRequestQuoteModalVisible, setRequestQuoteModalVisible] = useState(
    false,
  );

  const toggleModal = () => {
    let q =
      product &&
      productPrice &&
      productPrice.data &&
      productPrice.data
        .map(i => i.unit)
        .sort(function(a, b) {
          return a - b;
        })[0];
    if (quantity > 0) {
      if (q > quantity) {
        // eslint-disable-next-line no-alert
        alert(
          'Quantity Specified is lesser than the minimum quantity, which is ' +
            q,
        );
      } else {
        setModalVisible(!isModalVisible);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Quantity not specified.');
    }
  };

  const toggleRequestQuoteModal = () => {
    setRequestQuoteModalVisible(!isRequestQuoteModalVisible);
  };

  const [delivery, handleDelivery] = useState(0);
  React.useEffect(() => {
    listOfCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [setRequestLoad, setRequestLoader] = useState(false);
  const handleRequestQuote = async () => {
    setRequestLoader(true);
    const res = await uploader(design);
    const data = {
      name: name,
      email: email.trim(),
      // quantity: quantity,
      details: wantToPrint,
      phone: phoneNumber,
      business,
      address,
      design: res,
    };
    await requestQuote(data);
    setRequestLoader(false);
  };

  const handleCategoryChange = value => {
    setProduct('');
    setQuantity('');
    setCategory(value.value);
    getAllProduct({page: 1, category: value && value[0] && value[0].value});
  };

  const [size, setSize] = useState('');
  const handleSize = value => {
    setSize(value && value[0] && value[0].value);
  };
  React.useEffect(() => {
    if (productPrice && productPrice.data) {
      if (productPrice.data.length === 1) {
        setSize('DEFAULT');
      }
      if (
        productPrice &&
        productPrice.data &&
        productPrice.data[0] &&
        productPrice.data[0].unit
      ) {
        setRequestQuote(false);
        setPrice(Pricer(quantity, productPrice.data, design, size));
        setPriceSetting(
          getAmount(quantity, productPrice.data, size).priceSetting,
        );
      } else if (productPrice && productPrice.data) {
        setRequestQuote(true);
      }
    }
  }, [productPrice, quantity, design, size]);

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
                    label: item.name.replace('amp;', ''),
                    value: item.id,
                  }))
                }
                placeholder="Select Product Category"
                updator={handleCategoryChange}
              />
              <SelectItem
                data={
                  filterProduct &&
                  filterProduct.map(item => ({
                    label: item.name,
                    value: item.id,
                  }))
                }
                placeholder="Select a product"
                defaultValue={product}
                updator={value => {
                  setProduct(value && value[0] && value[0].value);
                  setTempStor(value && value[0] && value[0].label);
                }}
              />
              {!requestQuoteToggle && (
                <React.Fragment>
                  <InputItem
                    defaultValue={quantity}
                    updator={e => setQuantity(e)}
                    placeholder="Quantity?"
                    keyboardType={'number-pad'}
                  />
                  <Text
                    style={[
                      {color: '#333333', fontStyle: 'italic'},
                      {marginTop: -5, marginBottom: -10, fontSize: 12},
                    ]}>
                    {product &&
                      `${productPrice &&
                        productPrice.data &&
                        productPrice.data
                          .map(i => i.unit)
                          .sort(function(a, b) {
                            return a - b;
                          })[0]} Unit is the minium quantity to order`}
                  </Text>
                  {productPrice &&
                    productPrice.data &&
                    productPrice.data.length > 1 && (
                      <View>
                        <SelectItem
                          data={
                            productPrice &&
                            productPrice.data &&
                            productPrice.data.length !== 0 &&
                            productPrice.data.map(item => ({
                              label: item.size,
                              value: item.size,
                            }))
                          }
                          placeholder="Select Specifications"
                          updator={handleSize}
                        />
                      </View>
                    )}
                  <View
                    style={{
                      width: width * 0.9,
                      backgroundColor: '#ffffff',
                      fontSize: 13,
                      marginTop: 30,
                      padding: 13,
                    }}>
                    <Text style={{color: '#E0DFDF'}}>
                      Do you have a finish design?*
                    </Text>
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
                </React.Fragment>
              )}
            </View>
            {!requestQuoteToggle ? (
              <React.Fragment>
                <Button style={styles.startButton} onPress={toggleModal}>
                  <Text style={styles.startButtonText}>Calculate</Text>
                </Button>
              </React.Fragment>
            ) : (
              <Button
                style={[styles.startButton, {marginTop: 20, marginBottom: 10}]}
                onPress={() => {
                  handleActive(2);
                  setRequestQuote(false);
                  setPemStor(tempStor);
                }}>
                <Text style={styles.startButtonText}>Request Quote</Text>
              </Button>
            )}
            {isModalVisible && (
              <QuoteModal
                toggleModal={toggleModal}
                isModalVisible={isModalVisible}
                price={price}
                product={product}
                navigation={navigation}
                priceSetting={priceSetting}
                design={delivery}
              />
            )}
          </React.Fragment>
        )}
        {active === 2 && (
          <React.Fragment>
            <View style={styles.itemBottom}>
              <InputItem
                defaultValue={name && name.trim()}
                updator={e => setName(e)}
                placeholder="Name"
              />
              <InputItem
                defaultValue={email && email.trim()}
                updator={e => setEmail(e)}
                placeholder="Email"
                type="email"
              />
              <InputItem
                defaultValue={phoneNumber}
                updator={e => setPhoneNumber(e)}
                placeholder="Phone Number"
              />
              <InputItem
                defaultValue={business}
                updator={e => setBusiness(e)}
                placeholder="Business / Organization*"
              />
              <InputItem
                updator={e => setWantToPrint(e)}
                defaultValue={pemStor}
                multiline={true}
                numberOfLines={8}
                placeholder={
                  'What do you want to print?\nPlease specify the items you want us to print and quantity for each\ne.g Box: 300 Flyer, 20 Diary and 600 Business Cards'
                }
              />
              <InputItem
                updator={e => setAddress(e)}
                multiline={true}
                numberOfLines={3}
                placeholder={
                  'Where would you want your order delivered?*\ne.g 8b, Kingsley Emu Str, Lekki Phase 1'
                }
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.uploadText,
                    {marginTop: 15, marginBottom: -10},
                  ]}>
                  {design &&
                    design.length !== 0 &&
                    `${design && design.length} Uploaded Custom Design`}
                </Text>
                {design && design.length !== 0 && (
                  <Icon
                    name="ios-close-circle"
                    type="Ionicons"
                    style={{marginTop: 15, color: '#989797'}}
                    onPress={() => {
                      setDesign([]);
                    }}
                  />
                )}
              </View>
              <View style={styles.uploadConc}>
                <TouchableOpacity
                  style={styles.upload}
                  onPress={async () => {
                    setUploading(true);
                    const res = await uploadFiles();
                    setDesign(res);
                    setUploading(false);
                  }}>
                  {uploading ? (
                    <React.Fragment>
                      <ActivityIndicator
                        key="2"
                        size="small"
                        color={'#989797'}
                      />
                      <Text style={styles.uploadText}>
                        Uploading Designs ...
                      </Text>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Upload />
                      <Text
                        style={[
                          styles.uploadText,
                          {justifyContent: 'center', textAlign: 'center'},
                        ]}>
                        {
                          'Do you already have a print-ready design?*\nUpload Custom Design here'
                        }
                      </Text>
                    </React.Fragment>
                  )}
                </TouchableOpacity>
              </View>
              {setRequestLoad || requestQuoteLoader ? (
                <View
                  style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                  <ActivityIndicator color={'#228BC4'} />
                </View>
              ) : (
                <Button
                  disabled={requestQuoteLoader}
                  style={styles.startButton}
                  onPress={handleRequestQuote}>
                  <Text style={styles.startButtonText}>Request Quote</Text>
                </Button>
              )}
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
  user: state.auth.user,
  isUserLoggedIn: state.auth.isUserLoggedIn,
  filterProduct: state.product.filterProduct.data,
  productPrice: state.product.productPrice,
  requestQuoteData: state.quote.requestQuote,
  requestQuoteLoader: state.quote.loading,
  err: state.quote.error && state.quote.error.data,
});

const mapDispatchToProps = dispatch => ({
  getAllProduct: data => dispatch(Actions.Product.GetFilteredProduct(data)),
  listOfCategories: () => dispatch(Actions.Product.GetListOfCategory()),
  requestQuote: data => dispatch(Actions.Quote.RequestQuote(data)),
  getPrice: data => dispatch(Actions.Product.GetProductPrice(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CostQuoteScreen);
