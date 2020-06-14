import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		paddingBottom: 0,
		marginTop: Platform.OS === 'ios' ? 50 : 10,
	},
	quickPrintButton: {
		borderColor: 'rgba(197, 40, 116, 1)',
		padding: 9,
		backgroundColor: 'rgba(197, 40, 116, 0.08)',
		borderRadius: 9,
		flexDirection: 'row',
		alignItems: 'center',
	},
	quickPrintButtonText: {
		color: 'rgba(197, 40, 116, 1)',
		fontSize: 12,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	greet: {
		fontSize: 12,
		fontWeight: '100',
	},
	welcome: {
		fontSize: 25,
		fontWeight: '700',
	},
	filter: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	selectBack: {color: '#000000', padding: 20, fontSize: 25},
	ItemConc: {
		width: width * 0.42,
		position: 'relative',
		marginBottom: 10,
	},
	scrollView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	itemImg: {
		width: '100%',
		height: 160,
		borderRadius: 18,
	},
	itemProdConc: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		backgroundColor: 'rgba(255, 255, 255, 1)',
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		borderBottomRightRadius: 18,
		borderBottomLeftRadius: 18,
	},
	itemProdTitle: {fontSize: 11, fontWeight: '700'},
	itemProdSubTitle: {
		fontSize: 9,
		color: 'rgba(152, 151, 151, 1)',
	},
});
