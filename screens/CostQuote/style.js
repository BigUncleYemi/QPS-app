import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    marginTop: Platform.OS === 'ios' ? 50 : 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemBottom: {
    marginBottom: 40,
  },
  welcome: {
    fontSize: 25,
    fontWeight: '700',
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
  ProfileRoot: {
    // flex: 1,
    paddingTop: 10,
  },
  ProfileTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e1dfdf',
    borderRadius: 7,
  },
  ProfileTabText: {
    textAlign: 'center',
    fontSize: 13,
  },
  noLogConc: {marginTop: 20, marginBottom: 20},
  noLogText: {fontSize: 17, fontWeight: '100'},
  buttonIcon: {
    fontSize: 25,
    fontWeight: '800',
    paddingTop: 13,
    paddingRight: 13,
    color: 'rgba(34, 139, 196, 1)',
  },
  uploadConc: {
    marginTop: 10,
  },
  upload: {
    width: '100%',
    backgroundColor: '#E0DFDF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  uploadText: {
    marginTop: 10,
    color: '#989797',
  },
  TotalPriceHint: {
    color: '#989797',
    fontSize: 10,
    marginTop: 10,
  },
});
