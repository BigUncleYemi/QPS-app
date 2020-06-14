/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {Button} from 'native-base';
import BlueInput from '../../components/BlueInput';

const ChangePassword: () => React$Node = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.welcome}>Password change</Text>
			</View>
			<BlueInput password label="Current password" />
			<BlueInput password label="New password" />
			<BlueInput password label="Confirm new password" />
			<Button style={styles.startButton}>
				<Text style={styles.startButtonText}>Change Password</Text>
			</Button>
		</View>
	);
};

export default ChangePassword;
