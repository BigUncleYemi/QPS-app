import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    fontWeight: '700',
  },
  largeImg: {
    width: width * 0.87,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  largeImgDesc: {
    backgroundColor: '#ffffff',
    marginTop: -50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  largeImgDescPrice: {
    fontWeight: '700',
    fontSize: 12,
  },
  largeImgDescText: {
    fontWeight: '100',
    fontSize: 10,
    color: '#989797',
  },
  smallImgCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  smallImg: {
    width: '22.5%',
    height: 77,
    borderRadius: 10,
  },
  uploadConc: {
    marginTop: 20,
    marginBottom: 10,
  },
  upload: {
    width: '100%',
    backgroundColor: '#E0DFDF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  uploadText: {
    marginTop: 10,
    color: '#989797',
  },
  TotalPrice: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#222222',
    borderRadius: 10,
    padding: 15,
  },
  TotalPriceTop: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 12,
  },
  TotalPriceBottom: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 28,
  },
  TotalPriceHint: {
    color: '#989797',
    fontSize: 10,
    marginBottom: 10,
  },
  startButton: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#228BC4',
    alignItems: 'center',
    marginBottom: 40,
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    fontSize: 19,
  },
  reviewButton: {
    marginTop: -5,
    backgroundColor: '#222222',
    alignItems: 'center',
    marginBottom: 40,
  },
  ReviewConc: {
    marginTop: 20,
    marginBottom: 20,
  },
  ReviewTitle: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
  },
  ReviewText: {
    color: '#989797',
    fontSize: 9,
  },
  ReviewTextInput: {
    backgroundColor: '#E0DFDF',
    minHeight: 95,
    marginTop: 10,
    paddingTop: 20,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  RateConc: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemProdConc: {marginLeft: 20},
  itemProdTitle: {fontSize: 12, fontWeight: 'bold'},
  itemProdSubTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(152, 151, 151, 1)',
  },
  cartFuncButton: {
    marginTop: 15,
    backgroundColor: '#222222',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 5,
  },
  cartFunc: {
    marginTop: 20,
  },
});
