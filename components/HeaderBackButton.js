import React from 'react';
import {Icon} from 'native-base';
import {View, Platform} from 'react-native';

function HeaderBackButton({onPressAction, btnColor = '#333333'}) {
  return Platform.OS == 'ios' ? (
    <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 5}}>
      <Icon
        onPress={() => onPressAction()}
        name="ios-arrow-back"
        style={{color: btnColor}}
      />
    </View>
  ) : (
    <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 5}} />
  );
}

export default HeaderBackButton;
