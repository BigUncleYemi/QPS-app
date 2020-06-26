import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  conc: {
    flex: 1,
    backgroundColor: '#055B89',
  },
  viewPager: {
    flex: 1,
  },
  pagerCon: {
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
    paddingBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
  },
  pagerTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  pagerSubTitle: {
    marginTop: 3,
    color: '#fff',
    fontSize: 17,
    display: 'flex',
    flexDirection: 'column',
  },
  lineYellow: {
    borderBottomWidth: 10,
    borderBottomColor: '#F8CD28',
    borderStyle: 'solid',
    width: 'auto',
  },
  underLin: {
    marginBottom: -15,
  },
  fullDot: {
    margin: 8,
    width: 12,
    borderRadius: 50,
    height: 12,
    backgroundColor: '#FFFFFF',
  },
  emptyDot: {
    margin: 8,
    width: 8,
    borderRadius: 50,
    height: 8,
    backgroundColor: '#FFFFFF6c',
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    fontSize: 18,
  },
  startButton: {
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#228BC4',
    alignItems: 'center',
  },
  img: {
    width: width * 0.86,
    height: height / 2.2,
  },
  imgCon: {
    marginTop: 30,
    height: height / 2.2,
  },
  dotsConc: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 165 : 124,
    left: width * 0.046,
  },
});
