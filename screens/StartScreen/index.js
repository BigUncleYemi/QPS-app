/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Animated, Text, View} from 'react-native';
import {Button, Thumbnail} from 'native-base';
import React, {useState} from 'react';

import ViewPager from '@react-native-community/viewpager';
import {styles} from './style';

const StartScreen: () => React$Node = ({navigation}) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const fadeAnimOut = React.useRef(new Animated.Value(0)).current;

  const [pos, handlePos] = useState(0);
  React.useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnimOut, {
      toValue: 0.3,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, fadeAnimOut, pos]);

  return (
    <View style={styles.conc}>
      <View style={styles.dotsConc}>
        <View style={pos === 0 ? styles.fullDot : styles.emptyDot} />
        <View style={pos === 1 ? styles.fullDot : styles.emptyDot} />
        <View style={pos === 2 ? styles.fullDot : styles.emptyDot} />
      </View>
      <View style={styles.pagerCon}>
        <ViewPager
          onPageSelected={e => handlePos(e.nativeEvent.position)}
          style={styles.viewPager}
          initialPage={0}>
          <Animated.View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: pos === 0 ? fadeAnim : fadeAnimOut,
            }}
            key="1">
            <View>
              <Text style={styles.pagerTitle}>Need a Quick Print?</Text>
              <View style={styles.pagerSubTitle}>
                <Text
                  style={[
                    styles.pagerSubTitle,
                    {
                      marginBottom: -2,
                    },
                  ]}>
                  Get instant Delivery{' '}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text
                    style={[
                      styles.pagerSubTitle,
                      {
                        marginTop: -3,
                      },
                    ]}>
                    from the{' '}
                  </Text>
                  <View
                    style={{
                      borderBottomColor: '#F8CD28',
                      borderBottomWidth: 8,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 19,
                        marginBottom: -13,
                      }}>
                      No. 1 print shop
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.imgCon}>
              <Thumbnail
                large
                square
                resizeMode="contain"
                style={styles.img}
                source={require('../../assets/images/first.png')}
              />
            </View>
            <View />
          </Animated.View>
          <Animated.View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: pos === 1 ? fadeAnim : fadeAnimOut,
            }}
            key="2">
            <View>
              <Text style={styles.pagerTitle}>Quick product order</Text>
              <View style={styles.pagerSubTitle}>
                <Text
                  style={[
                    styles.pagerSubTitle,
                    {
                      marginBottom: -2,
                    },
                  ]}>
                  Shop for any print{' '}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text
                    style={[
                      styles.pagerSubTitle,
                      {
                        marginTop: -3,
                      },
                    ]}>
                    from our{' '}
                  </Text>
                  <View
                    style={{
                      borderBottomColor: '#C52874',
                      borderBottomWidth: 8,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 19,
                        marginBottom: -13,
                      }}>
                      product store
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.imgCon}>
              <Thumbnail
                large
                square
                resizeMode="contain"
                style={styles.img}
                source={require('../../assets/images/second.png')}
              />
            </View>
            <View />
          </Animated.View>
          <Animated.View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: pos === 2 ? fadeAnim : fadeAnimOut,
            }}
            key="3">
            <View>
              <Text style={styles.pagerTitle}>Quick cost quote</Text>
              <View style={styles.pagerSubTitle}>
                <Text
                  style={[
                    styles.pagerSubTitle,
                    {
                      marginBottom: -2,
                    },
                  ]}>
                  Get instant print{' '}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <View
                    style={{
                      borderBottomColor: '#F8CD28',
                      borderBottomWidth: 8,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 19,
                        marginBottom: -13,
                      }}>
                      estimate
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.pagerSubTitle,
                      {
                        marginTop: -3,
                      },
                    ]}>
                    {' '}
                    even before ordering
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.imgCon}>
              <Thumbnail
                large
                square
                resizeMode="contain"
                style={styles.img}
                source={require('../../assets/images/third.png')}
              />
            </View>
            <View />
          </Animated.View>
        </ViewPager>
        <Button
          style={styles.startButton}
          onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.startButtonText}>Get Started</Text>
        </Button>
      </View>
    </View>
  );
};

export default StartScreen;
