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
import React, {useState, memo} from 'react';
import {Image} from 'react-native-elements';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import {Button, Thumbnail, Icon} from 'native-base';
import SelectItem from '../../components/SelectItem';
import {Upload} from '../../assets/images';
import InputItem from '../../components/InputItem';
import StarRating from 'react-native-star-rating';
import {CustomCachedImage} from 'react-native-img-cache';
import {
  extractDesc,
  object2Array,
  nameProduct,
  removePriceHtml,
  uploader,
  getData,
  uploadFiles,
  Pricer,
  getAmount,
  useDebounce,
} from '../../utils/helperFunc';
import {get} from '../../utils/Api';

const ProductTop = memo(({data, imgSrc}) => {
  return (
    <View>
      <CustomCachedImage
        component={Image}
        PlaceholderContent={<ActivityIndicator />}
        square
        ref={imgSrc}
        large
        style={styles.largeImg}
        source={{
          uri: `${data && data.images && data.images[0] && data.images[0].src}`,
        }}
      />
      <View style={styles.largeImgDesc}>
        <Text style={styles.largeImgDescPrice}>{data && data.price_html}</Text>
        <Text style={styles.largeImgDescText}>
          {data &&
            data.short_description &&
            extractDesc(data.short_description)}
        </Text>
      </View>
      <View style={styles.smallImgCon}>
        {data &&
          data.images &&
          data.images.splice(0, 4).map((item, index) => (
            <CustomCachedImage
              component={Thumbnail}
              key={index}
              square
              small
              style={styles.smallImg}
              source={{
                uri: `${item.src}`,
              }}
            />
          ))}
      </View>
    </View>
  );
});
//done

const Review = ({review, setReview, submitReview, name}) => {
  const handleReview = () => {
    submitReview(review);
  };
  return (
    <View style={[styles.ReviewConc]}>
      <Text style={styles.ReviewTitle}>Ratings and reviews</Text>
      <Text style={styles.ReviewText}>
        There are no reviews yet, Be the first to review “{name}”
      </Text>
      <View>
        <TextInput
          style={styles.ReviewTextInput}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => setReview(text)}
          value={review}
          placeholder="Leave Your review here"
        />
        <Button
          onPress={() => handleReview()}
          style={[styles.reviewButton, {marginBottom: 10, borderRadius: 6}]}>
          <Text style={styles.startButtonText}>Submit</Text>
        </Button>
      </View>
    </View>
  );
}; // done

const Ratings = ({rate, handleRate, productReview}) => {
  return (
    <View style={styles.ReviewConc}>
      <Text style={styles.ReviewTitle}>Rate this Product</Text>
      <View style={styles.RateConc}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 54, fontWeight: '700'}}>{rate}</Text>
          <Text
            style={{
              // marginTop: -10,
              fontWeight: '700',
              fontSize: 12,
              color: '#989797',
            }}>
            Out of 5
          </Text>
        </View>
        <View style={{width: '70%', marginTop: 20}}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={rate}
            // starStyle={{color: '#fad95e'}}
            fullStarColor={'#fad95e'}
            halfStarColor={'#fad95e'}
            selectedStar={rating => handleRate(rating)}
            containerStyle={{justifyContent: 'space-between', width: '100%'}}
          />
          <Text
            style={{
              textAlign: 'right',
              paddingTop: 10,
              fontWeight: '700',
              fontSize: 12,
              color: '#989797',
            }}>
            {(productReview &&
              productReview.data &&
              productReview.data.length) ||
              '0'}{' '}
            Ratings
          </Text>
        </View>
      </View>
    </View>
  );
}; // done

