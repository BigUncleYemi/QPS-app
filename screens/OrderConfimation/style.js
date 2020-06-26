import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 0,
    padding: 30,
  },
  appContainer: {
    marginBottom: 30,
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
    backgroundColor: '#228BC4',
    alignItems: 'center',
  },
});
