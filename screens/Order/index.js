/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Button, Thumbnail, Icon} from 'native-base';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './style';
import Modal from 'react-native-modal';
import BlueInput from '../../components/BlueInput';
import {Coupon} from '../../assets/images';
import PayStack from '../../components/lib/PayStack';

const styleLocal = StyleSheet.create({
	btn: {
		backgroundColor: '#ffffff',
		borderColor: '#e1dfdf',
		borderWidth: 2,
		padding: 0,
		width: '50%',
		justifyContent: 'center',
	},
	btnNone: {
		borderColor: '#e1dfdf',
		borderWidth: 2,
		backgroundColor: '#e1dfdf',
		padding: 0,
		width: '50%',
		justifyContent: 'center',
	},
});

const RemoveItemModal = ({isModalVisible, toggleModal}) => {
	return (
		<Modal isVisible={isModalVisible}>
			<View
				style={{
					backgroundColor: '#ffffff',
					padding: 30,
					paddingBottom: 20,
				}}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<Text
						style={{
							color: '#000000',
							marginTop: 10,
							fontWeight: 'bold',
							fontSize: 25,
						}}>
						Remove From Cart
					</Text>
				</View>
				<Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
					You’re about to Delete a product from your cart
				</Text>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
					}}>
					<Button
						style={[
							{
								marginTop: 15,
								width: '40%',
								alignItems: 'center',
								borderRadius: 8,
							},
						]}
						transparent>
						<Text
							style={{
								color: 'red',
								textAlign: 'center',
								fontWeight: '400',
								width: '100%',
								fontSize: 14,
							}}>
							Delete
						</Text>
					</Button>
					<Button
						onPress={toggleModal}
						style={[
							styles.startButton,
							{
								width: '40%',
								alignItems: 'center',
								marginBottom: 10,
								borderRadius: 8,
							},
						]}>
						<Text
							style={{
								color: 'white',
								textAlign: 'center',
								fontWeight: '400',
								width: '100%',
								fontSize: 14,
							}}>
							Cancel
						</Text>
					</Button>
				</View>
			</View>
		</Modal>
	);
};