const RelatedProduct = ({relatedProduct, navigation, id}) => {
  return (
    <View style={styles.ReviewConc}>
      <Text style={styles.ReviewTitle}>
        {relatedProduct && relatedProduct.length > 1 ? 'Related products' : ''}
      </Text>
      {relatedProduct &&
        relatedProduct
          .filter(item => item.id !== id)
          .splice(0, 4)
          .map((item, index) => (
            <View key={index} style={styles.cardTop}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductView', {
                    productId: item.id,
                    categoryId:
                      item.categories &&
                      item.categories[0] &&
                      item.categories[0].id,
                  })
                }
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CustomCachedImage
                  component={Thumbnail}
                  square
                  large
                  style={{borderRadius: 10, backgroundColor: '#c4946f'}}
                  source={{
                    uri: item.images && item.images[0] && item.images[0].src,
                  }}
                />
                <View style={styles.itemProdConc}>
                  <Text style={styles.itemProdTitle}>
                    {nameProduct(item && item.name)}
                  </Text>
                  <Text style={styles.itemProdSubTitle}>
                    {removePriceHtml(item.price_html)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
    </View>
  );
}; // done

const CartFunc = ({handleAddToCart, navigation, data, isInCart}) => {
  return (
    <View style={styles.cartFunc}>
      <React.Fragment>
        <Button
          onPress={() => navigation.navigate('Activities')}
          style={styles.cartFuncButton}>
          <Text style={styles.startButtonText}>View Cart</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Home')} block transparent>
          <Text
            style={{
              color: '#228BC4',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Continue Shopping
          </Text>
        </Button>
      </React.Fragment>
    </View>
  );
}; // done

const AddToCartButton = memo(({handleAddToCart, data}) => {
  return (
    <Button style={styles.startButton} onPress={() => handleAddToCart()}>
      <Text style={styles.startButtonText}>Add To Cart</Text>
    </Button>
  );
});

const FirstPart = memo(
  ({
    quantity,
    handleQuantity,
    productPrice,
    design,
    setUploading,
    setDesign,
    uploading,
    price,
    handleAddToCart,
    Product,
    handleSize,
    adding,
  }) => {
    return (
      <React.Fragment>
        <View>
          <InputItem
            defaultValue={quantity}
            updator={e => handleQuantity(e)}
            placeholder="Quantity?"
            keyboardType={'number-pad'}
          />
          <Text
            style={[
              {color: '#333333', fontStyle: 'italic'},
              {marginTop: -5, marginBottom: -10, fontSize: 12},
            ]}>
            {`${productPrice &&
              productPrice.data &&
              productPrice.data
                .map(i => i.unit)
                .sort(function(a, b) {
                  return a - b;
                })[0]} Unit is the Minimum quantity to order`}
          </Text>
        </View>
        {productPrice && productPrice.data && productPrice.data.length > 1 && (
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.uploadText, {marginTop: 15, marginBottom: -10}]}>
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
                <ActivityIndicator key="2" size="small" color={'#989797'} />
                <Text style={styles.uploadText}>Uploading Designs ...</Text>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Upload />
                <Text style={styles.uploadText}>Upload Custom Design</Text>
              </React.Fragment>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.TotalPrice}>
          <Text style={styles.TotalPriceTop}>Total to pay for this Order</Text>
          <Text style={styles.TotalPriceBottom}>
            {price
              ? `${price
                  .toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                    minimumFractionDigits: 2,
                  })
                  .replace('NGN', '₦')}`
              : '₦ 0'}
          </Text>
        </View>
        <Text style={styles.TotalPriceHint}>
          Please note that if no design has been uploaded, our system will
          automatically charge you for design services
        </Text>
        {adding ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <ActivityIndicator color={'#228BC4'} />
          </View>
        ) : (
          <AddToCartButton
            data={Product}
            handleAddToCart={price > 0 ? handleAddToCart : () => {}}
          />
        )}
      </React.Fragment>
    );
  },
);

function ProductViewScreen(props) {
  const {
    loading,
    navigation,
    productReview,
    getAProduct,
    Product,
    relatedProduct,
    postReview,
    productPrice,
    getPrice,
    cart,
    getCart,
    pricing,
    postCart,
    user,
    getReview,
  } = props;
  const {productId, categoryId, hasCategory} = props.route.params;
  const [price, setPrice] = useState(0);
  const [isInCart, setInCart] = useState(false);
  const [rating, handleRate] = useState(0);
  const [quantity, handleQua] = useState(0);
  const [review, setReview] = useState('');
  const [size, setSize] = useState('');
  const [design, setDesign] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);
  const [priceSetting, setPriceSetting] = React.useState(0);
  const [adding, setAdding] = React.useState(false);

  React.useEffect(() => {
    getCart();
    getReview({productId});
  }, [getCart, getReview, productId]);
  React.useEffect(() => {
    if (productPrice && productPrice.data) {
      if (productPrice.data.length === 1) {
        setSize('DEFAULT');
      }
      if (
        productPrice.data &&
        productPrice.data[0] &&
        productPrice.data[0].unit
      ) {
        setPrice(Pricer(quantity, productPrice.data, design, size));
        setPriceSetting(
          getAmount(quantity, productPrice.data, size).priceSetting,
        );
      }
    }
  }, [productPrice, quantity, design, size]);
  React.useEffect(() => {
    getAProduct({productId, page: 1, category: categoryId});
    getPrice({productId});
  }, [categoryId, getAProduct, getPrice, productId]);
  React.useEffect(() => {
    if (cart && cart[productId]) {
      setInCart(true);
    } else if (
      cart &&
      cart.length > 0 &&
      cart.filter(i => i.productId === productId).length > 0
    ) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cart, getCart, productId]);
  React.useEffect(() => {
    setReview('');
  }, [productReview]);
  const debouncedRatings = useDebounce(rating, 1000);
  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  React.useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedRatings) {
      if (review) {
        postReview({
          id: productId,
          review,
          reviewer: user
            ? `${user && user.data && user.data.firstName} ${user &&
                user.data &&
                user.data.surname}`
            : 'anonymous',
          reviewer_email:
            (user && user.data && user.data.email) || 'anonymous@anonymous.com',
          rating: rating.toString(),
        });
        setReview('');
        handleRate(0);
      } else {
        Toast.show('Please enter a review message', {duration: 2000});
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedRatings]);

  const submitReview = () => {
    postReview({
      id: productId,
      review,
      reviewer: user
        ? `${user && user.data && user.data.firstName} ${user &&
            user.data &&
            user.data.surname}`
        : 'anonymous',
      reviewer_email:
        (user && user.data && user.data.email) || 'anonymous@anonymous.com',
      rating: rating.toString(),
    });
    setReview('');
    handleRate(0);
    Toast.show('Review sent', {duration: 2000});
  };

  const handleAddToCart = async () => {
    setAdding(true);
    try {
      const res = await get(`/products/${productId}`);
      const des = await uploader(design);
      let data = {
        productId,
        quantity,
        price,
        design: des,
        setting: priceSetting,
        priceSet: productPrice && productPrice.data,
        Product: {
          img: res.data.data.images,
          size,
          name: Product && Product.name,
        },
      };
      postCart(data);
      setAdding(false);
    } catch (er) {
      console.log(er);
      setAdding(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const handleQuantity = value => {
    handleQua(value);
  };

  const handleSize = value => {
    setSize(value && value[0] && value[0].value);
  };

  const handleDeleteDesign = () => {
    setDesign([]);
  };

  return (
    <React.Fragment>
      {loading && (
        <View
          style={{
            height: '75%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator key="2" size="large" color={'#055B89'} />
        </View>
      )}
      {!loading && (
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <React.Fragment>
              <View style={styles.header}>
                <Text style={styles.welcome}>{Product && Product.name}</Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginTop: 10}}>
                <ProductTop data={Product} />
                {productPrice &&
                productPrice.data &&
                productPrice.data.length !== 0 &&
                productPrice.data[0] &&
                productPrice.data[0].price !== null ? (
                  !isInCart ? (
                    <FirstPart
                      {...{
                        quantity,
                        handleQuantity,
                        productPrice,
                        design,
                        setUploading,
                        setDesign,
                        uploading,
                        price,
                        handleAddToCart,
                        Product,
                        handleSize,
                        handleDeleteDesign,
                        adding,
                      }}
                    />
                  ) : (
                    <CartFunc
                      handleAddToCart={handleAddToCart}
                      navigation={navigation}
                      data={Product}
                      isInCart={isInCart}
                    />
                  )
                ) : (
                  !pricing && (
                    <Button
                      style={[
                        styles.startButton,
                        {marginTop: 20, marginBottom: 10},
                      ]}
                      onPress={() =>
                        navigation.navigate('Cost Quote', {Product})
                      }>
                      <Text style={styles.startButtonText}>Request Quote</Text>
                    </Button>
                  )
                )}
                <Review
                  review={review}
                  setReview={setReview}
                  submitReview={submitReview}
                  name={Product && Product.name}
                />
                <Ratings
                  rate={rating}
                  productReview={productReview}
                  handleRate={rate => {
                    handleRate(rate);
                  }}
                />
                <RelatedProduct
                  navigation={navigation}
                  relatedProduct={relatedProduct}
                  id={productId}
                />
              </ScrollView>
            </React.Fragment>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  relatedProduct: state.product.relatedProduct.data,
  Product: state.product.productData.data,
  loading: state.product.productLoader,
  staticProduct: state.product.productData.data,
  productPrice: state.product.productPrice,
  cart: state.cart.cart,
  user: state.auth.user,
  productReview: state.product.productReviewCont,
});

const mapDispatchToProps = dispatch => ({
  postReview: data => dispatch(Actions.Product.PostProductReview(data)),
  getAProduct: data => dispatch(Actions.Product.GetAProduct(data)),
  getAllProduct: data => dispatch(Actions.Product.GetAllProduct(data)),
  getReview: data => dispatch(Actions.Product.GetProductReview(data)),
  getPrice: data => dispatch(Actions.Product.GetProductPrice(data)),
  getCart: () => dispatch(Actions.Cart.GetAllCartItem()),
  postCart: data => dispatch(Actions.Cart.AddToCart(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(ProductViewScreen));
