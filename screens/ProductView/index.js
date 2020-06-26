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
import React, {useState} from 'react';
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
} from 'react-native';
import {styles} from './style';
import {Button, Thumbnail} from 'native-base';
import SelectItem from '../../components/SelectItem';
import {Upload} from '../../assets/images';
import StarRating from 'react-native-star-rating';
import {CustomCachedImage} from 'react-native-img-cache';
import {
  extractDesc,
  object2Array,
  nameProduct,
  removePriceHtml,
  storeData,
  getData,
} from '../../utils/helperFunc';

const SpecSection = ({product, setPrice}) => {
  const [qua, setQua] = React.useState([]);
  React.useEffect(() => {
    let data = product;
    let obj1 =
      data &&
      data.meta_data &&
      data.meta_data.filter(item => item.key === '_fixed_price_rules');
    let filObj1 = obj1 && obj1[0] && obj1[0].value;
    let qua = object2Array(filObj1) || [];
    setQua(qua);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <SelectItem
        data={qua.map(item => ({label: item[0].toString(), value: item[1]}))}
        placeholder="Select Desired Quantity"
        updator={setPrice}
      />
    </View>
  );
}; // done

const ProductTop = ({data}) => {
  return (
    <View>
      <CustomCachedImage
        component={Thumbnail}
        square
        large
        style={styles.largeImg}
        source={{
          uri: data && data.images && data.images[0] && data.images[0].src,
        }}
      />
      <View style={styles.largeImgDesc}>
        <Text style={styles.largeImgDescPrice}>{data && data.price_html}</Text>
        <Text style={styles.largeImgDescText}>
          {data && data.short_description && extractDesc(data.description)}
        </Text>
      </View>
      <View style={styles.smallImgCon}>
        {data &&
          data.images &&
          data.images
            .splice(0, 4)
            .map((item, index) => (
              <CustomCachedImage
                component={Thumbnail}
                key={index}
                square
                small
                style={styles.smallImg}
                source={{uri: item.src}}
              />
            ))}
      </View>
    </View>
  );
};
//done

const UploadImage = () => (
  <View style={styles.uploadConc}>
    <TouchableOpacity style={styles.upload}>
      <Upload />
      <Text style={styles.uploadText}>Upload Custom Design</Text>
    </TouchableOpacity>
  </View>
);

const PriceCard = ({price}) => (
  <React.Fragment>
    <View style={styles.TotalPrice}>
      <Text style={styles.TotalPriceTop}>Total to pay for this Order</Text>
      <Text style={styles.TotalPriceBottom}>₦ {price}</Text>
    </View>
    <Text style={styles.TotalPriceHint}>
      Please note that if no design has been uploaded, our system will
      automatically charge you for design services
    </Text>
    {/* <Button style={[styles.startButton, {marginBottom: 10, borderRadius: 8}]}>
      <Text style={styles.startButtonText}>Proceed to Order</Text>
    </Button> */}
  </React.Fragment>
); // done

const Review = ({review, setReview, submitReview}) => {
  const handleReview = () => {
    submitReview(review);
  };
  return (
    <View style={[styles.ReviewConc, {marginTop: -15}]}>
      <Text style={styles.ReviewTitle}>Ratings and Reviews</Text>
      <Text style={styles.ReviewText}>
        There are no reviews yet, Be the first to review “A4 Notepads”
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

const Ratings = ({rate, handleRate}) => {
  return (
    <View style={styles.ReviewConc}>
      <Text style={styles.ReviewTitle}>Rate this Product</Text>
      <View style={styles.RateConc}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 54, fontWeight: '700'}}>{rate}</Text>
          <Text
            style={{
              marginTop: -20,
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
            halfStarEnabled={true}
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
            10 Ratings
          </Text>
        </View>
      </View>
    </View>
  );
}; // done

const RelatedProduct = ({relatedProduct, navigation, id}) => {
  return (
    <View style={styles.ReviewConc}>
      <Text style={styles.ReviewTitle}>Related products</Text>
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
      {!isInCart ? (
        <Button
          style={styles.startButton}
          onPress={() => handleAddToCart(data)}>
          <Text style={styles.startButtonText}>Add To Cart</Text>
        </Button>
      ) : (
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
                marginBottom: 20,
                paddingBottom: 10,
                fontWeight: '700',
              }}>
              Continue Shopping
            </Text>
          </Button>
        </React.Fragment>
      )}
    </View>
  );
}; // done

function ProductViewScreen(props) {
  const {
    staticProduct,
    navigation,
    getAllProduct,
    getAProduct,
    Product,
    relatedProduct,
    postReview,
  } = props;
  const {productId, categoryId} = props.route.params;
  const [price, setPrice] = React.useState('0');
  // const [rating, handleRate] = useState(0);
  // const [review, setReview] = useState('');
  // const [isInCart, setInCart] = useState(false);

  React.useEffect(() => {
    getAllProduct({page: 1, category: categoryId});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getAProduct({productId});
  }, [getAProduct, productId]);

  // React.useEffect(() => {
  //   const cart = getData('QPScart');
  //   if (cart[productId]) {
  //     setInCart(true);
  //   } else {
  //     setInCart(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleAddToCart = () => {
  //   const id = Product.id;
  //   let data = getData('QPScart');
  //   data[id] = {...Product, quantity: 1};
  //   storeData('QPScart', data);
  //   setInCart(true);
  // };

  // const submitReview = review => {
  //   postReview({
  //     id: productId,
  //     review,
  //     reviewer: 'John Doe',
  //     reviewer_email: 'johndoe@example.com',
  //     rating: rating.toString(),
  //   });
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {console.log(Product)}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <React.Fragment>
          <View style={styles.header}>
            <Text style={styles.welcome}>{Product && Product.name}</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <ProductTop data={staticProduct} />
            <SpecSection product={Product} setPrice={setPrice} />
            <UploadImage />
            {/* <PriceCard price={price} />
            <CartFunc
              handleAddToCart={handleAddToCart}
              navigation={navigation}
              data={Product}
              isInCart={isInCart}
            />
            <Review
              review={review}
              setReview={setReview}
              submitReview={submitReview}
            />
            <Ratings
              rate={rating}
              handleRate={rate => {
                handleRate(rate);
                submitReview();
              }}
            />
            <RelatedProduct
              navigation={navigation}
              relatedProduct={relatedProduct}
              id={productId}
            /> */}
          </ScrollView>
        </React.Fragment>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => ({
  relatedProduct: state.product.allProduct.data,
  Product: state.product.productData.data,
  staticProduct: state.product.productData.data,
  // productReview: state.product.productReviewCont,
});

const mapDispatchToProps = dispatch => ({
  postReview: data => dispatch(Actions.Product.PostProductReview(data)),
  getAProduct: data => dispatch(Actions.Product.GetAProduct(data)),
  getAllProduct: data => dispatch(Actions.Product.GetAllProduct(data)),
  getReview: data => dispatch(Actions.Product.GetProductReview(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductViewScreen);
