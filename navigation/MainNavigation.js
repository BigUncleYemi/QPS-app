import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import {
  TabAccount,
  TabAccountActive,
  TabCalculator,
  TabCalculatorActive,
  TabCart,
  TabCartActive,
  TabHome,
  TabHomeActive,
} from '../assets/images';

import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/Account';
import ActivitiesScreen from '../screens/Activities';
import CostQuoteScreen from '../screens/CostQuote';
import HomeScreen from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChangePassword from '../screens/Account/ChangePassword';
import AccountDetails from '../screens/Account/AccountDetails';
import HelpCenter from '../screens/HelpCenter';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AccountNavigation = () => (
  <Stack.Navigator
    initialRouteName="Account"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Account-details" component={AccountDetails} />
    <Stack.Screen name="change-password" component={ChangePassword} />
    <Stack.Screen name="Help-center" component={HelpCenter} />
  </Stack.Navigator>
);

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return (
                <View style={styles.iconCon}>
                  {focused ? (
                    <TabHomeActive
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  ) : (
                    <TabHome
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  )}
                </View>
              );
            case 'Activities':
              return (
                <View style={styles.iconCon}>
                  {focused ? (
                    <TabCartActive
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  ) : (
                    <TabCart
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  )}
                </View>
              );
            case 'Cost Quote':
              return (
                <View style={styles.iconCon}>
                  {focused ? (
                    <TabCalculatorActive
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  ) : (
                    <TabCalculator
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  )}
                </View>
              );
            case 'Account':
              return (
                <View style={styles.iconCon}>
                  {focused ? (
                    <TabAccountActive
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  ) : (
                    <TabAccount
                      style={{
                        color,
                        fontSize: size,
                      }}
                    />
                  )}
                </View>
              );
            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#228BC4',
        inactiveTintColor: '#013D5D',
        style: {backgroundColor: '#055B89', height: 65, paddingBottom: 17},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen
        initialParams={{
          data: null,
        }}
        name="Cost Quote"
        component={CostQuoteScreen}
      />
      <Tab.Screen name="Account" component={AccountNavigation} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconCon: {
    margin: 8,
    paddingTop: 10,
  },
});
