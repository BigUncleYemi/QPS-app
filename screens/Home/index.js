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
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Picker,
  Right,
  Container,
  Input,
  Item,
  Title,
} from 'native-base';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import {Filter} from '../../assets/images/index';
import {QuickCalculator} from '../../assets/images';
import {styles} from './style';
import {removePriceHtml, nameProduct} from '../../utils/helperFunc';
import CachedImage from 'react-native-image-cache-wrapper';

const {width, height} = Dimensions.get('window');

const HomeScreen = props => {
  const [category, setCategory] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [page, setPage] = useState(1);
  const {
    navigation,
    getAllProduct,
    allProduct,
    listOfCategories,
    allListOfCategories,
    load,
    loading,
  } = props;
  React.useEffect(() => {
    listOfCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    getAllProduct({page, category});
  }, [category, getAllProduct, page]);
  const handleSelected = value => {
    setCategory(value);
    setPage(1);
  };
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) =>
    layoutMeasurement.height + contentOffset.y >= contentSize.height - 45;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greet}>Hello there 😊</Text>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <Button
          iconLeft
          bordered
          danger
          onPress={() => navigation.navigate('Cost Quote', {data: null})}
          style={styles.quickPrintButton}>
          <QuickCalculator />
          <View
            style={{
              marginLeft: 10,
            }}>
            <Text
              numberOfLines={2}
              style={[
                styles.quickPrintButtonText,
                {
                  marginBottom: -3,
                },
              ]}>
              Cost{' '}
            </Text>
            <Text
              style={[
                styles.quickPrintButtonText,
                {
                  marginTop: -3,
                },
              ]}>
              Calculator
            </Text>
          </View>
        </Button>
      </View>
      <View style={[styles.filter, {zIndex: 999999}]}>
        <Picker
          renderHeader={backAction => (
            <>
              <Header>
                <Left>
                  <Button transparent onPress={backAction}>
                    <Icon name="arrow-back" style={styles.selectBack} />
                  </Button>
                </Left>
                <Body style={{flex: 3}}>
                  <Title style={{color: '#000000'}}>Select Categories</Title>
                </Body>
                <Right />
              </Header>
              <Header searchBar rounded>
                <Item style={{marginTop: 0}}>
                  <Icon name="ios-search" />
                  <Input
                    onChangeText={t => setSearchCategory(t)}
                    value={searchCategory}
                    placeholder="Search Category"
                  />
                </Item>
              </Header>
            </>
          )}
          mode="dropdown"
          iosIcon={
            <Icon
              name="angle-down"
              type="FontAwesome5"
              style={{color: '#228BC4'}}
            />
          }
          selectedValue={category}
          style={{
            width: width * 0.88,
            backgroundColor: '#ffffff',
            height: 45,
            zIndex: 999999,
          }}
          onValueChange={handleSelected}>
          <Picker.Item label={'All'} value={''} />
          {allListOfCategories &&
            allListOfCategories
              .filter(i =>
                i.name.toLowerCase().includes(searchCategory.toLowerCase()),
              )
              .map((item, index) => (
                <Picker.Item
                  style={{zIndex: 999999}}
                  key={index}
                  label={item.name.replace('amp;', '')}
                  value={item.id}
                />
              ))}
          <Picker.Item label={'Other'} value={'Other'} />
        </Picker>
        {/* <Button
          iconLeft
          style={{
            width: width * 0.15,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0,
            borderColor: '#fff',
            elevation: 0,
          }}>
          <Filter />
        </Button> */}
      </View>
      {allProduct && allProduct.length !== 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && load) {
              setPage(page + 1);
            }
          }}>
          <View style={styles.scrollView}>
            {allProduct &&
              allProduct.map((item, index) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductView', {
                      productId: item.id,
                      categoryId:
                        item.categories &&
                        item.categories[0] &&
                        item.categories[0].id,
                      hasCategory: category,
                    })
                  }
                  key={index}
                  style={styles.ItemConc}>
                  <CachedImage
                    resizeMode="contain"
                    style={styles.itemImg}
                    source={{
                      uri: `${(item.images &&
                        item.images[0] &&
                        item.images[0].src) ||
                        'https://via.placeholder.com/150.png'}`,
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
              ))}
          </View>
          {load &&
            (!loading ? (
              <TouchableOpacity
                onPress={e => setPage(page + 1)}
                style={{
                  width: '100%',
                  paddingTop: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  paddingBottom: 10,
                }}>
                <Text style={{textAlign: 'center', color: '#228BC4'}}>
                  load more
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  height: '5%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator key="2" size="large" color={'#055B89'} />
              </View>
            ))}
        </ScrollView>
      ) : (
        <View
          style={{
            height: height,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <ActivityIndicator key="2" size="large" color={'#055B89'} />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  allProduct: state.product.allProduct.data,
  loading: state.product.loading,
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
)(HomeScreen);
