import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	inner: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		fontSize: 26,
		marginBottom: 0,
		paddingBottom: 0,
		fontWeight: 'bold',
	},
	subHeader: {
		fontSize: 17,
		marginBottom: 0,
		paddingBottom: 0,
		fontWeight: '100',
	},
	textInput: {
		height: 40,
		borderColor: '#000000',
		borderBottomWidth: 1,
		marginBottom: 36,
	},
	btnContainer: {
		backgroundColor: 'white',
		marginTop: 12,
	},
	helperText: {
		width: '80%',
		fontSize: 17,
		fontWeight: '100',
		justifyContent: 'flex-end',
		paddingBottom: 50,
	},
	linkText: {
		width: '80%',
		paddingBottom: 20,
		fontSize: 17,
		fontWeight: '700',
		justifyContent: 'flex-end',
	},
	containerPhone: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
		paddingTop: 60,
	},
});
