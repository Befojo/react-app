import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  libraryTitle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  libraryShowIcon: {
    fontFamily: 'fontawesome',
  },
});

EStyleSheet.build();
