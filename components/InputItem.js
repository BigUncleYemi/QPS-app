/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Icon, Item} from 'native-base';
import {
	Dimensions,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Text,
} from 'react-native';
import React, {useState} from 'react';

const {width} = Dimensions.get('window');

const InputItem = ({placeholder, label, password = false, icon, verified}) => {
	const [value, setValue] = useState('');
	const [secure, setSecure] = useState(password);
	function handleValue(text) {
		setValue(text);
	}
	return (
		<View style={{marginTop: 10, width: '100%', marginBottom: 10}}>
			{label && (
				<Text
					style={{
						marginBottom: -18,
						color: '#989797',
						fontSize: 15,
						fontWeight: '100',
					}}>
					{label}
				</Text>
			)}
			<Item
				style={[
					{
						marginTop: 15,
						height: 50,
						backgroundColor: 'rgba(255, 255, 255, 1)',
						paddingLeft: 16,
						paddingRight: 16,
					},
				]}>
				<TextInput
					placeholderTextColor="#E0DFDF"
					placeholder={placeholder}
					value={value}
					secureTextEntry={secure}
					onChangeText={text => handleValue(text)}
					style={{width: '90%', fontSize: 14}}
				/>
				{password && (
					<TouchableWithoutFeedback onPress={() => setSecure(!secure)}>
						<Icon
							name={secure ? 'visibility' : 'visibility-off'}
							type="MaterialIcons"
						/>
					</TouchableWithoutFeedback>
				)}
				{icon && <Icon name={icon.name} type={icon.type} style={icon.style} />}
			</Item>
		</View>
	);
};

export default InputItem;
