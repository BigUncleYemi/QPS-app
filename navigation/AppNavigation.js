import React, {useState} from 'react';
import {connect} from 'react-redux';
import Actions from '../redux/actions';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import VerificationScreen from '../screens/Verification/index';
import OTPScreen from '../screens/Verification/OTPScreen';
import MainNavigation from './MainNavigation';
import Main from '../screens/int';
import ProductViewScreen from '../screens/ProductView';
import OrderDetails from '../screens/Activities/OrderDetails';
import AuthScreen from '../screens/Auth';
import OrderScreen from '../screens/Order';
import TrackingScreen from '../screens/Tracking';
import OrderConfirmationScreen from '../screens/OrderConfimation';
import {getData, removeValue} from '../utils/helperFunc';

const Stack = createStackNavigator();

const AppNavigation = ({setUser}) => {
  const [isVeri, setVeri] = useState('');
  React.useEffect(() => {
    async function done(params) {
      const user = await getData('current-user');
      setUser(user);
    }
    done();
  }, [setUser]);
  React.useEffect(() => {
    async function done(params) {
      const data = await getData('verified');
      setVeri(data);
    }
    done();
  }, []);

  return (
    isVeri !== '' && (
      <Stack.Navigator
        initialRouteName={isVeri ? 'Main' : 'Start'}
        screenOptions={{
          headerShown: false,
        }}>
        {isVeri ? (
          <React.Fragment>
            <Stack.Screen name="Main" component={MainNavigation} />
            <Stack.Screen name="ProductView" component={ProductViewScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Auths" component={Main} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Track" component={TrackingScreen} />
            <Stack.Screen
              name="OrderConf"
              component={OrderConfirmationScreen}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />

            <Stack.Screen name="Main" component={MainNavigation} />
            <Stack.Screen name="ProductView" component={ProductViewScreen} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Auths" component={Main} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Track" component={TrackingScreen} />
            <Stack.Screen
              name="OrderConf"
              component={OrderConfirmationScreen}
            />
          </React.Fragment>
        )}
      </Stack.Navigator>
    )
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: data => dispatch(Actions.Auth.SetUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigation);
