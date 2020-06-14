/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import React, {useState} from 'react';

import CountryPicker from 'react-native-country-picker-modal';
import {Item} from 'native-base';
import {styles} from './style';

const VerificationScreen: () => React$Node = ({navigation}) => {
	const [phoneNumber, handleNumber] = useState('+234');
	const [countryCode, setCountryCode] = useState('NG');
	const [country, setCountry] = useState({
		cca2: 'NG',
		currency: ['NGN'],
		callingCode: ['234'],
		region: 'Africa',
		subregion: 'Western Africa',
		flag: 'flag-ng',
		name: 'Nigeria',
	});
	const onSelect = count => {
		setCountryCode(count.cca2);
		setCountry(count);
		handleNumber(`+${count.callingCode[0]}`);
	};
	const handleKeyDown = () => {
		navigation.navigate('OTP', {
			phoneNumber,
		});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<React.Fragment>
					<View style={styles.inner}>
						<Text style={styles.header}>Welcome</Text>
						<Text style={styles.subHeader}>Enter your phone number</Text>
						<Item
							style={[
								styles.textInput,
								{
									marginTop: 20,
									borderColor: 'rgba(34, 139, 196, 1)',
									backgroundColor: 'rgba(34, 139, 196, 0.25)',
									paddingLeft: 10,
								},
							]}>
							<CountryPicker
								countryCode={countryCode}
								withFilter={true}
								withFlag={true}
								withCountryNameButton={false}
								withCallingCode={true}
								withEmoji={true}
								onSelect={onSelect}
								visible={
									phoneNumber.length <=
									(country.callingCode[0] && country.callingCode[0].length)
								}
							/>
							<TextInput
								keyboardType="number-pad"
								returnKeyType="done"
								returnKeyLabel="done"
								onSubmitEditing={handleKeyDown}
								value={phoneNumber}
								onChangeText={handleNumber}
								style={{width: '90%'}}
							/>
						</Item>
					</View>
					<Text style={styles.helperText}>
						By continuing,You’ll receive an SMS for Verification
					</Text>
				</React.Fragment>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default VerificationScreen;
