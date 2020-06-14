/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
	Body,
	Button,
	Header,
	Icon,
	Left,
	Picker,
	Right,
	Thumbnail,
	Title,
} from 'native-base';
import {
	Dimensions,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, {useState} from 'react';

import {Filter} from '../../assets/images/index';
import {QuickCalculator} from '../../assets/images';
import {styles} from './style';

const {width} = Dimensions.get('window');

const product = [
	{
		title: 'A1 Posters',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-72.png'),
	},
	{
		title: 'A4 Flyers (Single Sided)',
		subTitle: 'from ₦17,500.00 / 200',
		img: require('../../assets/images/Image-102.png'),
	},
	{
		title: 'A4 Notepads',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-82.png'),
	},
	{
		title: 'A5 Table Calendar',
		subTitle: 'from ₦13,999.00 / 10',
		img: require('../../assets/images/Image-112.png'),
	},
	{
		title: 'Simple Mugs',
		subTitle: 'Simple Mugs',
		img: require('../../assets/images/Image-12.png'),
	},
	{
		title: 'A4 Bi-Fold Brochures',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-22.png'),
	},
	{
		title: 'A1 Posters',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-72.png'),
	},
	{
		title: 'A4 Flyers (Single Sided)',
		subTitle: 'from ₦17,500.00 / 200',
		img: require('../../assets/images/Image-102.png'),
	},
	{
		title: 'A4 Notepads',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-82.png'),
	},
	{
		title: 'A5 Table Calendar',
		subTitle: 'from ₦13,999.00 / 10',
		img: require('../../assets/images/Image-112.png'),
	},
	{
		title: 'Simple Mugs',
		subTitle: 'Simple Mugs',
		img: require('../../assets/images/Image-12.png'),
	},
	{
		title: 'A4 Bi-Fold Brochures',
		subTitle: 'from ₦68,999.00 / 200',
		img: require('../../assets/images/Image-22.png'),
	},
];

const HomeScreen: () => React$Node = ({navigation}) => {
	const [selected, handleSelected] = useState('');
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Text style={styles.greet}>Hello there 😊</Text>
					<Text style={styles.welcome}>Welcome</Text>
				</View>
				<Button
					iconLeft
					bordered
					danger
					onPress={() => navigation.navigate('Cost Quote')}
					style={styles.quickPrintButton}>
					<QuickCalculator />
					<View
						style={{
							marginLeft: 10,
						}}>
						<Text
							numberOfLines={2}
							style={[
								styles.quickPrintButtonText,
								{
									marginBottom: -3,
								},
							]}>
							Cost{' '}
						</Text>
						<Text
							style={[
								styles.quickPrintButtonText,
								{
									marginTop: -3,
								},
							]}>
							Calculator
						</Text>
					</View>
				</Button>
			</View>
			<View style={styles.filter}>
				<View>
					<Picker
						renderHeader={backAction => (
							<Header>
								<Left>
									<Button transparent onPress={backAction}>
										<Icon name="arrow-back" style={styles.selectBack} />
									</Button>
								</Left>
								<Body style={{flex: 3}}>
									<Title style={{color: '#000000'}}>Select Categories</Title>
								</Body>
								<Right />
							</Header>
						)}
						mode="dropdown"
						iosIcon={
							<Icon
								name="angle-down"
								type="FontAwesome5"
								style={{color: '#228BC4'}}
							/>
						}
						selectedValue={selected}
						style={{
							width: width * 0.7,
							backgroundColor: '#ffffff',
							height: 45,
						}}
						onValueChange={handleSelected}>
						<Picker.Item label="Wallet" value="key0" />
						<Picker.Item label="ATM Card" value="key1" />
						<Picker.Item label="Debit Card" value="key2" />
						<Picker.Item label="Credit Card" value="key3" />
						<Picker.Item label="Net Banking" value="key4" />
					</Picker>
				</View>
				<Button
					iconLeft
					style={{
						width: width * 0.15,
						backgroundColor: '#ffffff',
						alignItems: 'center',
						justifyContent: 'center',
						borderWidth: 0,
						borderColor: '#fff',
						elevation: 0,
					}}>
					<Filter />
				</Button>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.scrollView}>
					{product.map((item, index) => (
						<TouchableOpacity
							onPress={() => navigation.navigate('ProductView')}
							key={index}
							style={styles.ItemConc}>
							<Thumbnail
								square
								resizeMode="contain"
								style={styles.itemImg}
								source={item.img}
							/>
							<View style={styles.itemProdConc}>
								<Text style={styles.itemProdTitle}>{item.title}</Text>
								<Text style={styles.itemProdSubTitle}>{item.subTitle}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
