import React from 'react';
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

const Stack = createStackNavigator();

const AppNavigation = () => (
	<Stack.Navigator
		initialRouteName="Order"
		screenOptions={{
			headerShown: false,
		}}>
		<Stack.Screen name="Start" component={StartScreen} />
		<Stack.Screen name="Verification" component={VerificationScreen} />
		<Stack.Screen name="OTP" component={OTPScreen} />
		<Stack.Screen name="Auth" component={AuthScreen} />
		<Stack.Screen name="Main" component={MainNavigation} />
		<Stack.Screen name="ProductView" component={ProductViewScreen} />
		<Stack.Screen name="OrderDetails" component={OrderDetails} />
		<Stack.Screen name="Auths" component={Main} />
		<Stack.Screen name="Order" component={OrderScreen} />
	</Stack.Navigator>
);

export default AppNavigation;
