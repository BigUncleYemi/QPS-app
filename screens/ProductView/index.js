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
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {Thumbnail, Button} from 'native-base';
import SelectItem from '../../components/SelectItem';
import {Upload} from '../../assets/images';
import StarRating from 'react-native-star-rating';
const ProductTop = () => (
	<View>
		<Thumbnail
			square
			large
			style={styles.largeImg}
			source={{uri: 'https://via.placeholder.com/340x300'}}
		/>
		<View style={styles.largeImgDesc}>
			<Text style={styles.largeImgDescPrice}>from ₦68,999.00 / 200</Text>
			<Text style={styles.largeImgDescText}>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
				nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
				volutpat. Ut wisi enim ad minim veniam
			</Text>
		</View>
		<View style={styles.smallImgCon}>
			{['', '', '', ''].map((item, index) => (
				<Thumbnail
					key={index}
					square
					small
					style={styles.smallImg}
					source={{uri: 'https://via.placeholder.com/340x300'}}
				/>
			))}
		</View>
	</View>
);

const SpecSection = () => (
	<View>
		<SelectItem placeholder="Select Desired Quantity" />
		<SelectItem placeholder="Select Specifications" />
	</View>
);

const UploadImage = () => (
	<View style={styles.uploadConc}>
		<TouchableOpacity style={styles.upload}>
			<Upload />
			<Text style={styles.uploadText}>Add to Cart</Text>
		</TouchableOpacity>
	</View>
);

const PriceCard = () => (
	<React.Fragment>
		<View style={styles.TotalPrice}>
			<Text style={styles.TotalPriceTop}>Total to pay for this Order</Text>
			<Text style={styles.TotalPriceBottom}>$ 17,050</Text>
		</View>
		<Text style={styles.TotalPriceHint}>
			Please note that if no design has been uploaded, our system will
			automatically charge you for design services
		</Text>
		<Button style={[styles.startButton, {marginBottom: 10, borderRadius: 8}]}>
			<Text style={styles.startButtonText}>Proceed to Order</Text>
		</Button>
	</React.Fragment>
);

const Review = () => {
	const [review, handleReview] = useState('');
	return (
		<View style={styles.ReviewConc}>
			<Text style={styles.ReviewTitle}>Ratings and Reviews</Text>
			<Text style={styles.ReviewText}>
				There are no reviews yet, Be the first to review “A4 Notepads”
			</Text>
			<View>
				<TextInput
					style={styles.ReviewTextInput}
					multiline={true}
					numberOfLines={4}
					onChangeText={text => handleReview(text)}
					value={review}
					placeholder="Leave Your review here"
				/>
				<Button
					style={[styles.reviewButton, {marginBottom: 10, borderRadius: 6}]}>
					<Text style={styles.startButtonText}>Submit</Text>
				</Button>
			</View>
		</View>
	);
};

const Ratings = () => {
	const [rate, handleRate] = useState(0);
	return (
		<View style={styles.ReviewConc}>
			<Text style={styles.ReviewTitle}>Rate this Product</Text>
			<View style={styles.RateConc}>
				<View style={{alignItems: 'center'}}>
					<Text style={{fontSize: 54, fontWeight: '700'}}>{rate}</Text>
					<Text
						style={{
							marginTop: -20,
							fontWeight: '700',
							fontSize: 12,
							color: '#989797',
						}}>
						Out of 5
					</Text>
				</View>
				<View style={{width: '70%', marginTop: 20}}>
					<StarRating
						disabled={false}
						maxStars={5}
						rating={rate}
						starStyle={{color: '#fad95e'}}
						fullStarColor={'#fad95e'}
						halfStarEnabled={true}
						halfStarColor={'#fad95e'}
						selectedStar={rating => handleRate(rating)}
						containerStyle={{justifyContent: 'space-between', width: '100%'}}
					/>
					<Text
						style={{
							textAlign: 'right',
							paddingTop: 10,
							fontWeight: '700',
							fontSize: 12,
							color: '#989797',
						}}>
						10 Ratings
					</Text>
				</View>
			</View>
		</View>
	);
};

const RelatedProduct = () => {
	return (
		<View style={styles.ReviewConc}>
			<Text style={styles.ReviewTitle}>Related products</Text>
			{['', '', '', ''].map((item, index) => (
				<View key={index} style={styles.cardTop}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<Thumbnail
							square
							large
							style={{borderRadius: 10}}
							source={{uri: 'https://via.placeholder.com/340x300'}}
						/>
						<View style={styles.itemProdConc}>
							<Text style={styles.itemProdTitle}>A2 Posters</Text>
							<Text style={styles.itemProdSubTitle}>₦29,500.00</Text>
						</View>
					</View>
				</View>
			))}
		</View>
	);
};

const CartFunc = () => {
	return (
		<View style={styles.cartFunc}>
			<Button style={styles.cartFuncButton}>
				<Text style={styles.startButtonText}>View Cart</Text>
			</Button>
			<Button block transparent>
				<Text
					style={{
						color: '#228BC4',
						textAlign: 'center',
						fontSize: 14,
						fontWeight: '700',
					}}>
					Continue Shopping
				</Text>
			</Button>
		</View>
	);
};

const ProductViewScreen: () => React$Node = ({navigation}) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<React.Fragment>
					<View style={styles.header}>
						<Text style={styles.welcome}>A4 Notepads</Text>
					</View>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{marginTop: 10}}>
						<ProductTop />
						<CartFunc />
						<SpecSection />
						<UploadImage />
						<PriceCard />
						<Review />
						<Ratings />
						<RelatedProduct />
					</ScrollView>
				</React.Fragment>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default ProductViewScreen;
