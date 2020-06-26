import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    color: 'rgba(224, 223, 223, 1)',
    fontSize: 15,
    fontWeight: '600',
  },
  buttonIcon: {
    fontSize: 25,
    fontWeight: '800',
    color: 'rgba(34, 139, 196, 1)',
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    fontSize: 19,
  },
  startButton: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#228BC4',
    alignItems: 'center',
    marginBottom: 40,
  },
});
