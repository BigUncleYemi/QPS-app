import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: '#055b88',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greet: {
    fontSize: 12,
    fontWeight: '100',
  },
  welcome: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '700',
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    fontSize: 18,
  },
  startButton: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 6,
    paddingBottom: 6,
    height: 45,
    backgroundColor: '#228BC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLayoutStyle: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#055B89',
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: '#00000076',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.35,
  },
});
