/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
	View,
	KeyboardAvoidingView,
	TextInput,
	Keyboard,
	Text,
	TouchableOpacity,
	Platform,
	TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './style';

const OTPScreen: () => React$Node = ({route, navigation}) => {
	const handleKeyDown = () => {
		return navigation.navigate('Main');
	};

	const [otpNumber, handleOTPNumber] = useState('');
  const {phoneNumber} = route.params;
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<React.Fragment>
					<View style={styles.inner}>
						<Text style={styles.subHeader}>
							A verification code has been sent you your phone {phoneNumber}
						</Text>
						<TextInput
							keyboardType="number-pad"
							returnKeyType="done"
							returnKeyLabel="done"
							onSubmitEditing={handleKeyDown}
							value={otpNumber}
							onChangeText={handleOTPNumber}
							offset={20}
							initialCountry="ng"
							style={[
								styles.textInput,
								{
									width: 100,
									marginTop: 20,
									borderColor: 'rgba(34, 139, 196, 1)',
									backgroundColor: 'rgba(34, 139, 196, 0.25)',
								},
							]}
						/>
					</View>
					<TouchableOpacity>
						<Text style={styles.linkText}>Not your phone number?</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.linkText}>Resend code?</Text>
					</TouchableOpacity>
				</React.Fragment>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default OTPScreen;
