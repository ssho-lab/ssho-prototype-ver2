import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  bulletView: {
    flex: 1,
  },
  swiper: {
    backgroundColor: '#dfe6e9',
  },
  card: {},
  buttonGroup: {
    flex: 1,
    marginTop: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
  },
  buttons: {
    width: 400,
    height: 100,
    backgroundColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'coral',
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  label: {
    backgroundColor: 'black',
    borderColor: 'black',
    color: 'white',
    borderWidth: 1,
  },
  leftWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
  rightWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
  topWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tutorialText: {
    position: 'absolute',
    top: 20,
    left: Dimensions.get('window').width / 2 - 35,
    color: '#c0392b',
    fontSize: 20,
  },
});

export default styles;
