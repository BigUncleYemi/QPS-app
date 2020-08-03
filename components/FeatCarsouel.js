import * as React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {CustomCachedImage} from 'react-native-img-cache';
import {Image} from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Carousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex ===
            (this.props.data && this.props.data.length - 1)
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0,
          });
        },
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({selectedIndex});
  };

  render() {
    return (
      <View style={{height: DEVICE_WIDTH * 0.3}}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {this.props.data &&
            this.props.data.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ProductView', {
                    productId: item.productId,
                    categoryId: item && item.categoryId,
                    hasCategory: this.props.category,
                  })
                }
                key={index}
                style={{
                  position: 'relative',
                  marginRight: 10,
                  height: DEVICE_WIDTH * 0.281,
                  width: DEVICE_WIDTH * 0.5,
                  // backgroundColor: '#333',
                }}>
                <CustomCachedImage
                  component={Image}
                  PlaceholderContent={<ActivityIndicator />}
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  loadingIndicatorSource={require('../assets/images/spinner.gif')}
                  source={{
                    uri: `${(item.image && item.image) ||
                      'https://via.placeholder.com/150.png'}`,
                  }}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export {Carousel};