const TrackOrderModal = ({isModalVisible, toggleModal}) => {
	return (
		<Modal isVisible={isModalVisible}>
			<View
				style={{
					backgroundColor: '#ffffff',
					padding: 30,
				}}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<Text
						style={{
							color: '#000000',
							marginTop: 10,
							fontWeight: 'bold',
							fontSize: 25,
						}}>
						Track Order
					</Text>
					<Icon
						name="close"
						type="FontAwesome"
						onPress={toggleModal}
						style={{color: '#989797'}}
					/>
				</View>
				<Text style={{marginTop: 10, marginBottom: 10, fontWeight: '100'}}>
					Please input your tracking ID:
				</Text>
				<BlueInput />
				<Button block transparent style={{marginTop: -12}}>
					<Text
						style={{
							color: '#228BC4',
							textAlign: 'right',
							fontStyle: 'italic',
							fontSize: 10,
							width: '100%',
						}}>
						Don’t know your tracking ID?
					</Text>
				</Button>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingBottom: 10,
						marginBottom: 15,
					}}>
					<View
						style={{
							width: '100%',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}>
						<Button
							style={[
								styles.startButton,
								{width: '100%', marginBottom: 10, borderRadius: 8},
							]}
							onPress={toggleModal}>
							<Text style={styles.startButtonText}>Track</Text>
						</Button>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const OrderItem = ({navigation, toggleTrackModal}) => {
	return (
		<View style={styles.card}>
			<View style={styles.cardTop}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Thumbnail
						square
						source={require('../../assets/images/Image-32.png')}
					/>
					<View style={styles.itemProdConc}>
						<Text style={styles.itemProdTitle}>A2 Posters</Text>
						<Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
					</View>
				</View>
				<Icon
					name="angle-right"
					type="FontAwesome5"
					style={styles.buttonIcon}
				/>
			</View>
			<View style={styles.cardTop}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Thumbnail
						square
						source={require('../../assets/images/Image-142.png')}
					/>
					<View style={styles.itemProdConc}>
						<Text style={styles.itemProdTitle}>A2 Posters</Text>
						<Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
					</View>
				</View>
				<Icon
					name="angle-right"
					type="FontAwesome5"
					style={styles.buttonIcon}
				/>
			</View>
			<View style={styles.cardTop}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Thumbnail
						square
						source={require('../../assets/images/Image-152.png')}
					/>
					<View style={styles.itemProdConc}>
						<Text style={styles.itemProdTitle}>A2 Posters</Text>
						<Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
					</View>
				</View>
				<Icon
					name="angle-right"
					type="FontAwesome5"
					style={styles.buttonIcon}
				/>
			</View>
			<View style={[styles.actionConc, {justifyContent: 'space-between'}]}>
				<View>
					<Text style={{fontSize: 12, fontWeight: '700', color: '#E0DFDF'}}>
						Shipping
					</Text>
					<Text style={{fontSize: 17, marginTop: 10}}>Total</Text>
				</View>
				<View>
					<Text
						style={{
							textAlign: 'right',
							fontSize: 12,
							fontWeight: '700',
							color: '#E0DFDF',
						}}>
						₦1,500.00
					</Text>
					<Text
						style={{
							textAlign: 'right',
							fontSize: 17,
							fontWeight: '700',
							marginTop: 10,
						}}>
						223,480
					</Text>
				</View>
			</View>
		</View>
	);
};

const OrderScreen: () => React$Node = ({navigation}) => {
	const [active, handleActive] = React.useState(1);

	const handleClick = active => {
		handleActive(active);
	};

	const [isTrackModalVisible, setTrackModalVisible] = useState(false);

	const toggleTrackModal = () => {
		setTrackModalVisible(!isTrackModalVisible);
	};

	const [isRemoveItemModalVisible, setRemoveItemModalVisible] = useState(false);

	const toggleRemoveItemModal = () => {
		setRemoveItemModalVisible(!isRemoveItemModalVisible);
	};

	const getReference = () => {
		let text = '';
		let possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

		for (let i = 0; i < 6; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return `QPS-APP-${text}`;
	};

	return (
		<View style={styles.container}>
			<RemoveItemModal
				toggleModal={toggleRemoveItemModal}
				isModalVisible={isRemoveItemModalVisible}
			/>
			<TrackOrderModal
				toggleModal={toggleTrackModal}
				isModalVisible={isTrackModalVisible}
			/>
			<View style={styles.header}>
				<Text style={styles.welcome}>Order Checkout</Text>
			</View>
			<View style={styles.ProfileRoot}>
				<View style={styles.ProfileTab}>
					<Button
						onPress={() => handleClick(1)}
						style={[
							active === 1 ? styleLocal.btn : styleLocal.btnNone,
							{
								borderTopLeftRadius: 7,
								borderBottomLeftRadius: 7,
								height: 'auto',
							},
						]}>
						<Text
							style={[
								active === 1
									? {
											color: '#489dce',
									  }
									: {
											color: '#393939',
									  },
								styles.ProfileTabText,
							]}>
							Billing Details
						</Text>
					</Button>
					<Button
						onPress={() => handleClick(2)}
						style={[
							active === 2 ? styleLocal.btn : styleLocal.btnNone,
							{
								borderTopRightRadius: 7,
								borderBottomRightRadius: 7,
								height: 'auto',
							},
						]}>
						<Text
							style={[
								active === 2
									? {
											color: '#489dce',
									  }
									: {
											color: '#393939',
									  },
								styles.ProfileTabText,
							]}>
							Payment
						</Text>
					</Button>
				</View>
			</View>
			<ScrollView
				style={styles.appContainer}
				showsVerticalScrollIndicator={false}>
				{active === 1 && <React.Fragment />}
				{active === 2 && (
					<React.Fragment>
						<OrderItem />
						<Button
							style={styles.whiteButton}
							iconLeft
							onPress={() => navigation.navigate('Auth')}>
							<Coupon />
							<Text style={styles.whiteButtonText}>Apply Coupon Code</Text>
						</Button>
						<PayStack
							paystackKey={'pk_test_a4f7333be99a7c59da70a2084577a4d4b35243fc'}
							paystackSecretKey={
								'sk_test_95e0ad209100b755d9c2ec23eadca163178cd3c5'
							}
							amount={120000}
							billingEmail={'paystackwebview@something.com'}
							billingMobile={'09787377462'}
							billingName={'Oluwatobi Shokunbi'}
							ActivityIndicatorColor={'blue'}
							showPayButton={true}
							SafeAreaViewContainer={{marginTop: 5}}
							SafeAreaViewContainerModal={{marginTop: 5}}
							refNumber={getReference()}
							onCancel={e => toggleRemoveItemModal(e)}
							onSuccess={e =>
								navigation.navigate('Auths', {
									metadata: e,
								})
							}
							renderButton={onPress => (
								<Button style={styles.startButton} onPress={() => onPress()}>
									<Text style={styles.startButtonText}>Place Order</Text>
								</Button>
							)}
						/>
					</React.Fragment>
				)}
			</ScrollView>
		</View>
	);
};

export default OrderScreen;
